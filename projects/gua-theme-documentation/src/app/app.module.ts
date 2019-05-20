import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { DesenvolvimentoMateriaisComponent } from './components/desenvolvimento-materiais/desenvolvimento-materiais.component';
import { DesenvolvimentoMateriaisModule } from './components/desenvolvimento-materiais/desenvolvimento-materiais.module';

const appRoutes: Routes = [
  {
    path: 'ficha-desenvolvimento/:codigoFichaTecnica',
    data: {
      breadcrumb: 'Liberação de OP'
    },
    component: DesenvolvimentoMateriaisComponent
  }

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    DesenvolvimentoMateriaisModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
