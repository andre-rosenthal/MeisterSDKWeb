import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

const modules: any[] = [
  CommonModule,
  MatButtonModule,
  MatCheckboxModule,
  CdkTableModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
];

@NgModule({
    declarations: [
    ],
    entryComponents: [
    ],
    exports: [
      modules
    ],
    imports: [
      modules
    ],
})
export class MaterialDesignModule {};
