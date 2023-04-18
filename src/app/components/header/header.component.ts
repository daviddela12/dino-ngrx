import {Component, ElementRef, ViewChild} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {historySelectors} from "../../store/history/history.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('navBurger') navBurger: ElementRef = {} as ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef = {} as ElementRef;

  historyCollection$: Observable<number> = new Observable<number>();

  constructor(private store: Store) {
    this.historyCollection$ = this.store.pipe(select(historySelectors.historyCollectionCountSelector))
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
}
