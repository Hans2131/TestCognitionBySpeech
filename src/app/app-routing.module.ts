import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestStartComponent }   from './test-start/test-start.component';
import { AskNameComponent }   from './ask-name/ask-name.component';

const routes: Routes = [
  { path: '', redirectTo: '/test-start', pathMatch: 'full' },
  { path: 'test-start', component: TestStartComponent },
  { path: 'ask-name', component: AskNameComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
