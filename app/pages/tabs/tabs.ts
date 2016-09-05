import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import {QuotesPage} from '../quotes/quotes';
import {ProfilePage} from '../profile/profile';
import {ChartPage} from '../chart/chart';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  private homePage: any;
  private quotesPage: any;
  private profilePage: any;
  private chartPage: any;

  constructor() {
    // // this tells the tabs component which Pages
    // // should be each tab's root Page
    this.homePage = HomePage;
    this.quotesPage = QuotesPage;
    this.profilePage = ProfilePage;
    this.chartPage = ChartPage;
  }
}