import { Component, OnInit } from '@angular/core';

import { ProjetoService } from 'src/app/services/projeto.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  projetos = []  

  constructor(private projetoService: ProjetoService) { }

  ngOnInit(): any {
    this.projetoService.read().subscribe(projetos => {
      console.log(projetos)
      this.projetos = projetos
    })
   
  }
  delete(id): void {
    this.projetoService.delete(id).subscribe(()=> {
      this.projetoService.showMessage('Excluido com sucesso')
      this.ngOnInit()
    })
  }

}
