import { Component, OnInit } from '@angular/core';
import {SecteurService} from '../../controler/service/Secteur.service';
import {Secteur} from '../../controler/model/Secteur.model';

@Component({
  selector: 'app-secteur-list',
  templateUrl: './secteur-list.component.html',
  styleUrls: ['./secteur-list.component.css']
})
export class SecteurListComponent implements OnInit {
  constructor(private secteurService : SecteurService) { }

  get secteurs(): Array<Secteur> {
    return this.secteurService.secteurs;
  }
  ngOnInit(): void {
    this.secteurService.findAll();
  }

  delete(i: number) {
    this.secteurs.splice(i, 1);
  }

  update(i: number, ts: Secteur) {
    this.secteurService.update(i, ts);

  }


}
