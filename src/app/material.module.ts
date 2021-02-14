import { NgModule } from '@angular/core';


import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const materials=[MatButtonModule,MatInputModule];
@NgModule({

  imports: materials,
  exports:materials
})
export class MaterialModule { }
