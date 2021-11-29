import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/configurationData';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = '';
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }
  GetRecordList(): Observable<JuradoModel[]> {
    return this.http.get<JuradoModel[]>(`${this.url}/jurados`);
  }
  SearchRecord(id: NumberConstructor): Observable<JuradoModel> {
    return this.http.get<JuradoModel>(`${this.url}/jurados/${id}`);
  }

  SaveRecord(data: JuradoModel): Observable<JuradoModel> {
    return this.http.post<JuradoModel>(
      `${this.url}/jurados`,
      {
        nombreCompleto: data.nombreCompleto,
        celular: data.celular,
        correo: data.correo,
        entidad: data.entidad,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  EditRecord(data: JuradoModel): Observable<JuradoModel> {
    return this.http.put<JuradoModel>(
      `${this.url}/jurados/${data.id}`,
      {
        nombreCompleto: data.nombreCompleto,
        celular: data.celular,
        correo: data.correo,
        entidad: data.entidad,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`,
        }),
      }
    );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/jurados/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
