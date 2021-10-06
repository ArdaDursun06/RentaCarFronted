import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandInfoComponent } from './components/brand-info/brand-info.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarComponent } from './components/car/car.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarInfoComponent } from './components/car-info/car-info.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorInfoComponent } from './components/color-info/color-info.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltercolorPipe } from './pipes/filtercolor.pipe';
import { FiltercarPipe } from './pipes/filtercar.pipe';
import { FilterbrandPipe } from './pipes/filterbrand.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from "ngx-toastr";
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CurrentUserComponent } from './components/navi/current-user/current-user.component';




@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandAddComponent,
    BrandInfoComponent,
    BrandUpdateComponent,
    CarComponent,
    CarAddComponent,
    CarDetailComponent,
    CarInfoComponent,
    CarUpdateComponent,
    ColorAddComponent,
    ColorInfoComponent,
    ColorUpdateComponent,
    CreditCardComponent,
    CustomerComponent,
    FilterComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    RegisterComponent,
    CurrentUserComponent,
    RentalComponent,
    UserComponent,
    FiltercolorPipe,
    FiltercarPipe,
    FilterbrandPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })  
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
