import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../layout/default/default.component';
import { FullscreenComponent } from '../layout/fullscreen/fullscreen.component';
import { PassportComponent } from '../layout/passport/passport.component';
import { LoginComponent } from './passport/login/login.component';
import { AuthGuardService } from './guard/default.service';
const routes: Routes = [
    { path: '', redirectTo: 'default', pathMatch: 'full' },
    /**默认布局 */
    {
        path: 'default',
        component: DefaultComponent,
        children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule' },
        ],
        canActivate: [AuthGuardService]
    },
    /**全屏布局 */
    {
        path: 'fullscreen',
        component: FullscreenComponent,
        children: [
        ],
        canActivate: [AuthGuardService]
    },
    /** 登陆布局 */
    {
        path: 'passport',
        component: PassportComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent }
        ]

    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteRoutingModule { }
