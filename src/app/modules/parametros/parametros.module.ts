import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearTipoVinculacionComponent } from './tipoVinculacion/crear-tipo-vinculacion/crear-tipo-vinculacion.component';
import { EditarTipoVinculacionComponent } from './tipoVinculacion/editar-tipo-vinculacion/editar-tipo-vinculacion.component';
import { EliminarTipoVinculacionComponent } from './tipoVinculacion/eliminar-tipo-vinculacion/eliminar-tipo-vinculacion.component';
import { ListarTipoVinculacionComponent } from './tipoVinculacion/listar-tipo-vinculacion/listar-tipo-vinculacion.component';
import { CrearFacultadComponent } from './facultad/crear-facultad/crear-facultad.component';
import { EditarFacultadComponent } from './facultad/editar-facultad/editar-facultad.component';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';
import { EliminarFacultadComponent } from './facultad/eliminar-facultad/eliminar-facultad.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { CrearTipoSolicitudComponent } from './tipoSolicitud/crear-tipo-solicitud/crear-tipo-solicitud.component';
import { EditarTipoSolicitudComponent } from './tipoSolicitud/editar-tipo-solicitud/editar-tipo-solicitud.component';
import { EliminarTipoSolicitudComponent } from './tipoSolicitud/eliminar-tipo-solicitud/eliminar-tipo-solicitud.component';
import { ListarTipoSolicitudComponent } from './tipoSolicitud/listar-tipo-solicitud/listar-tipo-solicitud.component';
import { CrearModalidadComponent } from './modalidad/crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './modalidad/editar-modalidad/editar-modalidad.component';
import { ListarModalidadComponent } from './modalidad/listar-modalidad/listar-modalidad.component';
import { EliminarModalidadComponent } from './modalidad/eliminar-modalidad/eliminar-modalidad.component';
import { CrearTiposComiteComponent } from './tiposComite/crear-tipos-comite/crear-tipos-comite.component';
import { EditarTiposComiteComponent } from './tiposComite/editar-tipos-comite/editar-tipos-comite.component';
import { EliminarTiposComiteComponent } from './tiposComite/eliminar-tipos-comite/eliminar-tipos-comite.component';
import { ListarTiposComiteComponent } from './tiposComite/listar-tipos-comite/listar-tipos-comite.component';
import { CrearAreaInvestigacionComponent } from './areaInvestigacion/crear-area-investigacion/crear-area-investigacion.component';
import { EliminarAreaInvestigacionComponent } from './areaInvestigacion/eliminar-area-investigacion/eliminar-area-investigacion.component';
import { ListarAreaInvestigacionComponent } from './areaInvestigacion/listar-area-investigacion/listar-area-investigacion.component';
import { EditarAreaInvestigacionComponent } from './areaInvestigacion/editar-area-investigacion/editar-area-investigacion.component';
import { CrearJuradoComponent } from './jurado/crear-jurado/crear-jurado.component';
import { EliminarJuradoComponent } from './jurado/eliminar-jurado/eliminar-jurado.component';
import { EditarJuradoComponent } from './jurado/editar-jurado/editar-jurado.component';
import { ListarJuradoComponent } from './jurado/listar-jurado/listar-jurado.component';
import { CrearCorreoNotificacionComponent } from './correoNotificacion/crear-correo-notificacion/crear-correo-notificacion.component';
import { EditarCorreoNotificacionComponent } from './correoNotificacion/editar-correo-notificacion/editar-correo-notificacion.component';
import { EliminarCorreoNotificacionComponent } from './correoNotificacion/eliminar-correo-notificacion/eliminar-correo-notificacion.component';
import { ListarCorreoNotificacionComponent } from './correoNotificacion/listar-correo-notificacion/listar-correo-notificacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrearTipoVinculacionComponent,
    EditarTipoVinculacionComponent,
    EliminarTipoVinculacionComponent,
    ListarTipoVinculacionComponent,
    CrearFacultadComponent,
    EditarFacultadComponent,
    ListarFacultadComponent,
    EliminarFacultadComponent,
    CrearDepartamentoComponent,
    EditarDepartamentoComponent,
    EliminarDepartamentoComponent,
    ListarDepartamentoComponent,
    CrearTipoSolicitudComponent,
    EditarTipoSolicitudComponent,
    EliminarTipoSolicitudComponent,
    ListarTipoSolicitudComponent,
    CrearModalidadComponent,
    EditarModalidadComponent,
    ListarModalidadComponent,
    EliminarModalidadComponent,
    CrearTiposComiteComponent,
    EditarTiposComiteComponent,
    EliminarTiposComiteComponent,
    ListarTiposComiteComponent,
    CrearAreaInvestigacionComponent,
    EliminarAreaInvestigacionComponent,
    ListarAreaInvestigacionComponent,
    EditarAreaInvestigacionComponent,
    CrearJuradoComponent,
    EliminarJuradoComponent,
    EditarJuradoComponent,
    ListarJuradoComponent,
    CrearCorreoNotificacionComponent,
    EditarCorreoNotificacionComponent,
    EliminarCorreoNotificacionComponent,
    ListarCorreoNotificacionComponent,
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ParametrosModule {}
