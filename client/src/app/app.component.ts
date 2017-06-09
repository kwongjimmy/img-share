import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})
export class AppComponent  { 

    fileChange(event) {
        let fileList: FileList = event.target.files;
        
    }
}
