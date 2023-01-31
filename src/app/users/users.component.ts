import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  public users!: Utilisateur[];
  public user: Utilisateur = new Utilisateur();

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.getUsers());
  }

  addUser(user: Utilisateur) {
    this.userService.addUser(user).subscribe(() => this.getUsers());
  }

}
