import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlerta() {     
    const alerta = await this.alertCtrl.create({       
      backdropDismiss: false,       
      header: 'Alerta',       
      subHeader: 'Calificaciones del Ciclo Actual',       
      message: 'El estudiante no posee calificaciones en este periodo!',       
      buttons: ['OK']     
    });     
  await alerta.present();   } 
}
