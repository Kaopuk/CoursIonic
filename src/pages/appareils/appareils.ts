import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {SingleAppareilPage} from "./single-appareil/single-appareil";

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

    constructor(private navCtrl: NavController) {
    }

    onLoadAppareil(appareil: {name: string, description: string[]}) {
      this.navCtrl.push(SingleAppareilPage, {appareil: appareil});
    }
}
