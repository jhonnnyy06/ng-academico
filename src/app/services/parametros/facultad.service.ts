import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/configurationData';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { LocalStorageService } from '../shared/local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class FacultadService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = '';
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }
  GetRecordList(): Observable<FacultadModel[]> {
    return this.http.get<FacultadModel[]>(`${this.url}/facultades`);
  }
  SearchRecord(id: NumberConstructor): Observable<FacultadModel> {
    return this.http.get<FacultadModel>(`${this.url}/facultades/${id}`);
  }

  SaveRecord(data: FacultadModel): Observable<FacultadModel> {
    return this.http.post<FacultadModel>(
      `${this.url}/facultades`,
      {
        nombre: data.nombre,
        codigoFacultad: data.codigoFacultad,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  EditRecord(data: FacultadModel): Observable<FacultadModel> {
    return this.http.put<FacultadModel>(
      `${this.url}/facultades/${data.id}`,
      {
        nombre: data.nombre,
        codigoFacultad: data.codigoFacultad,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/facultades/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
