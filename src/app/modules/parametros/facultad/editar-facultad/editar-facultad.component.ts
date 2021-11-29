import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-editar-facultad',
  templateUrl: './editar-facultad.component.html',
  styleUrls: ['./editar-facultad.component.css'],
})
export class EditarFacultadComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FacultadService,
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
      codigo: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }
  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: FacultadModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['nombre'].setValue(data.nombre);
        this.GetDF['codigo'].setValue(data.codigoFacultad);
      },
    });
  }
  SaveRecord() {
    let model = new FacultadModel();
    model.nombre = this.GetDF['nombre'].value;
    model.id = this.GetDF['id'].value;
    model.codigoFacultad = this.GetDF['codigo'].value;
    console.log(model.nombre);
    this.service.EditRecord(model).subscribe({
      next: (data: FacultadModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-facultad']);
      },
    });
  }
}
