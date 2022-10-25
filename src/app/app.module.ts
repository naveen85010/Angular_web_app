import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from 'src/environments/environment';
import { AdminModule } from './admin/admin.module';
import { GurdService } from './admin/services/gurd.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { CoreModule } from './core/core.module';
import { ProductsService } from './shared/services/products.service';
import { SharedModule } from './shared/shared.module';

import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';

import { AsyncPipe } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    CoreModule,
    FormsModule,
    SharedModule,
    ShoppingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    
    RouterModule.forRoot([
      {path:'', component:ProductsComponent},
      {path:'login', component:LoginComponent},
      ]),
    
  ],
  providers: [
             ProductsService,
             GurdService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
