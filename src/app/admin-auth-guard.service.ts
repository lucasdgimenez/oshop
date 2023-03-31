import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private auth: AuthService) { }

  /*CanActivate() {
    this.auth.user$.pipe(map(user => {
        user.isAdmin
    }))

  }*/
}
