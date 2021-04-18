import { Component, OnInit } from '@angular/core';
import {SecteurService} from '../controler/service/Secteur.service';
import {Secteur} from '../controler/model/Secteur.model';

@Component({
  selector: 'app-secteurs',
  templateUrl: './secteurs.component.html',
  styleUrls: ['./secteurs.component.css']
})
export class SecteursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
