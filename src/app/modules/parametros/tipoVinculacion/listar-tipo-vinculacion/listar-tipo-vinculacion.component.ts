import { Component, OnInit } from '@angular/core';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipoVinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';
@Component({
  selector: 'app-listar-tipo-vinculacion',
  templateUrl: './listar-tipo-vinculacion.component.html',
  styleUrls: ['./listar-tipo-vinculacion.component.css'],
})
export class ListarTipoVinculacionComponent implements OnInit {
  recordList: TipoVinculacionModel[] = [];
  constructor(private service: TipoVinculacionService) {}

  ngOnInit(): void {
    this.ShowRecorList();
  }
  ShowRecorList() {
    this.service.GetRecordList().subscribe({
      next: (data: TipoVinculacionModel[]) => {
        this.recordList = data;
      },
    });
  }
}
