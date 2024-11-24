import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],  // Import FormsModule for form functionality
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  onSubmit() {
    console.log('Form Submitted');
    alert("Form Submitted Successfully!");
  }
}
