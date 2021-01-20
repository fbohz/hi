import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AnotherService } from './front/another.service';
import { FrontService } from './front/front.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { LlamaPageComponent } from './llama-page/llama-page.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: FrontComponent},
      {path: 'llama/:id', component: LlamaPageComponent},
    ])
  ],
  declarations: [
    AppComponent,
    FrontComponent,
    LlamaPageComponent
  ],
  providers: [
    AnotherService,
    FrontService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
