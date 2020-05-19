import { USERS } from './../data/usersData';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

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
  let idx;
  idx = USERS.indexOf(user);
  if(idx >= 0) {
    USERS.splice(idx, 1, user);
  }
}

  constructor() { }
}
