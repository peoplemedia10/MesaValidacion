import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';

@Component({
  selector: 'vex-modal-doc-info',
  templateUrl: './modal-doc-info.component.html',
  styleUrls: ['./modal-doc-info.component.scss']
})
export class ModalDocInfoComponent implements OnInit {
  panelOpenState = false
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  array: any[] = []
  dataSource: any
  columns: TableColumn<any>[] = [
    { label: 'Version', property: 'version', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Abreviatura', property: 'abre', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Descripcion', property: 'descripcion', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Espacio Academico', property: 'espacio', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Rama', property: 'rama', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Creditos', property: 'creditos', type: 'text', visible: true, cssClasses: ['font-medium'] },
    // { label: 'Base', property: 'base', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Acciones', property: 'actions', type: 'button', visible: true }
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public objeto: any,
    private dialogRef: MatDialogRef<ModalDocInfoComponent>,
    public matPaginatorIntl: MatPaginatorIntl,
  ) { }

  ngOnInit(): void {
    this.array.push({
      version: 'version 1',
      descripcion: 'test'
    })
    this.dataSource = new MatTableDataSource<any>(this.array);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    this.matPaginatorIntl.itemsPerPageLabel = "Materias por página";
    this.matPaginatorIntl.previousPageLabel  = 'Anterior página';
    this.matPaginatorIntl.nextPageLabel = 'Siguiente página';
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

openModalUpdate(row){

}
deleteGrupo(row){

}
}
