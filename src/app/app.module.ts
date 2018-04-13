import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SteamService } from './steam.service';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DragScrollModule } from 'ngx-drag-scroll';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    SharedModule,
    DragScrollModule,
  ],
  providers: [SteamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
