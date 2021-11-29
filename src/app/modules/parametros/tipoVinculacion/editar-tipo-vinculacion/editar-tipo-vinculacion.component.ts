import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipoVinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-editar-tipo-vinculacion',
  templateUrl: './editar-tipo-vinculacion.component.html',
  styleUrls: ['./editar-tipo-vinculacion.component.css'],
})
export class EditarTipoVinculacionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoVinculacionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }
  FormBuilding() {
    this.dataForm = this.fb.group({
      // campos formcontrolname
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
    });
  }
  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoVinculacionModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['nombre'].setValue(data.nombre);
      },
    });
  }
  SaveRecord() {
    let model = new TipoVinculacionModel();
    model.nombre = this.GetDF['nombre'].value;
    model.id = this.GetDF['id'].value;
    console.log(model.nombre);
    this.service.EditRecord(model).subscribe({
      next: (data: TipoVinculacionModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-tipoVinculacion']);
      },
    });
  }
  get GetDF() {
    return this.dataForm.controls;
  }
}
