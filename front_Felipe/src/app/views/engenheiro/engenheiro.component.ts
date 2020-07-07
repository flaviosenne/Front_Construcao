import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { EngenheiroService} from '../../services/engenheiro.service'
import { ArquitetoService } from '../../services/arquiteto.service';
import { FornecedorService } from '../../services/fornecedor.service';



@Component({
  selector: 'app-engenheiro',
  templateUrl: './engenheiro.component.html',
  styleUrls: ['./engenheiro.component.css']
})
export class EngenheiroComponent implements OnInit {


  engenheiro: any ={
    nome:"",
		cpf: "",
		crea:"",
	  telefone:"",
	  endereco:"",
	  email:""
  }

  
  
  constructor(private route: Router, 
  private engenheiroService: EngenheiroService) { }

  ngOnInit(): void {
  
    
  }

  salvar(): void{
    this.engenheiroService.create(this.engenheiro).subscribe(() => {
        this.engenheiroService.showMessage('Engenheiro adicionado com sucesso')
        this.route.navigate(['/engenheiro-read'])
    })
  }

  cancel():void{
    this.route.navigate(['/engenheiro-read'])
  }

}
