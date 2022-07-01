import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './layout/main/main.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { AsideComponent } from './layout/aside/aside.component';
import { SlideComponent } from './layout/slide/slide.component';
import { ProductsComponent } from './layout/products/products.component';
import { ProductDetailComponent } from './layout/product-detail/product-detail.component';
import { FooterAdminComponent } from './layout-admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './layout-admin/header-admin/header-admin.component';
import { AsideAdminComponent } from './layout-admin/aside-admin/aside-admin.component';
import { SectionAdminComponent } from './layout-admin/section-admin/section-admin.component';
import { ProductsAdminComponent } from './layout-admin/products-admin/products-admin.component';
import { ServiceService } from './services/service.service';
import { AddProductComponent } from './layout-admin/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowValidateComponent } from './component/show-validate/show-validate.component';
import { StatusComponent } from './component/status/status.component';
import { SectorsAdminComponent } from './layout-admin/sectors-admin/sectors-admin.component';
import { AddSectorComponent } from './layout-admin/add-sector/add-sector.component';
import { CartComponent } from './layout/cart/cart.component';
import { LoginComponent } from './layout/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LayoutAdminComponent,
    AsideComponent,
    SlideComponent,
    ProductsComponent,
    ProductDetailComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    AsideAdminComponent,
    SectionAdminComponent,
    ProductsAdminComponent,
    AddProductComponent,
    ShowValidateComponent,
    StatusComponent,
    SectorsAdminComponent,
    AddSectorComponent,
    CartComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
