import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestStartComponent }   from './test-start/test-start.component';
import { AskNameComponent }   from './ask-name/ask-name.component';
import { MmsetestsComponent }   from './mmsetests/mmsetests.component';

const routes: Routes = [
  { path: '', redirectTo: '/mmsetests', pathMatch: 'full' },
  { path: 'test-start/:id', component: TestStartComponent },
  { path: 'ask-name/:id', component: AskNameComponent },
  { path: 'mmsetests', component: MmsetestsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
