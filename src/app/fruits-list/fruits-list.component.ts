import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { from } from 'rxjs';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css']
})
export class FruitsListComponent implements OnInit {
  public fruits: Fruit[] = [
    new Fruit('Raisin',
     'https://fr.wikipedia.org/wiki/Raisin#/media/Fichier:Autumn_Royal_grapes.jpg',
     'Le raisin est le fruit de la vigne (Vitis). Le raisin de la vigne cultivée Vitis vinifera est un des fruits les plus cultivés au monde, avec 68 millions de tonnes produites en 2010, derrière les agrumes (124 millions), les bananes (102 millions) et les pommes (70 millions)1. Il se présente sous la forme de grappes composées de nombreux grains, qui sont sur le plan botanique des baies, de petite taille et de couleur claire, pour le raisin blanc (verdâtre, jaunâtre, jaune doré) ou plus foncée, pour le raisin rouge (mauve, rose ou noir-violet)'),
    new Fruit('Pomme',
     'https://media.gerbeaud.net/2017/01/640/pomme-detouree.jpg',
     'La pomme est un fruit comestible produit par un pommier. Les pommiers sont cultivés mondialement et représentent l\'espèce la plus cultivée du genre Malus. L\'arbre est originaire d\'Asie centrale, où son ancêtre sauvage, le Malus sieversii peut encore être trouvé de nos jours.'),
    new Fruit('Ananas', 
    'https://www.havea.com/media/catalog/product/cache/44f3c051f19eb24a4baafa2b36eefbbb/b/2/b2e1113dcf7bbda2b134747062d2c13531d7c291_ananas_min.jpg',
    'L\'ananas (Ananas comosus) est une plante xérophyte, originaire d\'Amérique du Sud, plus spécifiquement du Paraguay, du nord-est de l\'Argentine et sud du Brésil. Il est connu principalement pour son fruit comestible, qui est en réalité un fruit composé.'),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
