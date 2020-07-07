import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from './../../services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {

  fornecedor: any = []
  constructor(private router: Router, private fornecedorS: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorS.read().subscribe(fornecedor => {
      this.fornecedor = fornecedor
    })
  }

  delete(id){
    this.fornecedorS.delete(id).subscribe(()=> {
      this.fornecedorS.showMessage('Fornecedor excluido com sucesso')
      this.ngOnInit()
    })
  }

}
