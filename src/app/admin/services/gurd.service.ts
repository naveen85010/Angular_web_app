import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class GurdService  {

  constructor( private auth:AuthService,private router: Router ) { }

canActivate(route, state: RouterStateSnapshot){
return this.auth.user$.subscribe(user=>{
  if (user) return true;

  this.router.navigate(['/login'], { queryParams:{returnUrl :state.url}});
  return false;
})

}

}
