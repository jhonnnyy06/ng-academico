import { TipoVinculacionModel } from "./tipoVinculacion.model";
export class ProponenteModel {
    id?: number;
    documento?: string;
    primerNombre?: string;
    otrosNombres?: string;
    primerApellido?: string;
    segundoApellido?: string;
    correo?: string;
    celular?: string;
    foto?: string;
    id_tipo_vinculacion?: number;
    tipoVinculacion?: TipoVinculacionModel;

  }