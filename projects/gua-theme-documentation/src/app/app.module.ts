import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
const appRoutes: Routes = [
  {
    path: 'ficha-desenvolvimento/:codigoFichaTecnica',
    data: {
      breadcrumb: 'Liberação de OP'
    },
    component: AppComponent
  }

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
