import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Tham chiếu với child của view này
  @ViewChild(ToggleComponent, {static: true}) toggleComp!: ToggleComponent;
  @ViewChild('toggleBtn', {static: true}) toggleButton!: ElementRef<HTMLButtonElement>; 

  name = 'Hello Angular 12';
  isChecked = true;


  ngOnInit() {
    console.log('onInit', this.toggleComp, this.toggleButton.nativeElement);
  }

  //Sau khi View được Init thì có thể tham chiều với ViewChild
  ngAfterViewInit(){
    console.log(this.toggleComp, this.toggleButton);
  }
}
