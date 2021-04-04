import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RemoteServicesService {

  url_Base: string = 'http://dev.contanimacion.com/linkedinAPI/remote/';

  constructor(
    private http: HttpClient, private toastCtrl: ToastController
  ) { }

  public login(data) {
    //datos fijos del bakend
    data.grant_type = "password";
    data.client_id = "2";
    data.client_secret = "MN1usqM3OH5UpKZsHAkMunTsQprv6y4lA2Z0LwiD";
    return new Promise(resolve => {
      this.http.post(this.url_Base + "oauth/token", data).subscribe(value => {
        console.log(value);
        resolve(value);
      }, err => {
        console.log(err);
        this.sendToast("Error "+ err.status + ": " +err.statusText, 'danger');
      });
    })
  }

  async sendToast(msg: string, ColorToast: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: "middle",
      duration: 3000,
      color: ColorToast,
      mode: "ios"
    });
    toast.present();
  }

}
