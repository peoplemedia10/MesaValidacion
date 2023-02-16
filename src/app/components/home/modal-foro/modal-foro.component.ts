import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArchivosService } from 'src/app/servicios/archivos.service';
import { ForoService } from 'src/app/servicios/foro.service';

@Component({
  selector: 'vex-modal-foro',
  templateUrl: './modal-foro.component.html',
  styleUrls: ['./modal-foro.component.scss']
})
export class ModalForoComponent implements OnInit, AfterViewInit {
  panelOpenState = false
  @ViewChild('list') list?: ElementRef<HTMLDivElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public objeto: any,
    private dialogRef: MatDialogRef<ModalForoComponent>,
    public archivoServicio: ArchivosService,
    public comentariosServicio: ForoService
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({ top: maxScroll, behavior: 'smooth' });
  }

}
