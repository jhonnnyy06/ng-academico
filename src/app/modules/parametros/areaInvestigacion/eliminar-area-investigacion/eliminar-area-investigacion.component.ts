import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { AreaInvestigacionModel } from 'src/app/models/parametros/areaInvestigacion.model';
import { AreaInvestigacionService } from 'src/app/services/parametros/area-investigacion.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-eliminar-area-investigacion',
  templateUrl: './eliminar-area-investigacion.component.html',
  styleUrls: ['./eliminar-area-investigacion.component.css'],
})
export class EliminarAreaInvestigacionComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  constructor(
    private router: Router,
    private service: AreaInvestigacionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.SearchRecord();
  }
  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: AreaInvestigacionModel) => {
        if (data.id && data.nombre) {
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
        this.router.navigate(['/parametros/listar-areaInvestigacion']);
      },
    });
  }
}
