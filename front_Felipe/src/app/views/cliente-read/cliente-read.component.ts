import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../../services/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  cliente: any = []
  constructor(private clienteS: ClienteService  ) { }

  ngOnInit(): void {
    this.clienteS.read().subscribe(cliente => {
      this.cliente = cliente
    })
  }

  delete(id){
    this.clienteS.delete(id).subscribe(()=> {
      this.clienteS.showMessage('Cliente removido com sucesso')
      this.ngOnInit()
    })
  }
  

}
