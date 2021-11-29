import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { InicioSesionComponent } from './general/inicio-sesion/inicio-sesion.component';
import { CerrarSesionComponent } from './general/cerrar-sesion/cerrar-sesion.component';
import { CambiarClaveComponent } from './general/cambiar-clave/cambiar-clave.component';
import { RecuperarClaveComponent } from './general/recuperar-clave/recuperar-clave.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioSesionComponent,
    CerrarSesionComponent,
    CambiarClaveComponent,
    RecuperarClaveComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    ListarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SeguridadModule {}
