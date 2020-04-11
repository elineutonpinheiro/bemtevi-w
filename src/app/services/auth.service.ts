import { Credenciais } from './../models/credenciais';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private afa: AngularFireAuth) {

  }

  registrar(email: string, senha: string) {
    return this.afa.auth.createUserWithEmailAndPassword(email, senha);
  }


}
