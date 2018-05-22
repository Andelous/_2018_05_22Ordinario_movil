import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SesionProvider } from '../../providers/sesion/sesion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    usuario = "Nani";
    contrasena = "Omae wa";

    constructor(public navCtrl: NavController, public sesion: SesionProvider) {

    }

    iniciarSesion() {
        this.sesion.iniciarSesion(this.usuario, this.contrasena);
    }

    cerrarSesion() {
        this.sesion.cerrarSesion();
    }
}
