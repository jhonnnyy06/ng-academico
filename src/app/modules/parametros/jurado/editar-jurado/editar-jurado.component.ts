import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-editar-jurado',
  templateUrl: './editar-jurado.component.html',
  styleUrls: ['./editar-jurado.component.css']
})
export class EditarJuradoComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService,
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
      celular: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      entidad: ['', [Validators.required]],
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }
  SearchRecord() {
    let id = this.route.snapshot.params['id'];
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradoModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['nombre'].setValue(data.nombreCompleto);
        this.GetDF['celular'].setValue(data.celular);
        this.GetDF['correo'].setValue(data.correo);
        this.GetDF['entidad'].setValue(data.entidad);
      },
    });
  }
  SaveRecord() {
    let model = new JuradoModel();
    model.nombreCompleto = this.GetDF['nombre'].value;
    model.celular = this.GetDF['celular'].value;
    model.correo = this.GetDF['correo'].value;
    model.entidad = this.GetDF['entidad'].value;
    console.log(model.nombreCompleto);
    this.service.EditRecord(model).subscribe({
      next: (data: JuradoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-jurado']);
      },
    });
  }

}
