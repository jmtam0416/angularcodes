import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Activity | Wanted Student List';
  description = 'This is a sample Angular Application';
  users = [
    { id: 1, name: 'John Mark N. Tampadong', mobile: '09123456789', email: 'john.@example.com' },
    { id: 2, name: 'Isagani v. Adap Jr.', mobile: '09974622123', email: 'idod.makibayot@example.com' },
    { id: 3, name: 'Joel G. Martinez Jr.', mobile: '09887300129', email: 'joel.makibold@example.com' },
    { id: 4, name: 'Maria Ginette Po', mobile: '09155960124', email: 'ginette.buotan@example.com' },
    { id: 5, name: 'Dan Lester Patuyan', mobile: '09123456783', email: 'pats.makikuan@example.com' },
    { id: 6, name: 'Jomel Artogue', mobile: '09123456783', email: 'mel.makibabaye@example.com' },
    { id: 7, name: 'Jerwin Jade Mendoza', mobile: '09985531442', email: 'jey.inlove.kan.patuyan@example.com' },
  ];
}
