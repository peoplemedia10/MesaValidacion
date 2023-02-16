import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaModel } from '../modelos/respuesta.model';



@Injectable({
  providedIn: 'root'
})
export class ConfiguracionEndpointsService {
//Start Servicios Villas
url_api = 'http://10.10.0.32:8109/';
url_renapo = 'https://wsrenapo.conade.gob.mx/'


//

  constructor(public httpClient: HttpClient) { }
  getAsync(url: string): Promise<any> {
    return new Promise(resolve => {
      const subscription = this.httpClient.get<any>(url)
        .subscribe(
          data => {
            subscription.unsubscribe();
            resolve(data);

          }, error => {
            subscription.unsubscribe();
            resolve({
              EXITO: false,
              MENSAJE: error.message.toString(),
              RESPUESTA: error.error.text
            } as RespuestaModel);
          });
    });
  }

  postAsync(url: string, objeto: any): Promise<any> {

    return new Promise(resolve => {

      const subscription = this.httpClient.post(url, objeto)
        .subscribe(
          data => {

            subscription.unsubscribe();

            resolve(data ? data : { EXITO: true } as RespuestaModel);
          },
          error => {

            subscription.unsubscribe();

            return resolve({
              EXITO: false,
              MENSAJE: error.message.toString(),
              RESPUESTA: null
            } as RespuestaModel);
          });
    });
  }

  putAsync(url: string, objeto: any): Promise<any> {
    return new Promise(resolve => {
      const subscription = this.httpClient.put(url, objeto)
        .subscribe(
          data => {

            subscription.unsubscribe();

            resolve(data ? data : { EXITO: true } as RespuestaModel);
          },
          error => {

            subscription.unsubscribe();

            return resolve({
              EXITO: false,
              MENSAJE: error.message.toString(),
              RESPUESTA: null
            } as RespuestaModel);
          });
    });
  }

  deleteAsync(url: string): Promise<any> {

    return new Promise(resolve => {

      const subscription = this.httpClient.delete<any>(url)
        .subscribe(
          data => {

            subscription.unsubscribe();

            resolve(data ? data : { EXITO: true } as RespuestaModel);

          }, error => {

            subscription.unsubscribe();

            resolve({
              EXITO: false,
              MENSAJE: error.message.toString(),
              RESPUESTA: null
            } as RespuestaModel);
          });
    });
  }

}

