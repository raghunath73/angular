import { Component } from '@angular/core';

@Component({
  selector: 'app-example',  // This tag is used to include this component in other templates
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  title = 'Angular Template Example';
  imageUrl = 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';  // Example image URL
  isLoggedIn = true;
  items = ['Item 1', 'Item 2', 'Item 3'];
  name = '';

  onClick() {
    alert('Button clicked!');
  }
}
