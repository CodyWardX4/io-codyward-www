import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAwesomeAnimation', [
      
      state('small', style({
        transform: 'scale(1)',
      })),

      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in')), 
    ]),
    trigger('menuSmoothSlide', [
      state('collapsed', style({
        color: 'red'
      })),
      state('expanded', style({
        color: 'green',
      })),

      transition('collapsed <=> expanded', animate('300ms ease-in')),
    ])
  ]
})
export class AppComponent {
  
  state: string = 'small'

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  animateMenu() {
    this.state = (this.state === 'collapsed' ? 'expanded' : 'collapsed');
  }

  title = 'app';
}
