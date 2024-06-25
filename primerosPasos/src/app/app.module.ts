import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { MyService } from './my-service';
import { AppComponentComponent } from './app-component/app-component.component'; // Importa el nuevo servicio

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    AppComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Añade HttpClientModule a los imports
  ],
  providers: [MyService], // Añade el servicio a los providers
  bootstrap: [AppComponent]
})
export class AppModule { }
