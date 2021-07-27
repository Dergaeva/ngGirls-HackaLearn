import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.scss']
})
export class LoginTestComponent implements OnInit {
  user$!: Observable<any>;
  helloMessage$!: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.authService.getUser$();

    this.helloMessage$ = this.authService.getHello$('ngGirls');
  }

}
