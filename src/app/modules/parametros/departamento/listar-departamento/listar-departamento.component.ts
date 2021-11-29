import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/configurationData';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { DepartamentoService } from 'src/app/services/parametros/departamento.service';


@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {

  recordList: DepartamentoModel[] = [];
  constructor(private service: DepartamentoService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }
  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: DepartamentoModel[]) => {
        this.recordList = data;
      },
    });
  }

}
