import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { CategoryToIconPipe } from './pipes/category-icon.pipe';

@NgModule({
  declarations: [
    ProgressbarComponent,
    CategoryToIconPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ProgressbarComponent,
    CategoryToIconPipe
  ]
})
export class SharedModule { }
