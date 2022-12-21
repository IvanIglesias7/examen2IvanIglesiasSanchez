import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-porteros-form',
  templateUrl: './porteros-form.component.html',
  styleUrls: ['./porteros-form.component.css']
})
export class PorterosFormComponent implements OnInit {

  formPortero = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: [''],
    ciudad: [''],
    telefono: [''],
    email: [''],
    mesDispo: [0],
  });
  documentId: string = '';
  portero: any;

  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private fire: FirebaseService
  ) { }

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('idPortero')!;
    this.fire.getOne('portero', this.documentId).subscribe((resp: any) => { 
      this.formPortero.setValue(resp.payload.data() );
    });
  }
}
