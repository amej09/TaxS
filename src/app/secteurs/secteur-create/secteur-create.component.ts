import { Component, OnInit } from '@angular/core';
import {Secteur} from '../../controler/model/Secteur.model';
import {SecteurService} from '../../controler/service/Secteur.service';

@Component({
  selector: 'app-secteur-create',
  templateUrl: './secteur-create.component.html',
  styleUrls: ['./secteur-create.component.css']
})
export class SecteurCreateComponent implements OnInit {
  constructor(private secteurService: SecteurService) { }

  public save(){
    return this.secteurService.save();
  }
  get secteur(): Secteur {
    return this.secteurService.secteur;
  }
  ngOnInit(): void {
  }

}
