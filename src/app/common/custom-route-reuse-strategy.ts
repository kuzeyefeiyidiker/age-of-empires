import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, UrlSegment } from '@angular/router';

@Injectable()
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  storedRoutes: { [key: string]: DetachedRouteHandle } = {};
  routeLeftFrom: string;

  /** Determines if this route should be detached to be reused later */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    this.routeLeftFrom = route.routeConfig?.data ? route.routeConfig?.data['reuseIf'] : '';
    return route.routeConfig?.data && route.routeConfig.data['reuse'] === true;
  }

  /** Stores the detached route */
  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.storedRoutes[this.createIdentifier(route)] = handle;
  }

  // Should retrive stored route if exists
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route.routeConfig?.data) {
      const wasRoutePreviouslyDetached = !!this.storedRoutes[this.createIdentifier(route) || this.createIdentifier(route.parent)];
      return wasRoutePreviouslyDetached && route.routeConfig.data['reuseIf'] === this.routeLeftFrom;
    }
    return false;
  }

  /** Retrieves the previously stored route */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return this.storedRoutes[this.createIdentifier(route)];
  }

  /** Determines if a route should be reused */
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  private createIdentifier(route: ActivatedRouteSnapshot) {
    // Build the complete path from the root to the input route
    const segments: UrlSegment[][] = route.pathFromRoot.map(r => r.url);
    const subpaths = ([] as UrlSegment[]).concat(...segments).map(segment => segment.path);
    // Result: ${route_depth}-${path}
    return segments.length + '-' + subpaths.join('/');
  }
}
