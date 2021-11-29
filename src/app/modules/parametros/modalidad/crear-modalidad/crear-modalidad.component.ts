import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-crear-modalidad',
  templateUrl: './crear-modalidad.component.html',
  styleUrls: ['./crear-modalidad.component.css'],
})
export class CrearModalidadComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ModalidadService
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
    let model = new ModalidadModel();
    model.nombre = this.GetDF['nombre'].value;
    console.log(model.nombre);
    this.service.SaveRecord(model).subscribe({
      next: (data: ModalidadModel) => {
        console.log('Guardando', data);
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-modalidad']);
      },
    });
  }
}
