import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatFormField } from '@angular/material';

import { DataService } from '../data.service';
import { Model } from '../model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'username', 'phone', 'email', 'company', 'website'];

  dataSource: MatTableDataSource<Model>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.loadData().subscribe(data => {
      console.log(data, 'data');
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
