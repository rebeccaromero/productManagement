import { Component, OnInit, Input, Output } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  constructor(private messageService: MessageService) { }

  product = {
    title: '',
    price: 0,
    imgUrl: ''
  };

  sendMessage(): void {
    this.messageService.sendMessage('This is a test')
  }

  clearMessage (): void {
    this.messageService.clearMessage();
  }

  createProduct() {
    console.log(this.product)
    this.sendMessage();
  };


  ngOnInit() {
  }

}
