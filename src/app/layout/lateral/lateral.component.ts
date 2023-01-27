import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {
  sidenav_opened=false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error: any) => console.log(error));
  }

}
