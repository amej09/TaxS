import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Secteur} from '../model/Secteur.model';
import {url} from 'inspector';
import Any = jasmine.Any;
@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  // tslint:disable-next-line:variable-name
  private _secteur: Secteur =  new Secteur() ;
  private _secteurs = new Array<Secteur>();

  constructor(private http: HttpClient) {
  }
  get secteur(): Secteur {
    if (this._secteur == null) {
      this._secteur = new Secteur();
    }
    return this._secteur;
  }

  set secteur(value: Secteur) {
    this._secteur = value;
  }
  get secteurs(): Array<Secteur> {
    if (this._secteurs == null) {
      this._secteurs = new Array<Secteur>();
    }
    return this._secteurs;
  }

  set secteurs(value: Array<Secteur>) {
    this._secteurs = value;
  }


  public save() {
    const secteurClone = this.clone(this.secteur);
    this.http.post('http://localhost:8095/tax-api/secteur/', secteurClone).subscribe(
      data => {
        if (data > 0) {
          this.secteurs.push(secteurClone);
        } else {
          alert('label exist deja');
        }
      }, error => {
        alert('haa error == ' + error.message);
      }
    );
    // @ts-ignore
    this.secteur = null;

  }
  private clone(secteur: Secteur) {
    const CloneSecteur = new Secteur();
    CloneSecteur.id = secteur.id;
    CloneSecteur.label = secteur.label;
    return CloneSecteur;
  }
  update(i: number, ts: Secteur) {
    this.secteur = ts;
  }
  findAll(){
    this.http.get<Array<Secteur>>('http://localhost:8095/tax-api/secteur/').subscribe(
      data => {
        this.secteurs = data;
      }
    );
  }



}
