import { Component } from '@angular/core';
import {SingleAppareilPage} from "./single-appareil/single-appareil";
import {ModalController} from "ionic-angular";


@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})

export class AppareilsPage{

  appareilsList = [
    {
      name: 'Machine à laver',
      description: [
        'Volume : 6 litres',
        'Temps de lavage : 2 heures',
        'Consommation : 173kwh/an'
      ]
    },
    {
      name: 'Télévision',
      description: [
        'Dimension : 40 pouces',
        'Consommation : 22kwh/an'
      ]
    },
    {
      name: 'Ordinateur',
      description: [
        'Marque : fait maison',
        'Consommation  : 500 kwh/an'
      ]
    }
  ];

    constructor(private modalCtrl: ModalController) {
    }

    onLoadAppareil(appareil: {name: string, description: string[]}) {
      let modal = this.modalCtrl.create(SingleAppareilPage, {appareil: appareil});
      modal.present();
    }
}
