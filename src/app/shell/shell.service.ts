import { Routes, Route } from '@angular/router'

import { AuthenticationGuard } from 'src/app/core'
import { Shell } from './shell'

/**
 * Provides helper methods to create routes.
 */
export class ShellService {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: Shell,
      children: routes,
      // canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    }
  }
}
