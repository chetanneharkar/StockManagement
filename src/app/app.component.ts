import { Component,OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() { }
  ngOnInit() {
    jQuery('#menu-toggle').click(function(e) {
      e.preventDefault();
      jQuery("#wrapper").toggleClass("active");
    });
  }
}
