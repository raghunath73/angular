import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Import the new method

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // No need to import HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()) // Use provideHttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
