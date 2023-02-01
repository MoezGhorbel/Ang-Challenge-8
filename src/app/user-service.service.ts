import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './Utilisateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string = "http://localhost:3000/users";

  constructor(private HttpClient: HttpClient) { }

  getUsers(): Observable<Utilisateur[]> {
    return this.HttpClient.get<Utilisateur[]>(this.usersUrl);
  }

  deleteUser(id: number): Observable<{}> {
    const url = `${this.usersUrl}/${id}`;
    return this.HttpClient.delete(url, httpOptions);
  }

  addUser(user: Utilisateur): Observable<Utilisateur> {
    return this.HttpClient.post<Utilisateur>(this.usersUrl, user, httpOptions);
  }

  updateUser(id: number, user: Utilisateur): Observable<Utilisateur> {
    const url = `${this.usersUrl}/${id}`;
    return this.HttpClient.put<Utilisateur>(url, user, httpOptions);
  }
  
}
