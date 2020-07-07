import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArquitetoService } from '../../services/arquiteto.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProjetoService } from './../../services/projeto.service';
@Component({
  selector: 'app-projetodetails',
  templateUrl: './projetodetails.component.html',
  styleUrls: ['./projetodetails.component.css']
})
export class ProjetoDetailsComponent implements OnInit {

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

    const id = this.route.snapshot.paramMap.get('id')
    this.projetoService.readById(id).subscribe(projeto => {
      this.projeto = projeto
    })

    this.clienteService.read().subscribe(cliente => {
      this.cliente = cliente
    })


    this.arquitetoService.read().subscribe(arquiteto => {
      this.arquiteto = arquiteto
    })

  }
  update(): void{
    this.projetoService.update(this.projeto).subscribe(() => {
      this.projetoService.showMessage('Projeto alterado com sucesso')
      this.router.navigate(['/projeto'])
  })
  }
  cancel(): void{
    this.router.navigate(['/projeto'])
  }
}

