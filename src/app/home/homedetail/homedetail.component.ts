import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-homedetail',
  templateUrl: './homedetail.component.html',
  styleUrls: ['./homedetail.component.scss'],
})
export class HomedetailComponent implements OnInit {
  currentImage: any;
  items:any;
  constructor(private camera: Camera) {
   }

  ngOnInit() {
    this.items=[
      {id:1, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloween"},
      {id:2, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"},
      {id:3, src:"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y", text:"halloweeneen"}


]
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }

}

