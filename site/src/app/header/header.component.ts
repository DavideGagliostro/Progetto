import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public ruoliU: string[] |undefined;
  public isAdmin= false;
  constructor(private keycloakService: KeycloakService) { 
    this.ruoliU=this.keycloakService.getKeycloakInstance().realmAccess?.roles;
      if(this.ruoliU?.includes('psw-admin')){
        this.isAdmin=true;
      };
  }

  ngOnInit(): void {
  }

}