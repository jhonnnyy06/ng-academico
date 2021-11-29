import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipoVinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-eliminar-tipo-vinculacion',
  templateUrl: './eliminar-tipo-vinculacion.component.html',
  styleUrls: ['./eliminar-tipo-vinculacion.component.css'],
})
export class EliminarTipoVinculacionComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  constructor(
    private service: TipoVinculacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }
  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoVinculacionModel) => {
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
        this.router.navigate(['/parametros/listar-tipoVinculacion']);
      },
    });
  }
}
