import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { TiposComiteModel } from 'src/app/models/parametros/tiposComite.model';
import { TiposComiteService } from 'src/app/services/parametros/tipos-comite.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-eliminar-tipos-comite',
  templateUrl: './eliminar-tipos-comite.component.html',
  styleUrls: ['./eliminar-tipos-comite.component.css'],
})
export class EliminarTiposComiteComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  constructor(
    private router: Router,
    private service: TiposComiteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }
  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: TiposComiteModel) => {
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
        this.router.navigate(['/parametros/listar-tiposComite']);
      },
    });
  }
}
