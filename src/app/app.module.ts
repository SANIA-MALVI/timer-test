import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// Import other Material modules as needed
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { TimeOptionsFormComponent } from './time-options-form/time-options-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimeOptionsFormComponent
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  
    // Include other Material modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
