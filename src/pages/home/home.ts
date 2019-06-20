import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoardPage } from '../board/board';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  firstPage() {
    this.navCtrl.push(BoardPage);
  }

}
