import {Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Socket, SocketIoConfig, SocketIoModule} from 'ngx-socket-io';


@Injectable()
export class SocketChat extends Socket {

  constructor() {
    super({url: 'http://localhost:3000', options: {}});
  }

}

@Injectable()
export class SocketStock extends Socket {

  constructor() {
    super({url: 'http://localhost:3200', options: {}});
  }

}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule,
    SharedModule,
    NoopAnimationsModule,
  ],
  providers: [SocketStock, SocketChat],
  bootstrap: [AppComponent]
})
export class AppModule { }
