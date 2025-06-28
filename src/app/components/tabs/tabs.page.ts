import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { home, cart, person} from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonLabel, IonTabButton, IonTabBar, IonTabs, IonNav } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonNav, IonTabBar, IonTabButton, IonLabel, IonIcon, CommonModule, FormsModule]
})
export class TabsPage implements OnInit {

   constructor() {
      /**
       * Any icons you want to use in your application
       * can be registered in app.component.ts and then
       * referenced by name anywhere in your application.
       */
      addIcons({ cart, person, home });
    }

  ngOnInit() {
  }

  component = HomePage;

}
