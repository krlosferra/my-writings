import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { WritingAddComponent } from './component/writing-add/writing-add.component';
import { WritingListComponent } from './component/writing-list/writing-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: WritingAddComponent },
  { path: 'list', component: WritingListComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
