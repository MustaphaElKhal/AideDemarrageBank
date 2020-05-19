import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  utilisateurs: User[];
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.utilisateurs = this.userService.findAll();
  }

  redirectNewUserPage() {
    this.router.navigate(['/user/create']);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user);
  }

}
