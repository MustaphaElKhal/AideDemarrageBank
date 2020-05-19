import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

  utilisateur: User = null;
  userForm: FormGroup;
  id: number;
  private sub: any;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]
      )
    });

    if (this.id) {
      this.utilisateur = this.userService.findUserById(this.id);
      this.userForm.patchValue ({
        username: this.utilisateur.username,
        address: this.utilisateur.address,
        email: this.utilisateur.email,
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.utilisateur == null) {
      this.utilisateur = new User(
        null,
        this.userForm.controls['username'].value,
        this.userForm.controls['address'].value,
        this.userForm.controls['email'].value,
      );
      this.userService.saveUser(this.utilisateur);
    } else {
      this.onUpdate();
    }
  }
    this.userForm.reset();
    this.router.navigate(['/user']);
}

  /**
   * cette methode effectue un SaveOrUpdate selon l'id
   */

  onUpdate() {
      this.utilisateur = new User(
        this.utilisateur.id,
        this.userForm.controls['username'].value,
        this.userForm.controls['address'].value,
        this.userForm.controls['email'].value,
      );
      this.userService.updateUser(this.utilisateur);
    }

    redirectUserPage() {
      this.router.navigate(['/user']);
    }

}
