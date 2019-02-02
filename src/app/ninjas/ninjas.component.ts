import { Component } from '@angular/core';
import { shuffle } from 'lodash';
import { ninjas, sensei, Ninja } from './ninjas';

@Component({
  selector: 'app-ninjas',
  templateUrl: './ninjas.component.html',
  styleUrls: ['./ninjas.component.scss']
})
export class AppNinjasComponent {
  ninjas: Ninja[];
  sensei: Ninja;

  constructor() {
    this.ninjas = shuffle(ninjas);
    this.sensei = sensei;
    sensei.imgSrc = sensei.name.split(' ').join('_')+".png";

    for(let ninja of this.ninjas){
      console.log(ninja.name);
      ninja.imgSrc = ninja.name.split(' ').join('_')+".png";
    }

  }
}
