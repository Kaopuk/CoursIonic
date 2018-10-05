import {Appareil} from "../models/Appareil";

export class AppareilsServices {

  appareilsList: Appareil[] = [
    {
      name: 'Machine à laver',
      description: [
        'Volume : 6 litres',
        'Temps de lavage : 2 heures',
        'Consommation : 173kwh/an',

      ],
      isOn: true
    },
    {
      name: 'Télévision',
      description: [
        'Dimension : 40 pouces',
        'Consommation : 22kwh/an'
      ],
      isOn: true
    },
    {
      name: 'Ordinateur',
      description: [
        'Marque : fait maison',
        'Consommation  : 500 kwh/an'
      ],
      isOn: false
    }
  ];

}
