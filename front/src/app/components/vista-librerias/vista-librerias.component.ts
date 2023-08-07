import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-librerias',
  templateUrl: './vista-librerias.component.html',
  styleUrls: ['./vista-librerias.component.css']
})
export class VistaLibreriasComponent implements OnInit {
  private JWT = 'JWToken';

  constructor(private router: Router){ }

  ngOnInit(): void {
    this.validateSesion()
  }

  getStoredJWT() {
    return localStorage.getItem(this.JWT);
  }

  validateSesion(){
    const token = this.getStoredJWT()

    if(!token){
      this.router.navigate(['/login'])
    }
  }



}
