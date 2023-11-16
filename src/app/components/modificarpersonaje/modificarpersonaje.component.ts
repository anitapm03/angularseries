import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/Personaje';
import { Serie } from 'src/app/models/Serie';
import { Router } from '@angular/router';
import { ServicePersonajes } from 'src/app/services/service.personajes';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit{
  public series!: Array<Serie>;
  public personajes!: Array<Personaje>;

  @ViewChild("selectserie") selectSerieRef!: ElementRef;
  @ViewChild("selectpersonaje") selectPersonajeRef!: ElementRef;

  constructor(private _router: Router,
    private _serviceSeries: ServiceSeries,
    private _servicePersonajes: ServicePersonajes){}

  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe(response => {
      this.series = response;
      //console.log(this.series);
    })
    this._servicePersonajes.getPersonajes().subscribe(response => {
      this.personajes = response;
    })
  }

  modificarPersonaje(): void{

    var idPersonaje = this.selectPersonajeRef.nativeElement.value;
    var idSerie = this.selectSerieRef.nativeElement.value;

    this._servicePersonajes.editarPersonaje(idPersonaje, idSerie).subscribe(response =>{
      console.log(response);
    })
  }

}
