import { Component, OnInit } from '@angular/core';
import { devMember } from '../shared/devMember.model';

@Component({
  selector: 'app-about-bison-match',
  templateUrl: './about-bison-match.component.html',
  styleUrls: ['./about-bison-match.component.css']
})
export class AboutBisonMatchComponent implements OnInit {

devMembers: devMember[] = [
  new devMember("Brionna Cunningham","MarketaRTBAbe", "Hello! I'm bri and my talents are probably being wasted here...", "img"),
    new devMember("Shelby Leoni","Cupid", "Please dont kill me if I don't find your one true love...", "img"),
  new devMember("Madelyn Reyes", "Front-End Center","I'd like to take the time to thank all those that supported this project...thanks mom.", "img"),
  new devMember("Noah Rutledge", "I'm too cool for a nickname","I'm not getting paid for this...", "img"),

];
  constructor() { }

  ngOnInit() {
  }

}
