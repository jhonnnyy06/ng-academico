import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionDataModel } from 'src/app/models/seguridad/session-data.model';
import { ConfigurationData } from '../../config/configurationData';
import { UserCredentialsModel } from '../../models/seguridad/user-credentials.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  sessionInfoSubject: BehaviorSubject<SessionDataModel> =
    new BehaviorSubject<SessionDataModel>(new SessionDataModel());
  url: string = ConfigurationData.SECURITY_MS_URL;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.VerifyActiveSession();
  }

  VerifyActiveSession(): boolean {
    let info = this.localStorageService.GetSessionInfo();
    if (info.tk) {
      console.log(`$Verificar sesion tk ${info.tk}`);
      info.isLoggedIn = true;
      this.RefreshSessionInfo(info);
      console.log('verificar session activa: ', true);
      return true;
    } else {
      return false;
    }
  }
  RefreshSessionInfo(data: SessionDataModel) {
    this.sessionInfoSubject.next(data);
  }

  GetSessionInfo() {
    return this.sessionInfoSubject.asObservable();
  }
  Login(data: UserCredentialsModel): Observable<SessionDataModel> {
    console.log('servicio seguridad crear usuario data', data);
    return this.http.post<SessionDataModel>(`${this.url}/identificar-usuario`, {
      usuario: data.username,
      clave: data.password,
    });
  }
}
