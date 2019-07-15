import { Component, OnInit, ComponentFactory } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  profile: User;
  repos: Repositories;
  username: string;
  name = "Janice-M"; 

  constructor(private profileService: ProfileService) {


  }

  findProfile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }


  ngOnInit() {
    interface ApiResponse {
      avatar_url: any,
       username:string,
       bio:string,
       repos:number,
       followers:number,
       following:number,
    }
  }
}
