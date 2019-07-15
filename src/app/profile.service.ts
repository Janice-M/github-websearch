import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientId = 'b1b8df32b10c51993119';
  private clientSecret = '241aeea65e618775eae9ea2d24a9fb03fa6861a3';


  constructor(private http: Http) {
    console.log("Service works.")
    this.username = 'Janice-M';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?clientId=" + this.clientId + "&clientSecret=" + this.clientSecret)
    .map(res => res.json());
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
  	.map(res => res.json());
  }

  updateProfile(username:string){
  	this.username = username;
  }


}
