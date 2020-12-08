import { Component, OnInit } from '@angular/core';
import { ObjectSenderService } from '../service/object-sender.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
})
export class UserPagePage implements OnInit {
  
  constructor(private obj:ObjectSenderService) { }

  ngOnInit() {
  }

}
