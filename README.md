Nama : Ghaza Indra P
NIM : H1D022073

# cara menambahkan Komponen di halaman Ionic
## 1. Buat komponen baru dengan perintah berikut di terminal:
```
ionic generate component components/CustomButton
```

## 2. Edit Komponen Button (CustomButton)
```
<span>Ghaza Indra Pratama</span>
<span>H1D022073</span>
<ion-button [color]="color" (click)="onClick()">
  {{ label }}
</ion-button>
```

## 3. Konfigurasi Properti di TypeScript
```
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
```

## 4. Tambahkan Komponen di folder.page.html:
```
<app-custom-button
  label="Tekan Saya"
  color="danger"
  (buttonClick)="onButtonClicked()">
</app-custom-button>

```

## 5. Pastikan Komponen Sudah Dideklarasikan di Modul pada folder.module.ts:
```
import { CustomButtonComponent } from '../components/custom-button/custom-button.component';
```

## 6. Tambahkan CustomButtonComponent ke Deklarasi pada folder.module.ts:
```
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, CustomButtonComponent]
})
export class FolderPageModule {}
```

## 7. Definisikan Logika Event di folder.page.ts:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  constructor() {}

  // Logika untuk menangani event button click
  onButtonClicked() {
    console.log('Tombol kustom diklik!');
  }
}
```

## 8. Jalankan Aplikasi
```
ionic serve
```
