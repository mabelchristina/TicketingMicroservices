import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
   
    let reqData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    console.log(reqData)
    this.userService.login(reqData).subscribe((response: any) => {
      
      // Save token or handle login success
      console.log('Login successful', response);
      this.router.navigate(['/tickets']);
    });
  }
}
