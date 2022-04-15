import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthguardGuard } from './authGuard/authguard.guard';
import { HomeComponent } from './pages/home/home.component';
import { TestingComponent } from './pages/dashboard/testing/testing.component';
import { DashboardUserComponent } from './pages/dashboard/dashboard-user/dashboard-user.component';
import { ChapterComponent } from './pages/categoryPages/chapters/chapter/chapter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'chapters/:branchName/:branchId', component: ChapterComponent },
  { path: 'dashboard',canActivate:[AuthguardGuard],
        children: [
        { path: '', component: DashboardUserComponent} ,
        { path: 'testing', component: TestingComponent} 
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
