import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    FlexLayoutModule,
    MatToolbarModule,
  ],
  exports: [
    MatCardModule, 
    FlexLayoutModule,
    MatToolbarModule,
    
  ],
})
export class MaterialUiModule { }
