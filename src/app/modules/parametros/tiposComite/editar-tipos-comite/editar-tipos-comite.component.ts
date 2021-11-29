import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { TiposComiteModel } from 'src/app/models/parametros/tiposComite.model';
import { TiposComiteService } from 'src/app/services/parametros/tipos-comite.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-editar-tipos-comite',
  templateUrl: './editar-tipos-comite.component.html',
  styleUrls: ['./editar-tipos-comite.component.css'],
})
export class EditarTiposComiteComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TiposComiteService,
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
      next: (data: TiposComiteModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['nombre'].setValue(data.nombre);
      },
    });
  }
  SaveRecord() {
    let model = new TiposComiteModel();
    model.nombre = this.GetDF['nombre'].value;
    model.id = this.GetDF['id'].value;
    console.log(model.nombre);
    this.service.EditRecord(model).subscribe({
      next: (data: TiposComiteModel) => {
        console.log('Guardando', data);
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-tiposComite']);
      },
    });
  }
  get GetDF() {
    return this.dataForm.controls;
  }
}
