import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';
import { registerAction, registerFailedAction, registerSuccessAction } from 'src/app/auth/store/actions/register.action';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Injectable()

export class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailedAction({ errors: errorResponse.error.errors})
            );
          })
        );
      })
    )
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
