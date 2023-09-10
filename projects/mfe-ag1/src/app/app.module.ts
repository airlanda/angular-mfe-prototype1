import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShashQuashComponent } from './shash/shash-quash/shash-quash.component';
import { ShashModule } from './shash/shash-quash/shash.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ShashQuashComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking' }),
    ShashModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
