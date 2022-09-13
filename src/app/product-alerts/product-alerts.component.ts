import { Component, OnInit } from '@angular/core';

/* Needed so the @Input directive can be used to accept property data from parent */
import { Input } from '@angular/core';

/* Needed to pass data to the parent and notify the parent i.e. emit an event  */
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
    selector: 'app-product-alerts',
    templateUrl: 'product-alerts.component.html',
    styleUrls: ['product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
    /* Design comment:  This line indicates that the property value passes 
    in from the component's parent i.e. component define in tha app.component  */
    @Input() product!: Product|undefined;

    /* Design comment: This line indicates that the event emitter will be the 
    notify method */
    @Output() notify = new EventEmitter();

    constructor() {}

    ngOnInit() {
        
    }
}
