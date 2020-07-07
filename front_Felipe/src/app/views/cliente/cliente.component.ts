import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponente implements OnInit {

  cliente: any = {
    nome: "",
		cpf:"",
	  endereco:"",
	  telefone_1:"",
	  telefone_2:"",
	  email:"",
	  razao_social:"",
	  nome_fantasia:"",
	  cnpj:""
  }  

  constructor(private clienteService: ClienteService, private route: Router) { }

  ngOnInit(): void {
        
  }

  salvar(): void{
    this.clienteService.create(this.cliente).subscribe(() => {
        this.clienteService.showMessage('Cliente adicionado com sucesso')
        this.route.navigate(['/cliente-read'])
    })
    console.log('Certo')
  }

  cancel():void{
    this.route.navigate(['/cliente-read'])
  }

}
