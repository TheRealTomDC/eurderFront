import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ItemsService} from '../items.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  createForm;



  constructor(
    private itemsService: ItemsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.formBuilder.group({
      name:  ['', Validators.required, ],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      price: ['', [Validators.required, Validators.min(0)]],
      amountOfStock: ['', [Validators.required, Validators.min(0)]]
    });
  }

  get name(){return this.createForm.get('name'); }
  get description(){return this.createForm.get('description'); }
  get price(){return this.createForm.get('price'); }
  get amount(){return this.createForm.get('amountOfStock'); }


  ngOnInit(): void {
  }


  onCreate(itemData): void {
    const itemJson = JSON.stringify(itemData);
    this.itemsService.createNewItem(itemJson)
      .subscribe();
    this.createForm.reset();
 //   this.router.navigate(['itemDetail']);


  }

  onCancel(itemData): void {
    this.createForm.reset();
  }

}
