import {Component,OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
log: any = {};

  constructor(private router: Router,) { }

  ngOnInit() {
  jQuery(".login").hide();
  }

  login(){
    
     if(this.log.email == 'amol' && this.log.password == 'amol' ){
      jQuery(".login").show();
      this.router.navigate(['/home']);                        

      // jQuery(".logout").hide();
  }else{
      // jQuery(".logout").show();
      jQuery(".login").hide();    
  } 
}
}
