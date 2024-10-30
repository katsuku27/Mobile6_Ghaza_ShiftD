import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  // Input properties untuk menentukan label dan warna tombol
  @Input() label: string = 'Klik Saya';
  @Input() color: string = 'primary';

  // Output event saat tombol diklik
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit(); // Emit event ketika tombol diklik
  }
}
