import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.css']
})
export class FruitDetailsComponent implements OnInit {
  public fruit = new Fruit('Pomme',
   'https://media.gerbeaud.net/2017/01/640/pomme-detouree.jpg',
  'La pomme est un fruit comestible produit par un pommier. Les pommiers sont cultivés mondialement et représentent l\'espèce la plus cultivée du genre Malus. L\'arbre est originaire d\'Asie centrale, où son ancêtre sauvage, le Malus sieversii peut encore être trouvé de nos jours.')

  constructor() { }

  ngOnInit(): void {
  }

}
 