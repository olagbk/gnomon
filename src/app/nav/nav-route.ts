export class NavRoute {
  name: string;
  route: string;
  active: boolean;
  constructor(name: string, route: string, active: boolean = false) {
    this.name = name;
    this.route = route;
    this.active = active;
  }
}
