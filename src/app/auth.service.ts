import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute // Inject Firebase auth service
  ) {
    this.user$ = afAuth.authState
  }
  // Sign in with Google
  GoogleAuth() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    
    localStorage.setItem('returnUrl', returnUrl);

    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.signOut()
  }
}