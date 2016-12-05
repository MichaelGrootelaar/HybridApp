import { MyApp } from './app.component';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

// Importing pages
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDouZgcabijXCJ9oBEdViB6k71elZh4-fE",
  authDomain: "shizzlelists-4f8c4.firebaseapp.com",
  databaseURL: "https://shizzlelists-4f8c4.firebaseio.com",
  storageBucket: "shizzlelists-4f8c4.appspot.com",
  messagingSenderId: "696190197459"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
  ]
})
export class AppModule {}
