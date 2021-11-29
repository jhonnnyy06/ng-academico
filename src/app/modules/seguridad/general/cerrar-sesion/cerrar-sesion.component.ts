import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionDataModel } from 'src/app/models/seguridad/session-data.model';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { SeguridadService } from 'src/app/services/shared/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css'],
})
export class CerrarSesionComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private securityService: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.localStorageService.RemoveSessionData();
    this.securityService.RefreshSessionInfo(new SessionDataModel());
    this.router.navigate(['/home']);
  }
}
