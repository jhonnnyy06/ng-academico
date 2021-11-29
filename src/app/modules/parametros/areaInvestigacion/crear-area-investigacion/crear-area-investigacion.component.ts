import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { AreaInvestigacionModel } from 'src/app/models/parametros/areaInvestigacion.model';
import { AreaInvestigacionService } from 'src/app/services/parametros/area-investigacion.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-crear-area-investigacion',
  templateUrl: './crear-area-investigacion.component.html',
  styleUrls: ['./crear-area-investigacion.component.css'],
})
export class CrearAreaInvestigacionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AreaInvestigacionService
  ) {}

  ngOnInit(): void {
    this.FormBuilding();
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      nombre: ['', [Validators.required]],
    });
  }
  get GetDF() {
    return this.dataForm.controls;
  }
  SaveRecord() {
    let model = new AreaInvestigacionModel();
    model.nombre = this.GetDF['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: AreaInvestigacionModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-areaInvestigacion']);
      },
    });
  }
}
