import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-eliminar-facultad',
  templateUrl: './eliminar-facultad.component.html',
  styleUrls: ['./eliminar-facultad.component.css'],
})
export class EliminarFacultadComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  codigo: string = '';
  constructor(
    private router: Router,
    private service: FacultadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: FacultadModel) => {
        if (data.id && data.nombre && data.codigoFacultad) {
          this.id = data.id;
          this.nombre = data.nombre;
          this.codigo = data.codigoFacultad;
        }
      },
    });
  }
  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(['/parametros/listar-facultad']);
      },
    });
  }
}
