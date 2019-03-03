import { NgModule } from '@angular/core';
import { MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
