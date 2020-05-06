import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ItemsService} from '../items.service';


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(
    private itemsService: ItemsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
