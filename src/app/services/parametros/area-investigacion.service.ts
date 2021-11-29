import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationData } from 'src/app/config/configurationData';
import { AreaInvestigacionModel } from 'src/app/models/parametros/areaInvestigacion.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AreaInvestigacionService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = '';
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.tk = this.localStorageService.GetToken();
  }
  GetRecordList(): Observable<AreaInvestigacionModel[]> {
    return this.http.get<AreaInvestigacionModel[]>(
      `${this.url}/area-investigaciones`
    );
  }
  SearchRecord(id: NumberConstructor): Observable<AreaInvestigacionModel> {
    return this.http.get<AreaInvestigacionModel>(
      `${this.url}/area-investigaciones/${id}`
    );
  }

  SaveRecord(data: AreaInvestigacionModel): Observable<AreaInvestigacionModel> {
    return this.http.post<AreaInvestigacionModel>(
      `${this.url}/area-investigaciones`,
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

  EditRecord(data: AreaInvestigacionModel): Observable<AreaInvestigacionModel> {
    return this.http.put<AreaInvestigacionModel>(
      `${this.url}/area-investigaciones/${data.id}`,
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
    return this.http.delete<any>(`${this.url}/area-investigaciones/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`,
      }),
    });
  }
}
