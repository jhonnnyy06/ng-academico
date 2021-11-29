import { Component, OnInit } from '@angular/core';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';

@Component({
  selector: 'app-listar-modalidad',
  templateUrl: './listar-modalidad.component.html',
  styleUrls: ['./listar-modalidad.component.css'],
})
export class ListarModalidadComponent implements OnInit {
  recordList: ModalidadModel[] = [];
  constructor(private service: ModalidadService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }
  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: ModalidadModel[]) => {
        this.recordList = data;
      },
    });
  }
}
