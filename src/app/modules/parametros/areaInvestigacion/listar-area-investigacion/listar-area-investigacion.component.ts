import { Component, OnInit } from '@angular/core';
import { AreaInvestigacionModel } from 'src/app/models/parametros/areaInvestigacion.model';
import { AreaInvestigacionService } from 'src/app/services/parametros/area-investigacion.service';

@Component({
  selector: 'app-listar-area-investigacion',
  templateUrl: './listar-area-investigacion.component.html',
  styleUrls: ['./listar-area-investigacion.component.css'],
})
export class ListarAreaInvestigacionComponent implements OnInit {
  recordList: AreaInvestigacionModel[] = [];
  constructor(private service: AreaInvestigacionService) {}

  ngOnInit(): void {
    this.ShowRecordList();
  }
  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: AreaInvestigacionModel[]) => {
        this.recordList = data;
      },
    });
  }
}
