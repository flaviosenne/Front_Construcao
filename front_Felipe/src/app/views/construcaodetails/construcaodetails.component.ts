import { Component, OnInit } from '@angular/core';
import { EngenheiroService } from '../../services/engenheiro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArquitetoService } from '../../services/arquiteto.service';
import { FornecedorService } from '../../services/fornecedor.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ConstrucaoService } from 'src/app/services/construcao.service';
@Component({
  selector: 'app-construcaodetails',
  templateUrl: './construcaodetails.component.html',
  styleUrls: ['./construcaodetails.component.css']
})
export class ConstrucaoDetailsComponent implements OnInit {

  construcao: any = {
    forma_pagamento:"",
		num_construcao: null,
		valor_contrucao:null,
	  tamanho_terreno:null,
	  tamanho_construcao:null,
	  arquiteto:"",
	  engenheiro:"",
	  fornecedores:"",
	  qtde_pedreiros:null,
	  cliente:"",
	  orcamento:true
  }

  arquiteto: any =[]
  engenheiro: any =[]
  fornecedor: any =[]
  cliente: any =[]

  constructor(
    private router: Router, private route: ActivatedRoute,
    private construcaoService: ConstrucaoService,
    private fornecedorService: FornecedorService,
    private engenheiroService: EngenheiroService,
    private arquitetoService: ArquitetoService,
    private clienteService: ClienteService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.construcaoService.readById(id).subscribe(construcao => {
      this.construcao = construcao
    })

    this.fornecedorService.readById(this.construcao.fornecedores).subscribe(fornecedor => {
      this.fornecedor = fornecedor
    })

    this.clienteService.readById(this.construcao.cliente).subscribe(cliente => {
      this.cliente = cliente
    })

    this.engenheiroService.readById(this.construcao.engenheiro).subscribe(engenheiro => {
      this.engenheiro = engenheiro
    })

    this.arquitetoService.readById(this.construcao.arquiteto).subscribe(arquiteto => {
      this.arquiteto = arquiteto
    })

  }
  update(): void{
    this.construcaoService.update(this.construcao).subscribe(() => {
      this.construcaoService.showMessage('Construção Alterada com sucesso')
      this.router.navigate(['/construcao'])
  })
  }
  cancel(): void{
    this.router.navigate(['/construcao'])
  }
}
