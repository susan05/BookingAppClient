import { Component, OnInit } from '@angular/core';
import {AccType} from './accomodation-type.model';
import { Http, Response } from '@angular/http';
import { HttpAccTypeService } from '../services/http.accType.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-accomodation-type',
  templateUrl: './accomodation-type.component.html',
  styleUrls: ['./accomodation-type.component.css'],
  providers: [HttpAccTypeService]
})
export class AccomodationTypeComponent implements OnInit {

  accType: AccType;   //iz forme
  accTypes : Object []; //iz get metode - iz baze

  constructor(private httpAccTypeService: HttpAccTypeService) { }
  

  ngOnInit() {
    this.httpAccTypeService.getAccTypes().subscribe(
      (at: any) => {this.accTypes = at; console.log(this.accTypes)},//You can set the type to Product.
      error => {alert("Unsuccessful fetch operation!"); console.log(error);}
    );
    }

  addAccType(newAccType: AccType, form: NgForm) : void{
      this.httpAccTypeService.postAccType(newAccType).subscribe(this.onPost);
      form.reset();
    }    

  onPost(res : any) : void{
      alert("Post!");
      console.log(res.json());
    }
  }