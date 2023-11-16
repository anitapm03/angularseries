import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Personaje } from 'src/app/models/Personaje';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit{
  public personajes!: Array<Personaje>;
  public id!: string;

  constructor(private _activeRoute: ActivatedRoute,
    private _serviceSeries: ServiceSeries){}

  ngOnInit(): void {

    this._activeRoute.params.subscribe((parametros: Params) => {
      this.id = parametros["id"];

      this._serviceSeries.getPersonajesSerie(this.id).subscribe(response => {
        
        this.personajes = response;

      })
    })
    
  }
}
