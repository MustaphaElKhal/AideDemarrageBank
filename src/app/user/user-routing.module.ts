import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
{path: 'user', component: UserListComponent},
{path: 'user/create', component: UserDetailComponent},
{path: 'user/edit/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {}
