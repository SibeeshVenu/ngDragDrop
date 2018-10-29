import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatSelectModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieComponent
  ],
  exports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatSelectModule, BrowserAnimationsModule
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatSelectModule, BrowserAnimationsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
