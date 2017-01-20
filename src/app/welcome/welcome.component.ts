import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from "../auth/services/auth.service";

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    constructor(private router: Router, private auth: AuthService) { }

    ngOnInit() { }

}
