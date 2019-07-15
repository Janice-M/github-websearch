import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  profile:any[];
  repos: any[];
  username = "Janice-M";

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
 }
}
