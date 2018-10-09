import {Appareil} from "../models/Appareil";
import {Subject} from "rxjs";

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class AppareilsServices {

  appareils$ = new Subject<Appareil[]>();

  appareilsList: Appareil[] = [
    {
      name: 'Machine à laver',
      description: [
        'Volume : 6 litres',
        'Temps de lavage : 2 heures',
        'Consommation : 173kwh/an',

      ],
      isOn: true,
      startTime: '',
      endTime: ''
    },
    {
      name: 'Télévision',
      description: [
        'Dimension : 40 pouces',
        'Consommation : 22kwh/an'
      ],
      isOn: true,
      startTime: '',
      endTime: ''
    },
    {
      name: 'Ordinateur',
      description: [
        'Marque : fait maison',
        'Consommation  : 500 kwh/an'
      ],
      isOn: false,
      startTime: '',
  endTime: ''
    }
  ];

  addAppareil(appareil:Appareil) {
    this.appareilsList.push(appareil);
    this.emitAppareils();
  }

  emitAppareils() {
    this.appareils$.next(this.appareilsList.slice());
  }

  saveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('appareils').set(this.appareilsList).then(
        (data: DataSnapshot) => {
          resolve(data);
        }
      ).catch(
        (error) => {
          reject(error);
        }
      );
    });
  }

  retrieveData() {
    return new Promise((resolve, reject) => {
      firebase.database().ref('appareils').once('value').then(
        (data: DataSnapshot) => {
          this.appareilsList = data.val();
          this.emitAppareils();
          resolve('Données récupérées avec succès !');
        }
      ).catch(
        (error) => {
          reject(error);
        }
      );
    });
  }
}
