import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-crear-facultad',
  templateUrl: './crear-facultad.component.html',
  styleUrls: ['./crear-facultad.component.css'],
})
export class CrearFacultadComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FacultadService
  ) {}

  ngOnInit(): void {
    this.FormBuilding();
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      nombre: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
    });
  }
  get GetDF() {
    return this.dataForm.controls;
  }
  SaveRecord() {
    let model = new FacultadModel();
    model.nombre = this.GetDF['nombre'].value;
    model.codigoFacultad = this.GetDF['codigo'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: FacultadModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-facultad']);
      },
    });
  }
}
