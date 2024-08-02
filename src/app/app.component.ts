import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  covers = [
    'https://i.scdn.co/image/ab67616d00001e02879e9318cb9f4e05ee552ac9',
    'https://i.scdn.co/image/ab67616d00001e0280d86d636244b72a3a1eede2',
    'https://i.scdn.co/image/ab67616d00001e02778c1e4660aa23f6728b32a1',
  ]
}
