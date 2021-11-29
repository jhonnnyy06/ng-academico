import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-eliminar-jurado',
  templateUrl: './eliminar-jurado.component.html',
  styleUrls: ['./eliminar-jurado.component.css']
})
export class EliminarJuradoComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  celular: string = '';
  correo: string = '';
  entidad: string = '';
  constructor(
    private router: Router,
    private service: JuradoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradoModel) => {
        if (data.id && data.nombreCompleto && data.celular && data.correo && data.entidad) {
          this.id = data.id;
          this.nombre = data.nombreCompleto;
          this.celular = data.celular;
          this.correo = data.correo;
          this.entidad = data.entidad;
        }
      },
    });
  }
  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(['/parametros/listar-jurado']);
      },
    });
  }

}
