import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { EventoModalPage } from '../evento-modal/evento-modal'
import { NovoEventoPage } from '../novo-evento/novo-evento';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'home-page',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public trajetos:any = [
    {
      user: {
        name: "Glenda Mccoy",
        picture: "https://randomuser.me/api/portraits/women/70.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }, {
      user: {
        name: "Connor Walker",
        picture: "https://randomuser.me/api/portraits/men/44.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }, {
      user: {
        name: "Rafael Smith",
        picture: "https://randomuser.me/api/portraits/men/70.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }, {
      user: {
        name: "Katherine Jones",
        picture: "https://randomuser.me/api/portraits/women/48.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }, {
      user: {
        name: "Philip Flores",
        picture: "https://randomuser.me/api/portraits/men/51.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }, {
      user: {
        name: "Wade Fletcher",
        picture: "https://randomuser.me/api/portraits/men/47.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }, {
      user: {
        name: "Edna Daniels",
        picture: "https://randomuser.me/api/portraits/women/60.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }, {
      user: {
        name: "Clifton Mckinney",
        picture: "https://randomuser.me/api/portraits/men/53.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }, {
      user: {
        name: "John Simmmons",
        picture: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }, {
      user: {
        name: "Cassandra Knight",
        picture: "https://randomuser.me/api/portraits/women/88.jpg"
      },
      name: "Caminhada entre amigos",
      description: "Uma caminhada para encontrar e se reunir com novos e antigos amigos!"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openModal() {
    let modal = this.modalCtrl.create(EventoModalPage);
    modal.present();
  }

  goToNewEvento() {
    this.navCtrl.push(NovoEventoPage);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HomePage');
  }

}
