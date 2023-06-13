import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TopPostsComponent } from './shared/components/top-posts/top-posts.component';
import { NewsLetterComponent } from './shared/components/news-letter/news-letter.component';
import { BlogCardComponent } from './shared/components/blog-card/blog-card.component';
import { BlogCardSmComponent } from './shared/components/blog-card-sm/blog-card-sm.component';
import { NewPostComponent } from './shared/components/new-post/new-post.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { SampleComponent } from './pages/sample/sample.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoadMoreBtnComponent } from './shared/components/load-more-btn/load-more-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopPostsComponent,
    NewsLetterComponent,
    BlogCardComponent,
    BlogCardSmComponent,
    NewPostComponent,
    BlogDetailComponent,
    SampleComponent,
    ContactComponent,
    LoadMoreBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
