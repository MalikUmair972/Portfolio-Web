import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  cards = [
    {
      Image: 'assets/web-design.png',
      title:'Web Developer',
      para: 'My focus is on clean code, responsive design, and optimizing performance to deliver the best user experience.'
    },
    {
      Image: 'assets/web-design.png',
      title:'Webflow Designer',
      para: 'My focus is on clean code, responsive design, and optimizing performance to deliver the best user experience.'
    },
    {
      Image: 'assets/web-design.png',
      title:'UI/UX Design',
      para: 'My focus is on clean code, responsive design, and optimizing performance to deliver the best user experience.'
    },
    {
      Image: 'assets/web-design.png',
      title:'Graphic Designer',
      para: 'My focus is on clean code, responsive design, and optimizing performance to deliver the best user experience.'
    },
  ]

}
