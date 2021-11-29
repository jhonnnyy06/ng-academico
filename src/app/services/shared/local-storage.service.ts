import { Injectable } from '@angular/core';
import { SessionDataModel } from 'src/app/models/seguridad/session-data.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  SaveSessionData(data: SessionDataModel): boolean {
    let currentData = localStorage.getItem('session-info');
    if (currentData) {
      return false;
    } else {
      let sessionDataString = JSON.stringify(data);
      console.log('Session Guardada localStorage', sessionDataString);
      localStorage.setItem('session-info', sessionDataString);
      return true;
    }
  }

  RemoveSessionData(): boolean {
    let currentData = localStorage.getItem('session-info');
    if (currentData) {
      console.log('Session Removida local elimanado');
      localStorage.removeItem('session-info');
      return true;
    } else {
      return false;
    }
  }

  GetToken(): string {
    let currentData = localStorage.getItem('session-info');
    console.log('currendata token', currentData);
    if (currentData) {
      let sessionDataJson = JSON.parse(currentData);
      console.log(`$Token String :${sessionDataJson.token}`);
      return sessionDataJson.token;
    } else {
      return '';
    }
  }
  GetSessionInfo(): SessionDataModel {
    let currentData = localStorage.getItem('session-info');
    if (currentData) {
      let sessionDataJson = JSON.parse(currentData);
      console.log(`Informacion Session ${sessionDataJson}`);
      return sessionDataJson;
    } else {
      console.log('1');
      return new SessionDataModel();
      // vacio nuevamente
    }
  }
}
