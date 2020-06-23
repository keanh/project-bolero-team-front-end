import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../interface/User';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    await this.userService.getUserById(id).toPromise()
      .then(res => {
        console.log(res);
        this.user = res;
      })
      .catch(error => console.log(error));
    console.log('Not found');
  }
}
