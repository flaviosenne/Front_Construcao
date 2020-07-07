import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from './../../services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedor: any = {}
  constructor(private route: ActivatedRoute,
    private fornecedorS: FornecedorService,
    private router: Router) { }

  ngOnInit(): void {
    this.fornecedorS.readById(
      this.route.snapshot.paramMap.get('id')
    ).subscribe(fornecedor => {
      this.fornecedor =fornecedor
    })
  }
  update(){
    this.fornecedorS.update(this.fornecedor).subscribe(()=> {
      this.fornecedorS.showMessage('Fornecedor Atualizado com sucesso')
      this.router.navigate(['/fornecedor-read'])
    })
  }
  cancel(){
    this.router.navigate(['/fornecedor-read'])
  }

}
