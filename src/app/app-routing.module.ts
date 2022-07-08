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
import { BottomCategoryComponent } from './pages/categoryPages/bottom/bottom-category/bottom-category.component';
import { BranchComponent } from './pages/categoryPages/branch/branch/branch.component';
import { DemoComponent } from './pages/categoryPages/test/demo/demo.component';
import { InstructionsComponent } from './pages/instructions/instructions/instructions.component';
import { QuizComponent } from './pages/quiz/quiz/quiz.component';
import { RootComponent } from './pages/categoryPages/root/root/root.component';
import { WatchAllSetComponent } from './pages/watchAllSets/watch-all-set/watch-all-set.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'chapters/:branchName/:branchId', component: ChapterComponent },
  { path: 'category/:subCategoryName/:subCategoryId', component: BottomCategoryComponent },
  { path: 'branch/:bottomCategoryName/:bottomCategoryId', component: BranchComponent },
  { path: 'instructions/:questionSetName/:id', component: InstructionsComponent },
  { path: 'quiz/:questionSetName/:id', component: QuizComponent },
  { path: 'root/:rootCategoryName/:rootCategoryId', component: RootComponent },
  { path: 'quizSets/:subCategoryName/:id', component: WatchAllSetComponent },

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
