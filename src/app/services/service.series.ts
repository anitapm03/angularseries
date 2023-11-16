import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceSeries {
    constructor(private _http: HttpClient){}

    getSeries(): Observable<any> {

        var request = "api/series";
        var url = environment.urlApi + request;

        return this._http.get(url);
    }

    getSerieId(id:string): Observable<any>{
        
        var request = "api/series/"+id;
        var url = environment.urlApi + request;

        return this._http.get(url);
    }

    getPersonajesSerie(id:string): Observable<any>{

        var request = "api/series/personajesserie/"+id;
        var url = environment.urlApi + request;

        return this._http.get(url);
        
    }
}