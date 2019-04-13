import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PostSaveComponent } from './post-save/post-save.component';
import {FormsModule} from "@angular/forms";
import { GlyphComponent } from './glyph/glyph.component';
import { ButtonComponent } from './bootstrap/button/button.component';
import { ModalComponent } from './bootstrap/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSaveComponent,
    ButtonComponent,
    GlyphComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
