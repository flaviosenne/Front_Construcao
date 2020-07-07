import { Component, OnInit } from '@angular/core';
import { ArquitetoService } from './../../services/arquiteto.service';

@Component({
  selector: 'app-arquiteto-read',
  templateUrl: './arquiteto-read.component.html',
  styleUrls: ['./arquiteto-read.component.css']
})
export class ArquitetoReadComponent implements OnInit {

  constructor(private arquiteto: ArquitetoService) { }

  arquitetos = []
  ngOnInit(): void {
    this.arquiteto.read().subscribe(arquiteto => {
      this.arquitetos = arquiteto
      console.log(arquiteto)
    })
  }
  delete(id){
    this.arquiteto.delete(id).subscribe(()=>{
      this.arquiteto.showMessage('Arquiteto removido com sucesso')
      this.ngOnInit()
    })
  }

}
