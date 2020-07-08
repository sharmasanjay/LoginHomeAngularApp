import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {USERMOCK} from './user-mock'

@Injectable(
)
export class UserService {

  constructor() { }
  
  getUsers():User[]{
    return USERMOCK;
  }
}
