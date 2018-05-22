import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { SesionProvider } from '../providers/sesion/sesion';

@Component({
  templateUrl: 'app.html',
  providers: [SesionProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  i = 0;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public sesion: SesionProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.demonioSesion();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  demonioSesion() {
    console.log("Miau", this.i++, this.sesion.isSesionIniciada());
    setTimeout(this.demonioSesion.bind(this), 1000);

    if (this.sesion.isSesionIniciada()) {
        this.pages = [
            {title: "La sesión está iniciada", component: ListPage}
        ];
    } else {
        this.pages = [
            {title: "La sesión NO está iniciada", component: HomePage}
        ];
    }
  }
}
