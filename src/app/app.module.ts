import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { NxProgressStepperModule } from '@aposin/ng-aquila/progress-stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NxProgressStepperModule,
    CdkStepperModule,
    NxExpertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
