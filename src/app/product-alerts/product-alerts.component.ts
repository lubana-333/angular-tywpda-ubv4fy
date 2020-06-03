
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';//new product alerts component to receive a product as input
import { Output, EventEmitter } from '@angular/core';//Emit an event when notify property change

@Component({  //indicates that the following class is a component
  selector: 'app-product-alerts',//selector identifies the component
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {// property value passes in from the component's parent,
    @Input() product;
     @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}