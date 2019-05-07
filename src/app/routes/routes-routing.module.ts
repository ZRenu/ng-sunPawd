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
            { path: '', redirectTo: 'actual', pathMatch: 'full' },
            { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule' },
            { path: 'actual', loadChildren: './actual/actual.module#ActualModule' },
            { path: 'alarm-log', loadChildren: './alarm-log/alarm-log.module#AlarmLogModule' },
            { path: 'dictionary-mmt', loadChildren: './dictionary-mmt/dictionary-mmt.module#DictionaryMmtModule' },
            { path: 'environment', loadChildren: './environment/environment.module#EnvironmentModule' },
            { path: 'equ-data', loadChildren: './equ-data/equ-data.module#EquDataModule' },
            { path: 'equ-info', loadChildren: './equ-info/equ-info.module#EquInfoModule' },
            { path: 'system-mmt', loadChildren: './system-mmt/system-mmt.module#SystemMmtModule' }


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
