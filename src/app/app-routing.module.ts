import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ShellModule, Shell} from './shell/shell.module';
import { ShellService } from './shell/shell.service';


const routes: Routes = [
  {path:'home',redirectTo:'home/homescreen',pathMatch:'full'},
  ShellService.childRoutes([{ path: 'home', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)}]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ShellModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
