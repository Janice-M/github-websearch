import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User} from '../user';
import { Repositories} from '../repositories';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  profile:User;
  repos: Repositories;
  username: string;

 constructor(private profileService: ProfileService) {

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

  findProfile(){
 }


 ngOnInit() {
  interface ApiResponse{
  name: string;
  login: string;
  avatar_url: any;
  html_url: string;
  public_repos: string;
  }
}
}
