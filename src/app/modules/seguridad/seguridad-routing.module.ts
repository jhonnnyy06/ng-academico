import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './general/cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './general/cerrar-sesion/cerrar-sesion.component';
import { InicioSesionComponent } from './general/inicio-sesion/inicio-sesion.component';
import { RecuperarClaveComponent } from './general/recuperar-clave/recuperar-clave.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent,
  },
  {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent,
  },
  {
    path: 'cambiar-clave',
    component: CambiarClaveComponent,
  },
  {
    path: 'recuperar-clave',
    component: RecuperarClaveComponent,
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent,
  },
  {
    path: 'editar-usuario',
    component: EditarUsuarioComponent,
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent,
  },
  {
    path: 'listar-usuario',
    component: ListarUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
