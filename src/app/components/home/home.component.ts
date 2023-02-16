import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArchivosService } from 'src/app/servicios/archivos.service';
import { ModalDocInfoComponent } from './modal-doc-info/modal-doc-info.component'; 
import { ModalForoComponent } from './modal-foro/modal-foro.component';

@Component({
  selector: 'vex-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dummyData: any[] 

  constructor(private dialog: MatDialog, public archivoServicio: ArchivosService) {
    this.dummyData = archivoServicio.getAllArchivos()
  }

  ngOnInit(): void {
  }

  detalles(id: any) {
    this.dialog.open(ModalDocInfoComponent , {
      height: '80%',
      width: '100%',
      autoFocus: true,
      data: {id},
      disableClose: true
    }).afterClosed().subscribe(result => {
      console.log(result);
    });
  } 

  comentarios(id: any) {
    this.dialog.open(ModalForoComponent, {
      height: '80%',
      width: '100%',
      autoFocus: true,
      data: {id},
      disableClose: true
    }).afterClosed().subscribe(result => {
      console.log(result);
    });
  } 
}
