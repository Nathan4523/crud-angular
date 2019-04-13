import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api-base';
import {Observable} from "rxjs/Observable";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

//listar tudo
  buscar() {
    return this.http.get(`${API}posts`)
  }

  //buscando por um id
  find(id: number): Observable<any>{
    return this.http.get(`${API}posts/${id}`,)
  }

  //salvar dados
  save(data: any): Observable<any> {
    return !data.id
        ? this.http.post(`${API}posts`, data)
        : this.http.put(`${API}/${data.id}`, data)
  }

  destroy(id: number): Observable<any> {
    return this.http.delete(`${API}posts/${id}`)
  }
  
}
