import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguracionEndpointsService } from './configuracion-endpoints.service';
@Injectable({
  providedIn: 'root'
})
export class EjemploService extends ConfiguracionEndpointsService {

  constructor(public http: HttpClient) {
    super(http);
  }

  //Codigo postal
  public async ObtieneDatosCurp(curp:string)  : Promise<any>
  {
      return await this.getAsync(this.url_renapo + 'Consulta?CURP=' + curp)
  }

}
