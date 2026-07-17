import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../core/services/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {


  email = '';
  password = '';

  erro = '';


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  entrar() {

    console.log("BOTÃO CLICADO");


    this.authService.login(
      this.email,
      this.password
    )
    .subscribe({

      next: (res: any) => {

        console.log("LOGIN OK:", res);


        this.authService.saveToken(res.token);


        alert("Login realizado!");


        this.router.navigate(['/dashboard']);

      },


      error: (err) => {

        console.log("ERRO LOGIN:", err);


        this.erro = "Email ou senha inválidos";

      }

    });

  }


}