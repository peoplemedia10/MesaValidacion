import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { IArchivo } from 'src/app/modelos/IArchivo.model';
import { IVersion } from 'src/app/modelos/IVersion.model';
import { ArchivosService } from 'src/app/servicios/archivos.service';

@Component({
  selector: 'vex-tab-historico',
  templateUrl: './tab-historico.component.html',
  styleUrls: ['./tab-historico.component.scss']
})
export class TabHistoricoComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dummyData: IArchivo
  dummyData2: IVersion[]
  panelOpenState = false
  dataSource: any
  columns: TableColumn<any>[] = [
    { label: 'Version', property: 'version', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Descripcion', property: 'descripcion', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Acciones', property: 'actions', type: 'button', visible: true }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public objeto: any, 
    public archivoServicio: ArchivosService,
    public matPaginatorIntl: MatPaginatorIntl
  ) 
  {
    this.dummyData = archivoServicio.getArchivosById(this.objeto.id)
    this.dummyData2 = this.dummyData.versiones
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.dummyData2);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    this.matPaginatorIntl.itemsPerPageLabel = "Versiones por página";
    this.matPaginatorIntl.previousPageLabel  = 'Anterior página';
    this.matPaginatorIntl.nextPageLabel = 'Siguiente página';
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  openModalUpdate(row) {

  }

  deleteGrupo(row) {

  }
}
