import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseHistory } from './classes/case-history';
import { OpencovidService } from './services/opencovid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  caseHistories!: CaseHistory[];
  caseHistory: CaseHistory = new CaseHistory();
  

  constructor(private opencovidService: OpencovidService, private router: Router) { }

  ngOnInit(): void {
    this.opencovidService.getCaseHistory_NB().subscribe(data => {
      console.log(data);
    })
  }

}
