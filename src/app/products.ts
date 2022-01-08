export interface Product {
    id: number;
    name: string;
    picture: string;
    price: number;
    taille: string;
    senteur: string;
    color: string;
    topping: string;
    temps: string;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Sphére',
      picture: "./assets/Image/Phto.jpg",
      price: 10,
      taille: '10*10*10',
      senteur: 'vanille',
      color: 'blanc',
      topping: '',
      temps: '4h',
      description: 'Une bougie en forme de sphére'
    },
    {
      id: 2,
      name: 'Pellote',
      picture: "./assets/Image/Phto.jpg",
      price: 6,
      taille: '10*10*10',
      senteur: 'vanille',
      color: 'blanc',
      topping: '',
      temps: '4h',
      description: 'Une mignone petite pelote'
    },
    {
      id: 3,
      name: 'Grand pot',
      picture: "./assets/Image/Phto.jpg",
      price: 15,
      taille: '10*10*10',
      senteur: 'vanille',
      color: 'blanc',
      topping: '',
      temps: '4h',
      description: ''
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */