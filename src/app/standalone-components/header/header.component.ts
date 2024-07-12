import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SharedService } from '../../shared/services/sharedservice';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   currentHeaderTitle!: string ;
   isHomePage: boolean = true;

  constructor(private sharedService : SharedService,
              private router: Router
  ) { 
    this.gettingHeaderTitle();

  }
  
  ngOnInit(): void { }

  gettingHeaderTitle() {

    this.sharedService.navbarBrandSubject.subscribe((res: any) => {
      this.currentHeaderTitle = res.HeaderTitle
      this.isHomePage = res.isHomePage;
    })
  }

  navigateBack(): void {
      const currentUrl = this.router.url;
      switch (true) {
        case currentUrl.startsWith('/menu'):
          this.router.navigate(['/home']);
          break;
        default:
          break;
      }
      this.sharedService.updateHeaderTitle(this.currentHeaderTitle, this.isHomePage);
  }

 



}
