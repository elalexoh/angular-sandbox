import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Routes } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {
  routes: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initMenu()
  }

  initMenu() {
    this.route.url.subscribe(() => {
      const filteredRoutes = this.route.snapshot.parent?.children[0].routeConfig?.children?.filter(route => {
        return !route.hasOwnProperty('redirectTo')
      })
      this.routes = filteredRoutes
    });
    const arr1 = [
      { path: "home", show: true, icon: "https://via.placeholder.com/66x22" },
      { path: "seasons", show: true, icon: "https://via.placeholder.com/66x22" },
      { path: "progress", show: true, icon: "https://via.placeholder.com/66x22" },
      { path: "profile", show: true, icon: "https://via.placeholder.com/66x22" },
      { path: "vcoach", show: true, icon: "https://via.placeholder.com/66x22" },
      { path: "membership", show: false, icon: "https://via.placeholder.com/66x22" },
      { path: "checkout", show: false, icon: "https://via.placeholder.com/66x22" }
    ];

    const map = new Map();
    arr1.forEach(item => map.set(item.path, item));
    this.routes?.forEach((item: any) => map.set(item.path, { ...map.get(item.path), ...item }));
    const mergedArr = Array.from(map.values());
    this.routes = mergedArr
  }

}
