import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule,
    MatToolbarModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({

    imports: [
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatProgressSpinnerModule
    ],
  })
export class MaterialModule { }
