import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css'],
  providers: [LoggerService]
})
export class AfterContentComponent implements OnInit,  AfterContentInit, AfterContentChecked {
  private prevHero = '';
  comment = '';
  @ContentChild(ChildComponent) contentChild: ChildComponent;
  constructor( public logger: LoggerService) {
    this.logIt('After content constructor');
   }
  ngOnInit() {
  }
  ngAfterContentInit() {
    this.logIt('AfterContentInit');
    this.doSomething();
  }
  ngAfterContentChecked() {
    if (this.prevHero === this.contentChild.hero) {
     this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }
  private doSomething() {
   this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '' ;
  }
  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}:${child ? child.hero : 'no'} child content `;
    this.logger.log(message);
  }

}
