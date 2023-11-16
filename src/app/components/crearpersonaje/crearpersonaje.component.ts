import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/Personaje';
import { Serie } from 'src/app/models/Serie';
import { Router } from '@angular/router';
import { ServicePersonajes } from 'src/app/services/service.personajes';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-crearpersonaje',
  templateUrl: './crearpersonaje.component.html',
  styleUrls: ['./crearpersonaje.component.css']
})

export class CrearpersonajeComponent implements OnInit{
  public series!: Array<Serie>;
  public personaje!: Personaje;

  @ViewChild("cajaid") cajaIdRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;
  @ViewChild("selectserie") selectSerieRef!: ElementRef;

  constructor(private _router: Router,
    private _serviceSeries: ServiceSeries,
    private _servicePersonajes: ServicePersonajes){}

  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe(response => {
      this.series = response;
      //console.log(this.series);
    })
  }

  crearPersonaje(): void {
    var idPersonaje = parseInt(this.cajaIdRef.nativeElement.value);
    var nombre = this.cajaNombreRef.nativeElement.value; 
    var imagen = this.cajaImagenRef.nativeElement.value;
    var idSerie = parseInt(this.selectSerieRef.nativeElement.value);

    this.personaje = new Personaje(idPersonaje, nombre, imagen, idSerie);
    console.log(this.personaje)

    this._servicePersonajes.crearPersonaje(this.personaje).subscribe(response => {
      this._router.navigate(["/personajes/"+idSerie]);
    })
  }

}
