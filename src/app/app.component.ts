import { Component } from '@angular/core';

import { SdkRunComponent } from './components/sdk-run/sdk-run.component';

@Component({
  selector: 'app-root',
  imports: [SdkRunComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ocr';
}
