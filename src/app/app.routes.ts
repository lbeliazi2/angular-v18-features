import { Routes } from '@angular/router';
import {ErrorHandler, inject} from "@angular/core";
import {UserPageComponent} from "./user-page/user-page.component";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: "menu",
    // we can now use functions to redirect routes
    // here by writting /menu?userId=1 we are redirecting to a specific page
    // if there is no user given you will see the console error and the redirection to the not found page

    redirectTo: ({queryParams}) => {
      const errorHandler = inject(ErrorHandler);
      const userIdParam = queryParams['userId'];
      if (userIdParam !== undefined) {
        return `/user/${userIdParam}`;
      } else {
        errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
        return `/not-found`;
      }
    },
  },
  { path: "not-found", component: NotFoundComponent},
  { path: "user/:userId", component: UserPageComponent },
  { path: "", component: HomeComponent}
];
