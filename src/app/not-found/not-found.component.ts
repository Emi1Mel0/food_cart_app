import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = 'nothing Found';
  @Input() resetLinkText: string = 'reset';
  @Input() resetLinkRoute: string = '/';

  // and we want use these parameters as inputs
  // we want send values from where we want to use them

  ngOnInit(): void {}
}
