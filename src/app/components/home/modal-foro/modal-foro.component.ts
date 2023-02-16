import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-modal-foro',
  templateUrl: './modal-foro.component.html',
  styleUrls: ['./modal-foro.component.scss']
})
export class ModalForoComponent implements OnInit {
  panelOpenState = false

  constructor(
    @Inject(MAT_DIALOG_DATA) public objeto: any,
    private dialogRef: MatDialogRef<ModalForoComponent>
  ) { }

  ngOnInit(): void {
  }

}
