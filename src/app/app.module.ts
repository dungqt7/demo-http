import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { ChildComponent } from './child/child.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { FormsModule } from '@angular/forms';
import { DemoHttpComponent } from './demo-http/demo-http.component';
@NgModule({
  declarations: [
    AppComponent,
    AfterContentComponent,
    ChildComponent,
    AfterContentParentComponent,
    DemoHttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
