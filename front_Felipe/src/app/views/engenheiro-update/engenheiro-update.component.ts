import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EngenheiroService } from './../../services/engenheiro.service';

@Component({
  selector: 'app-engenheiro-update',
  templateUrl: './engenheiro-update.component.html',
  styleUrls: ['./engenheiro-update.component.css']
})
export class EngenheiroUpdateComponent implements OnInit {

  engenheiro: any = {}
  id = this.route.snapshot.paramMap.get('id')
  constructor(private router: Router, 
    private engenheiroService: EngenheiroService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.engenheiroService.readById(this.id).subscribe(engenheiro => {
      this.engenheiro = engenheiro
    })
  }
  update(){
    this.engenheiroService.update(this.engenheiro).subscribe(()=> {
      this.engenheiroService.showMessage(this.engenheiro.nome + ' atualizado com sucesso')
      this.router.navigate(['/engenheiro-read'])

    })
  }
  cancel(){
    this.router.navigate(['/engenheiro-read'])
  }

}
