import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { TestingComponent } from './pages/dashboard/testing/testing.component';
import { DashboardUserComponent } from './pages/dashboard/dashboard-user/dashboard-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { FooterComponent } from './components/footer/footer.component';
import { ChapterComponent } from './pages/categoryPages/chapters/chapter/chapter.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { BottomCategoryComponent } from './pages/categoryPages/bottom/bottom-category/bottom-category.component';
import { BranchComponent } from './pages/categoryPages/branch/branch/branch.component';
import { DemoComponent } from './pages/categoryPages/test/demo/demo.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { InstructionsComponent } from './pages/instructions/instructions/instructions.component';
import { QuizComponent } from './pages/quiz/quiz/quiz.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NoSanitizePipe } from '../app/_helpers/nosanitizerpipe';
import { ReportToEmailComponent } from './pages/quiz/report-to-email/report-to-email.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { QrcodeComponent } from './pages/QRCODE/qrcode/qrcode.component';
import { QRCodeModule } from 'angularx-qrcode';
import { RootComponent } from './pages/categoryPages/root/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    TestingComponent,
    DashboardUserComponent,
    FooterComponent,
    ChapterComponent,
    BottomCategoryComponent,
    BranchComponent,
    DemoComponent,
    InstructionsComponent,
    QuizComponent,
    NoSanitizePipe,
    ReportToEmailComponent,
    QrcodeComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,

    RichTextEditorAllModule,
    CKEditorModule,
    QRCodeModule,

    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    },)// import NgxUiLoaderHttpModule. By default, it will show background loader.
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
