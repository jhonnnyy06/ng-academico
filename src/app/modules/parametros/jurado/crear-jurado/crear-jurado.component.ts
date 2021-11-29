import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-crear-jurado',
  templateUrl: './crear-jurado.component.html',
  styleUrls: ['./crear-jurado.component.css']
})
export class CrearJuradoComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService
  ) {}

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      nombre: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      entidad: ['', [Validators.required]],
    });
  }
  get GetDF() {
    return this.dataForm.controls;
  }
  SaveRecord() {
    let model = new JuradoModel();
    model.nombreCompleto = this.GetDF['nombre'].value;
    model.celular = this.GetDF['celular'].value;
    model.correo = this.GetDF['correo'].value;
    model.entidad = this.GetDF['entidad'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: JuradoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-jurado']);
      },
    });
  }

}
