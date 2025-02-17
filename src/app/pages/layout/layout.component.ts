import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanActivateFn, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {


}
