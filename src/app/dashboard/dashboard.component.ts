import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  loading: boolean = false;

  @Input() isDark;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.loading = true;

    this.httpClient.get('/api/skills')
    .subscribe(
      (ret: Array<any>) => {
        this.cards = ret
        this.loading = false
      },
      () => {
        this.loading = false
      }
    )
  }

}
