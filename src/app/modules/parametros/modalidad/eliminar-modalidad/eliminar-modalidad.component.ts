import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-eliminar-modalidad',
  templateUrl: './eliminar-modalidad.component.html',
  styleUrls: ['./eliminar-modalidad.component.css'],
})
export class EliminarModalidadComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  constructor(
    private router: Router,
    private service: ModalidadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: ModalidadModel) => {
        if (data.id && data.nombre) {
          console.log('Encontrado');
          this.id = data.id;
          this.nombre = data.nombre;
        }
      },
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(['/parametros/listar-modalidad']);
      },
    });
  }
}
