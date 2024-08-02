import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    covers = [
        'https://i.scdn.co/image/ab67616d00001e02879e9318cb9f4e05ee552ac9',
        'https://i.scdn.co/image/ab67616d00001e0280d86d636244b72a3a1eede2',
        'https://i.scdn.co/image/ab67616d00001e02778c1e4660aa23f6728b32a1',
    ]
}
