import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app works!';
  loadedFeature:string = 'recipes';

  onNavigate(feature:string) {
    this.loadedFeature = feature;
  }

}
