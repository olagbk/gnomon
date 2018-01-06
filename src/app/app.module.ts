// angular modules
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// application modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';

// services
import { AlbumsService } from './core/gallery/albums.service';

export function startupServiceFactory(albumsService: AlbumsService): Function {
  return () => albumsService.loadAll();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [ AlbumsService ],
      multi: true
    },

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
