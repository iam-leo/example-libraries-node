import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/user'; // Reemplaza con la URL de tu backend
  private JWT = 'JWToken'

  constructor(private http: HttpClient) { }

  login(name: string, password: string) {
    // Realiza la solicitud HTTP al backend para iniciar sesión y obtener el JWT

    return this.http.post<any>(`${this.apiUrl}/login`, { name, password })
           .pipe(
              tap( res => {
                localStorage.setItem(this.JWT, res.accessToken)
              })
           )
  }
}
