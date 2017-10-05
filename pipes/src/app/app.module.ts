import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule, NgModel } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [AppComponent, ExemplosPipesComponent, CamelCasePipe, FiltroArrayPipe, FiltroArrayImpuroPipe],
  imports: [BrowserModule, FormsModule],
  providers: [

    {
      provide: LOCALE_ID,
useValue: 'pt-BR'
//useClass:,
//useFactory
    }


/*     SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: settingsService => settingsService.getLocale()
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
