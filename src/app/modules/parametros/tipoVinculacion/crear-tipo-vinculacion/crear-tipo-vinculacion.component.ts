import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipoVinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-crear-tipo-vinculacion',
  templateUrl: './crear-tipo-vinculacion.component.html',
  styleUrls: ['./crear-tipo-vinculacion.component.css'],
})
export class CrearTipoVinculacionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoVinculacionService
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
    let tipoVinculacion = new TipoVinculacionModel();
    tipoVinculacion.nombre = this.GetDF['nombre'].value;
    this.service.SaveRecord(tipoVinculacion).subscribe({
      next: (data: TipoVinculacionModel) => {
        console.log('Guardando', data);
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-tipoVinculacion']);
      },
    });
  }
}
