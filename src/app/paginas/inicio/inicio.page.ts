import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }
  onClick(){
    this.presentActionSheet();
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({ header: 'Mi perfil', cssClass: 'my-custom-class',
      buttons: [
 
      {         
        text: 'Ver Mi perfil',         
        icon: 'person',         
        data: 'Data value',         
        handler: () => {           
          console.log('Dio click en ver mi perfil');         
        }       
      }, 
      {         
        text: 'Favorito',         
        icon: 'heart-outline',        
         handler: () => {           
          console.log('Click en Favorito');         
        }       
      }, 
      {         
        text: 'Cerrar Sesion',         
        role: 'destructive',         
        icon: 'power',         
        id: 'logout-button',         
        data: {           
          type: 'delete'         
        },         
        handler: () => {           
          console.log('Sesion Cerrada');         
        }       
      },
      {         
        text: 'Cancelar',         
        icon: 'close-outline',         
        role: 'cancel',         
        handler: () => {           
          console.log('Dio click en Cancelar');         
        }       
      }
    ]     
  });     
  await actionSheet.present();      
  const { role, data } = await actionSheet.onDidDismiss();     
  console.log('Menu disminuido', role, data);
  }

}
