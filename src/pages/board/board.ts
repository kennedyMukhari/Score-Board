import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThrowStmt } from '@angular/compiler';

/**
 * Generated class for the BoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-board',
  templateUrl: 'board.html',
})
export class BoardPage {

  score:any;
  score1:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = 0;
    this.score1 = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardPage');
  }
  incrementScore() {
    this.score = this.score+1;
  }
  incrementScore1() {
    this.score1 = this.score1+1;
  }
  reset() {
    this.score = 0;
    this.score1 = 0;
  }

}
