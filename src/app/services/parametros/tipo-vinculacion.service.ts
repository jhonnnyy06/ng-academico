import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/configurationData';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipoVinculacion.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TipoVinculacionService {
  url: String = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = '';

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient
  ) {
    this.localStorage.GetToken();
  }
  GetRecordList(): Observable<TipoVinculacionModel[]> {
    return this.http.get<TipoVinculacionModel[]>(
      `${this.url}/tipo-vinculaciones`
    );
  }

  SaveRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel> {
    return this.http.post<TipoVinculacionModel>(
      `${this.url}/tipo-vinculaciones`,
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

  SearchRecord(id: NumberConstructor): Observable<TipoVinculacionModel> {
    return this.http.get<TipoVinculacionModel>(
      `${this.url}/tipo-vinculaciones/${id}`
    );
  }

  EditRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel> {
    return this.http.put<TipoVinculacionModel>(
      `${this.url}/tipo-vinculaciones/${data.id}`,
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
    return this.http.delete<any>(`${this.url}/tipo-vinculaciones/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
