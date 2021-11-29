import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { TiposComiteModel } from 'src/app/models/parametros/tiposComite.model';
import { TiposComiteService } from 'src/app/services/parametros/tipos-comite.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-crear-tipos-comite',
  templateUrl: './crear-tipos-comite.component.html',
  styleUrls: ['./crear-tipos-comite.component.css'],
})
export class CrearTiposComiteComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TiposComiteService
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
    let model = new TiposComiteModel();
    model.nombre = this.GetDF['nombre'].value;
    console.log(model.nombre);
    this.service.SaveRecord(model).subscribe({
      next: (data: TiposComiteModel) => {
        console.log('Guardando', data);
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-tiposComite']);
      },
    });
  }
}
