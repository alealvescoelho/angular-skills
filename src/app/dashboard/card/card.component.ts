import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  @Input() isDark;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLike(card: any){
    card.likes++;

    console.log(card)

    this.httpClient.put('/api/skills', card).subscribe((ret: Array<any>) => console.log(ret));
  }

  onShare(card?: any){
    window.open('https://www.linkedin.com/in/alexandre-alves-coelho/', '_blank');
  }

}
