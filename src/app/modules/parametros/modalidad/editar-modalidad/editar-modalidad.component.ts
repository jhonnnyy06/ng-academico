import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-editar-modalidad',
  templateUrl: './editar-modalidad.component.html',
  styleUrls: ['./editar-modalidad.component.css'],
})
export class EditarModalidadComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ModalidadService,
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

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: ModalidadModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['nombre'].setValue(data.nombre);
      },
    });
  }
  SaveRecord() {
    let model = new ModalidadModel();
    model.nombre = this.GetDF['nombre'].value;
    model.id = this.GetDF['id'].value;
    console.log(model.nombre);
    this.service.EditRecord(model).subscribe({
      next: (data: ModalidadModel) => {
        console.log('Guardando', data);
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-modalidad']);
      },
    });
  }
}
