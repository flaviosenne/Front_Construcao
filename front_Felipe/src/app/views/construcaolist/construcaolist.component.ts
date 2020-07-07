import { Component, OnInit } from '@angular/core';

import { ConstrucaoService } from 'src/app/services/construcao.service';

@Component({
  selector: 'app-construcaolist',
  templateUrl: './construcaolist.component.html',
  styleUrls: ['./construcaolist.component.css']
})
export class ConstrucaoComponent implements OnInit {

  construcao: any[]  

  constructor(private construcaoService: ConstrucaoService) { }

  ngOnInit(): any {
    this.construcaoService.read().subscribe(construcao => {
      console.log(construcao)
      this.construcao = construcao
    })
   
  }
  delete(id): void {
    this.construcaoService.delete(id).subscribe(()=> {
      this.construcaoService.showMessage('Excluido com sucesso')
      this.ngOnInit()
    })
  }

}
