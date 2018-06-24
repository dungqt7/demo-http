import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styleUrls: ['./after-content-parent.component.css']
})
export class AfterContentParentComponent implements OnInit {
  show = true;
  constructor(public logger: LoggerService) { }
  reset() {
    this.logger.clear();
    this.show = false;
    this.logger.tick_then(() => this.show = true );
  }
  ngOnInit() {
  }

}
