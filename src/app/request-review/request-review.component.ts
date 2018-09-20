import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  pageName = 'review-page';
  t=0;
  userForm: FormGroup;
  constructor(private _formbuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._formbuilder.group({ 
      from_sender: [null, [Validators.required, Validators.email]],
      to_recepient: [null, [Validators.required, Validators.email]],
		  type_review: [null, Validators.required],
		  subject: [null, Validators.required],
      message: [null, Validators.required],
	  })
  }

  onSubmit(){
    if (this.t==1){
      alert('Message sent successfully')
      this.userForm.reset();
      console.log(this.userForm.value);
    }
    this.t=1;
    setTimeout(function(){
      this.t=0;
    }, 500)
  }

}
