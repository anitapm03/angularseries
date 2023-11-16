import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Personaje } from '../models/Personaje';

@Injectable()
export class ServicePersonajes {

    constructor(private _http: HttpClient){}

    getPersonajes(): Observable<any>{

        var request = "api/personajes";
        var url = environment.urlApi + request;

        return this._http.get(url);
    }

    crearPersonaje(personaje:Personaje): Observable<any>{

        var json = JSON.stringify(personaje);
        var header = new HttpHeaders().set("content-type", "application/json");
        var request = "api/personajes";
        var url = environment.urlApi + request;

        return this._http.post(url, json, {headers: header});
    }

    editarPersonaje(idPersonaje:string, idSerie:string): Observable<any>{

        var header = new HttpHeaders().set("content-type", "application/json");

        var request = "api/personajes/" + idPersonaje + "/" + idSerie;
        var url = environment.urlApi + request;

        return this._http.put(url, {headers: header});
    }
}