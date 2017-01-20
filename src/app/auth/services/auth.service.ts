import { Injectable } from '@angular/core';
import { AngularFireAuth, AuthProviders, AuthMethods, FirebaseAuthState, AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {
    user: {} = {};
    anonymous: boolean;
    private authState: FirebaseAuthState = null;

    constructor (public auth$: AngularFireAuth, public af: AngularFire) {
        auth$.subscribe((state: FirebaseAuthState) => {
            this.authState = state;
        });
        this.af.auth.subscribe(user => {
            this.user = user ? user : {};
            this.anonymous = user ? user.anonymous : null;
        });
        this.loginAnonymous(); // login first thing
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get id(): string {
        return this.authenticated ? this.authState.uid : '';
    }

    loginAnonymous() {
        this.auth$.login({
            provider: AuthProviders.Anonymous,
            method: AuthMethods.Anonymous,
        });
    }
}
