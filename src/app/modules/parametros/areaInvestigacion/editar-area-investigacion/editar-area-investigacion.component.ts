import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/configurationData';
import { AreaInvestigacionModel } from 'src/app/models/parametros/areaInvestigacion.model';
import { AreaInvestigacionService } from 'src/app/services/parametros/area-investigacion.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-editar-area-investigacion',
  templateUrl: './editar-area-investigacion.component.html',
  styleUrls: ['./editar-area-investigacion.component.css'],
})
export class EditarAreaInvestigacionComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AreaInvestigacionService,
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
      next: (data: AreaInvestigacionModel) => {
        this.GetDF['id'].setValue(data.id);
        this.GetDF['nombre'].setValue(data.nombre);
      },
    });
  }
  SaveRecord() {
    let model = new AreaInvestigacionModel();
    model.nombre = this.GetDF['nombre'].value;
    model.id = this.GetDF['id'].value;
    this.service.EditRecord(model).subscribe({
      next: (data: AreaInvestigacionModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(['/parametros/listar-areaInvestigacion']);
      },
    });
  }
}
