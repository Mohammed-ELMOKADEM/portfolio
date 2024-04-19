import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public links : any[] = [
    {link:"#section_1",title:"home"},
    {link:"#section_2",title:"About"},
    {link:"#section_3",title:"Services"},
    {link:"#section_4",title:"Projects"},
    {link:"#section_5",title:"Contact"}
  ]
}
