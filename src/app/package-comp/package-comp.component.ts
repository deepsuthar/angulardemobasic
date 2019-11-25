import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-package-comp',
  templateUrl: './package-comp.component.html',
  styleUrls: ['./package-comp.component.css']
})
export class PackageCompComponent implements OnInit {
  title = 'app';
  results = '';
  constructor(private http: HttpClient) {
}
items: object [];

  ngOnInit(): void {
    this.http.get('http://www.mocky.io/v2/5bc437053000005c007587b7').subscribe(data => {
    });
  }
}
