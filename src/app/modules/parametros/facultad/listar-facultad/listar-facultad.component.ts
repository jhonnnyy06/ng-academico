import { Component, OnInit } from '@angular/core';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

@Component({
  selector: 'app-listar-facultad',
  templateUrl: './listar-facultad.component.html',
  styleUrls: ['./listar-facultad.component.css'],
})
export class ListarFacultadComponent implements OnInit {
  recordList: FacultadModel[] = [];
  constructor(private service: FacultadService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }
  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: FacultadModel[]) => {
        this.recordList = data;
      },
    });
  }
}
