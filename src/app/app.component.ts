import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HighlightDirective } from  './highlight.directive'
import {AdvancedcolortoggleDirective} from './advancedcolortoggle.directive';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighlightDirective, AdvancedcolortoggleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DirectiveLearn';
}
