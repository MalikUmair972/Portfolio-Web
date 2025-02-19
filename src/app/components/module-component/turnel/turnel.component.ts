import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-turnel',
  templateUrl: './turnel.component.html',
  styleUrl: './turnel.component.scss'
})
export class TurnelComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}


  
  ngAfterViewInit(): void {
    this.loadScript('assets/script.js');
  }
  private loadScript(scriptUrl: string) {
    const script = this.renderer.createElement('script');
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }
  
}
