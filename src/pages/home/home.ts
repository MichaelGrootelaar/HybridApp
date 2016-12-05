import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shizzles: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController ,public alertCtrl: AlertController, af: AngularFire) {
    this.shizzles = af.database.list('/shizzles');
  }

  createShizzle(){
    let prompt = this.alertCtrl.create({
      title: 'Shizzle Name',
      message: "Enter a name for this new shizzle you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.shizzles.push({
              title: data.title
            });
          }
        }
      ]
    });
    prompt.present();
  }

  showOptions(shizzleId, shizzleTitle){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('camcel clicked');
          }
        },{
          text: 'Delete Shizzle',
          role: 'destructive',
          handler: () => {
            this.deleteShizzle(shizzleId);
          }
        },{
          text: 'Update Shizzle',
          handler: () => {
            this.updateShizzle(shizzleId, shizzleTitle);
          }
        }
      ]
    });
    actionSheet.present();
  }

  deleteShizzle(shizzleId: string) {
    this.shizzles.remove(shizzleId);
  }

  updateShizzle(shizzleId, shizzleTitle) {
    let prompt = this.alertCtrl.create({
      title: 'Shizzle Name',
      message: "Update the name of this shizzle",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: shizzleTitle
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },{
          text: 'Save',
          handler: data => {
            this.shizzles.update(shizzleId, {
              title: data.title
            });
          }
        }
      ]
    });
    prompt.present();
  }
}
