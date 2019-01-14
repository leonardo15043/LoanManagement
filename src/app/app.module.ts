import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { CreditComponent } from './components/credit/credit.component';

//Routes
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
