import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArquitetoService } from './../../services/arquiteto.service';

@Component({
  selector: 'app-arquiteto-update',
  templateUrl: './arquiteto-update.component.html',
  styleUrls: ['./arquiteto-update.component.css']
})
export class ArquitetoUpdateComponent implements OnInit {

  arquiteto: any = { }
  constructor(private router: Router,
    private route: ActivatedRoute,
     private arquitetoS: ArquitetoService) { }
     
    id = this.route.snapshot.paramMap.get('id')
     ngOnInit(): void {
    this.arquitetoS.readById(this.id).subscribe(arquiteto => [
      this.arquiteto = arquiteto
    ])
  }
  update(){
    this.arquitetoS.update(this.id, this.arquiteto).subscribe(()=>{
      this.arquitetoS.showMessage(this.arquiteto.nome +' alterado com sucesso')
      this.router.navigate(['/arquiteto-read'])
      
    })
  }
  
  cancel():void{
    this.router.navigate(['/arquiteto-read'])
  }
}
