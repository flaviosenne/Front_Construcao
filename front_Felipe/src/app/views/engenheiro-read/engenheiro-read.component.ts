import { Component, OnInit } from '@angular/core';
import { EngenheiroService } from './../../services/engenheiro.service';

@Component({
  selector: 'app-engenheiro-read',
  templateUrl: './engenheiro-read.component.html',
  styleUrls: ['./engenheiro-read.component.css']
})
export class EngenheiroReadComponent implements OnInit {

  engenheiro: any = []
  constructor(private engenheiroService: EngenheiroService) { }

  ngOnInit(): void {
    this.engenheiroService.read().subscribe(engenheiro => {
      this.engenheiro = engenheiro
    })
  }

  delete(id){
    this.engenheiroService.delete(id).subscribe(()=>{
      this.engenheiroService.showMessage('Engenheiro removido com sucesso')
      this.ngOnInit()
    })
  }

}
