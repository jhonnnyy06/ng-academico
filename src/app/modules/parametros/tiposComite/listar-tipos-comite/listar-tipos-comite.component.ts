import { Component, OnInit } from '@angular/core';
import { TiposComiteModel } from 'src/app/models/parametros/tiposComite.model';
import { TiposComiteService } from 'src/app/services/parametros/tipos-comite.service';

@Component({
  selector: 'app-listar-tipos-comite',
  templateUrl: './listar-tipos-comite.component.html',
  styleUrls: ['./listar-tipos-comite.component.css'],
})
export class ListarTiposComiteComponent implements OnInit {
  recordList: TiposComiteModel[] = [];
  constructor(private service: TiposComiteService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }
  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: TiposComiteModel[]) => {
        this.recordList = data;
      },
    });
  }
}
