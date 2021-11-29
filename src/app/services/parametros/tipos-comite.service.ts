import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationData } from 'src/app/config/configurationData';
import { TiposComiteModel } from 'src/app/models/parametros/tiposComite.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiposComiteService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = '';
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }
  GetRecordList(): Observable<TiposComiteModel[]> {
    return this.http.get<TiposComiteModel[]>(`${this.url}/tipos-comites`);
  }
  SearchRecord(id: NumberConstructor): Observable<TiposComiteModel> {
    return this.http.get<TiposComiteModel>(`${this.url}/tipos-comites/${id}`);
  }

  SaveRecord(data: TiposComiteModel): Observable<TiposComiteModel> {
    return this.http.post<TiposComiteModel>(
      `${this.url}/tipos-comites`,
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

  EditRecord(data: TiposComiteModel): Observable<TiposComiteModel> {
    return this.http.put<TiposComiteModel>(
      `${this.url}/tipos-comites/${data.id}`,
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
    return this.http.delete<any>(`${this.url}/tipos-comites/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
