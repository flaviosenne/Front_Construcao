import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

import { ArquitetoService } from './../../services/arquiteto.service';

@Component({
  selector: 'app-arquiteto',
  templateUrl: './arquiteto.component.html',
  styleUrls: ['./arquiteto.component.css']
})
export class ArquitetoComponent implements OnInit {

  arquiteto: any = {
    nome:"",
		cpf: "",
		cau:"",
	  telefone:"",
	  endereco:"",
	  email:""
  }

  
  constructor(private arquitetoService: ArquitetoService,
     private route: Router) { }

  tipo: String = ''
  ngOnInit(): void {
  }
  
  salvar(): void{
      this.arquitetoService.create(this.arquiteto).subscribe(()=> {
        this.arquitetoService.showMessage(this.arquiteto.nome + ' cadastrado com sucesso')
        this.route.navigate(['/arquiteto-read'])
      })

  }

  cancel():void{
    this.route.navigate(['/arquiteto-read'])
  }

}
