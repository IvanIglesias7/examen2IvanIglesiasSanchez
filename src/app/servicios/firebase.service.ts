import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //CRUD de nuestra aplicacion

  constructor(
    private afb: AngularFirestore
  ) { }

  //recibimos todos los datos de la coleccion
  getAll(coleccion: string) {
    return this.afb.collection(coleccion).snapshotChanges();
  }

  //recibimos solo uno de la coleccion
  getOne(coleccion: string, documentId: string) {
    return this.afb.collection(coleccion).doc(documentId).snapshotChanges();
  }

  //actualizamos la coleccion
  update(coleccion: string, documentId: string, data: any) {
    return this.afb.collection(coleccion).doc(documentId).update(data);
  }

  //creamos un dato en la coleccion
  create(coleccion: string, data: any) {
    return this.afb.collection(coleccion).add(data);
  }

  //eliminamos uno o mas datos de la coleccion
  delete(coleccion: string, documentId: string) {
    return this.afb.collection(coleccion).doc(documentId).delete();
  }

  
}
