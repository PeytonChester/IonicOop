import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";

@Injectable()
export class DataProvider {

  myData = {
      Movies: [
          {
              Genre: 'Action',
              Items: [
                  {Title: 'Die Hard'},
                  {Title: 'The Dark knight'},
                  {Title: 'Aliens'},
                  {Title: 'The Matrix'},
                  {Title: 'Predator'}
              ]
          },
          {
              Genre: 'Adventure',
              Items: [
                  {Title: 'Raiders of the Lost Ark'},
                  {Title: 'The Goonies'},
                  {Title: 'Jaws'},
                  {Title: 'Jurassic Park'},
                  {Title: 'Pirates of the Caribbean: The Curse of the Black Pearl'}
              ]
          },
          {
              Genre: 'Comedy',
              Items: [
                  {Title: 'Talledega Nights'},
                  {Title: 'Superbad'},
                  {Title: 'The Hangover'},
                  {Title: 'Borat'},
                  {Title: 'Step Brothers'}
              ]
          },
          {
              Genre: 'Drama',
              Items: [
                  {Title: 'Shawshank Redemption'},
                  {Title: 'Schindlers List'},
                  {Title: 'Forrest Gump'},
                  {Title: 'Titanic'},
                  {Title: 'Pulp Fiction'}
              ]
          }
      ]
  };

  constructor(public storage:Storage) {

  }

  getData(): any {
      return this.myData.Movies;
  };
}
