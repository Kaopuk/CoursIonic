import {Appareil} from "../models/Appareil";
import {Subject} from "rxjs";

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class AppareilsServices {

  appareils$ = new Subject<Appareil[]>();

  appareilsList: Appareil[] = [];

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
