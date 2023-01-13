import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { currentUserSelector, isLoggedInSelector } from "src/app/auth/store/selectors";

import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Component({
  selector: "mc-navBar",
  templateUrl: "./navBar.component.html",
  styleUrls: ["./navBar.component.css"],
})
export class NavBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

}
