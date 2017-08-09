import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from '../message.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ MessageService ]
})
export class ProductListComponent implements OnInit {
  message: any;
  subscription: Subscription;

  constructor(private _messageService: MessageService) {
    this.subscription = this._messageService.getMessage().subscribe(message => {this.message = message;});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
