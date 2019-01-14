import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { CreditComponent } from './components/credit/credit.component';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
