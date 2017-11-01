import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Movies: any;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
    this.Movies = dataService.getData();
    console.log(this.Movies);
  }
}
