import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListofusersComponent } from './firstassignment/listofusers/listofusers.component';

import { SecondassgnlocalstorageComponent } from './secondassgnlocalstorage/secondassgnlocalstorage.component';
import { Secondassgnlocalstoragecomp2Component } from './secondassgnlocalstoragecomp2/secondassgnlocalstoragecomp2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListofusersComponent,
    
    SecondassgnlocalstorageComponent,
    Secondassgnlocalstoragecomp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
