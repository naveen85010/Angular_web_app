import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { MessagingService } from './shared/services/messaging.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message;
  constructor(private auth:AuthService, router :Router, private userService:UserService,private messagingService: MessagingService){
 auth.user$.subscribe(user=>{
   if(user){
   userService.save(user);
     let returnUrl=localStorage.getItem('returnUrl');
    router.navigateByUrl(returnUrl) ;
   }
 });
  }

  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
   }
  }

