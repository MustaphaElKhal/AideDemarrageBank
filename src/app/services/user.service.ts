import { User } from './../models/user';
import { USERS } from './../data/usersData';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * fonction de recherche de tous les utilisateurs
   *
   * @returns {User[]}
   * @memberof UserService
   */

  findAll(): User[] {
    return USERS;
  }

  /**
   *
   * fonction d'ajout d'un utilisateur
   * @param {User} user
   * @memberof UserService
   */
  saveUser(user: User) {
    if (user.id == null) {
      user.id = USERS.length + 1;
      USERS.push(user);
    }
  }

  deleteUser(user: User) {
    let idx;
    idx = USERS.indexOf(user);
    if (idx >= 0) {
      USERS.splice(idx, 1);
    }
  }

  updateUser(user: User) {
    // tslint:disable-next-line: prefer-const
    let oldUser = this.findUserById(user.id);
    let idx;
    idx = USERS.indexOf(oldUser);
    if (idx >= 0) {
      USERS.splice(idx, 1, user);
    }
  }

  /*
  findUserById(id: number) {
    USERS.forEach(u => {
      if(u.id === id) {
      return u;
      }
    });
  }
  */

  findUserById(id: number): User {
    let currentUser: User;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < USERS.length; i++) {
      currentUser = USERS[i];
      // tslint:disable-next-line: triple-equals
      if (currentUser.id == id) {
        return currentUser;
      }
    }
    return undefined;
  }

  constructor() { }
}
