import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SesionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SesionProvider {
    usuario = undefined;

    constructor(public http: HttpClient) {
        console.log('Hello SesionProvider Provider');
    }

    iniciarSesion(usuario, contrasena) {
        this.usuario = {
            usuario: usuario,
            contrasena: contrasena
        };
        /*var hecho = false;
        this.http.get("https:\/\/dog.ceo\/api\/breeds\/image\/random").subscribe(
            (data) => {
                console.log(data);
            }
        );*/
    }

    cerrarSesion() {
        this.usuario = undefined;
    }

    isSesionIniciada() {
        return this.usuario;
    }
}
