import { Component, OnInit } from '@angular/core';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

@Component({
  selector: 'app-listar-jurado',
  templateUrl: './listar-jurado.component.html',
  styleUrls: ['./listar-jurado.component.css']
})
export class ListarJuradoComponent implements OnInit {

  recordList: JuradoModel[] = [];
  constructor(private service: JuradoService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }
  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: JuradoModel[]) => {
        this.recordList = data;
      },
    });
  }

}
