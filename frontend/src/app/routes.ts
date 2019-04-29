import {Routes} from "@angular/router";
import {SampleComponent} from "./sample/sample.component";


export const routes: Routes = [
  {path: 'sample', component: SampleComponent},
  {path: '', redirectTo: 'sample', pathMatch: 'full'},
  {path: '**', redirectTo: 'sample', pathMatch: 'full'}
];
