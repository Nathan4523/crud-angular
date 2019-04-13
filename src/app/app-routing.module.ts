import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostSaveComponent } from './post-save/post-save.component';

const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'posts/create', component: PostSaveComponent},
  {path: 'posts/:id/edit', component: PostSaveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
