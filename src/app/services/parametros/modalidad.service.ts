import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/configurationData';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ModalidadService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = '';
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ModalidadModel[]> {
    return this.http.get<ModalidadModel[]>(`${this.url}/modalidades`);
  }
  SearchRecord(id: NumberConstructor): Observable<ModalidadModel> {
    return this.http.get<ModalidadModel>(`${this.url}/modalidades/${id}`);
  }

  SaveRecord(data: ModalidadModel): Observable<ModalidadModel> {
    console.log('data crear modalidad', data);
    return this.http.post<ModalidadModel>(
      `${this.url}/modalidades`,
      {
        nombre: data.nombre,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  EditRecord(data: ModalidadModel): Observable<ModalidadModel> {
    return this.http.put<ModalidadModel>(
      `${this.url}/modalidades/${data.id}`,
      {
        nombre: data.nombre,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/modalidades/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
