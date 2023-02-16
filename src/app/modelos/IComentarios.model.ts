import { IUsuario } from "./IUsuario.model";

export interface IComentarios {
    fecha: number,
    decripcionVersion: string,
    usuario?: IUsuario[]
}