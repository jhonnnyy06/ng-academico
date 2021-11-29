import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadedFile } from 'src/app/models/parametros/uploaded.file.model';
import { ConfigurationData } from 'src/app/config/configurationData';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";
  filter: string = `?filter={"include":[{"relation": "tipoVinculacion"}]}`;
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ProponenteModel[]> {
    return this.http.get<ProponenteModel[]>(`${this.url}/proponentes${this.filter}`);
  }

  SearchRecord(id: number): Observable<ProponenteModel> {
    return this.http.get<ProponenteModel>(`${this.url}/proponentes/${id}`);
  }

  SaveRecord(data: ProponenteModel): Observable<ProponenteModel> {
    return this.http.post<ProponenteModel>(`${this.url}/proponentes`,
      {
        documento: data.documento,
        primerNombre: data.primerNombre,
        otrosNombres: data.otrosNombres,
        primerApellido: data.primerApellido,
        segundoApellido: data.segundoApellido,
        correo: data.correo,
        celular: data.celular,
        foto: data.foto,
        id_tipo_vinculacion: data.id_tipo_vinculacion,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  EditRecord(data: ProponenteModel): Observable<ProponenteModel> {
    return this.http.put<ProponenteModel>(`${this.url}/proponentes/${data.id}`,
      {
        documento: data.documento,
        primerNombre: data.primerNombre,
        otrosNombres: data.otrosNombres,
        primerApellido: data.primerApellido,
        segundoApellido: data.segundoApellido,
        correo: data.correo,
        celular: data.celular,
        foto: data.foto,
        id_tipo_vinculacion: data.id_tipo_vinculacion,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }


  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/proponentes/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  UploadMainPhoto(form: FormData): Observable<UploadedFile> {
    return this.http.post<UploadedFile>(
      `${this.url}/CargarImagenPrincipalVehiculo`,
      form,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }
}
