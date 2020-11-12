import { BaseComponent } from '../../lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    });
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      remember: new FormControl(false, []),
    });
  }
  onSubmitLogin(value: any) { 
    this._api.get('/api/customer/get-by-customer-id/'+ value.customer_email).takeUntil(this.unsubscribe).subscribe((res:any) => {
      alert('Đăng nhập thành công');
      this.loginForm = this.fb.group({
        'username': [''],
        'password': [''],
      }); 
      this.router.navigate(['/']);
    
       }, err => { });    
  }
  onSubmitRegister(value: any) { 
    this._api.post('/api/customer/create-item', {customer_email:value.email, customer_password:value.password} ).takeUntil(this.unsubscribe).subscribe(res => {
     alert('Đăng ký thành công');
     this.registerForm = this.fb.group({
      'email': [''],
      'password': [''],
    });
      }
      , err => { });      
  }
}