import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente: any = {}
  constructor(private route: ActivatedRoute,
    private clienteS: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.clienteS.readById(
    this.route.snapshot.paramMap.get('id')
    ).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  update(){
    this.clienteS.update(this.cliente).subscribe(()=> {
      this.clienteS.showMessage('Cliente Alterado com sucesso')
      this.router.navigate(['/cliente-read'])
    })
  }
  cancel(){
    this.router.navigate(['/cliente-read'])

  }
}
