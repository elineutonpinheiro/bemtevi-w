import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  isHome = false;

  logout() {
    console.log("Usuário deslogado! Seguir para a page de Login")
    this.router.navigate(['']);
  }

  goHome() {
    console.log("Usuário vai para a página inicial")
    this.router.navigate(['']);
  }

  otherPage() {
    this.isHome = false;
  }

  homePage() {
    this.isHome = true;
  }

}
