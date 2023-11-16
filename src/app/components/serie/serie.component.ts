import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Serie } from 'src/app/models/Serie';
import { ServiceSeries } from 'src/app/services/service.series';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit{
  public serie!: Serie;
  public id!: string;

  constructor(private _activeRoute: ActivatedRoute,
    private _serviceSeries: ServiceSeries){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.id = parametros["id"];

      this._serviceSeries.getSerieId(this.id).subscribe(response => {
        
        this.serie = response;

      })
    })
  }

}
