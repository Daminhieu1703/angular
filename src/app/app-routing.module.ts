import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './layout-admin/add-product/add-product.component';
import { AddSectorComponent } from './layout-admin/add-sector/add-sector.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { ProductsAdminComponent } from './layout-admin/products-admin/products-admin.component';
import { SectionAdminComponent } from './layout-admin/section-admin/section-admin.component';
import { SectorsAdminComponent } from './layout-admin/sectors-admin/sectors-admin.component';
import { CartComponent } from './layout/cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { ProductDetailComponent } from './layout/product-detail/product-detail.component';
import { ProductsComponent } from './layout/products/products.component';

const routes: Routes = [
  {
    path:'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path:'edit-product/:id',
        component: AddProductComponent,
      },
      {
        path:'edit-sector/:id',
        component: AddSectorComponent,
      },
      {
        path:'user',
        component: SectionAdminComponent,
      },
      {
        path:'products',
        component: ProductsAdminComponent,
      },
      {
        path:'add-product',
        component: AddProductComponent,
      },
      {
        path:'sectors',
        component: SectorsAdminComponent,
      },
      {
        path:'add-sector',
        component: AddSectorComponent,
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path:'home',
        component: MainComponent,
      },
      {
        path:'cart',
        component: CartComponent,
      },
      {
        path:'products',
        component: ProductsComponent,
      },
      {
        path:'detail/:id',
        component: ProductDetailComponent,
      },
    ]
  },
  {
    path:'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
