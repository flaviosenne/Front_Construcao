import { Component, OnInit } from '@angular/core';
import { EngenheiroService } from '../../services/engenheiro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArquitetoService } from '../../services/arquiteto.service';
import { FornecedorService } from '../../services/fornecedor.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProjetoService } from './../../services/projeto.service';
@Component({
  selector: 'app-projetocreate',
  templateUrl: './projetocreate.component.html',
  styleUrls: ['./projetocreate.component.css']
})
export class ProjetoCreateComponent implements OnInit {

  projeto: any = {
    forma_pagamento:"",
		num_projeto: null,
		valor_projeto:null,
	  tamanho_terreno:null,
	  tamanho_projeto:null,
	  arquiteto:"",
	  cliente:"",
	  orcamento:false
  }

  arquiteto: any =[]
  cliente: any =[]

  constructor(
    private router: Router, private route: ActivatedRoute,
    private arquitetoService: ArquitetoService,
    private clienteService: ClienteService,
    private projetoService: ProjetoService
    ) { }

  ngOnInit(): void {

    this.clienteService.read().subscribe(cliente => {
      this.cliente = cliente
    })


    this.arquitetoService.read().subscribe(arquiteto => {
      this.arquiteto = arquiteto
    })

  }
  salvar(): void{
    this.projetoService.create(this.projeto).subscribe(() => {
      this.projetoService.showMessage('Projeto adicionado com sucesso')
      this.router.navigate(['/projeto'])
  })
  }
  cancel(): void{
    this.router.navigate(['/projeto'])
  }
}

