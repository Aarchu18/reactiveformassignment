import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppserviceService } from './appservice.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { EditdetailComponent } from './editdetail/editdetail.component';
const routes: Routes = [
  { path: '', component: DetailComponent },
  {

    path: 'showdetail', component: ShowdetailComponent
  },
  {
    path: 'detail', component: DetailComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ShowdetailComponent,
    EditdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AppserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
