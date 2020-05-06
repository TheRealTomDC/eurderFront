import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ItemsService} from '../items.service';


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  createForm;
  itemJson;


  constructor(
    private itemsService: ItemsService,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      amountOfStock: ''
    });
  }


  ngOnInit(): void {
  }


  onCreate(itemData): void {
    const itemJson = JSON.stringify(itemData);
    this.itemsService.createNewItem(itemJson)
      .subscribe();
    this.createForm.reset();


  }

  onCancel(itemData): void {
    this.createForm.reset();
  }

}
