import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorCoponent implements OnInit {

  constructor(private route: Router,
    private fornecedorService: FornecedorService) { }

  fornecedor: any = {
    razao_social:"",
		nome_fantasia: "",
		cnpj:"",
	  endereco:"",
	  telefone: "",
	  email:""
  }

  ngOnInit(): void {

  }
  salvar(): void{
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor adicionado com sucesso')
      this.route.navigate(['/fornecedor-read'])
  })
  }

  cancel():void{
    this.route.navigate(['/fornecedor-read'])
  }


}
