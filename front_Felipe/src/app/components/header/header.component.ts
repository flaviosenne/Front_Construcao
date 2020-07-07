import { Component, OnInit } from '@angular/core';
import { ProjetoService } from 'src/app/services/projeto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private projetoService: ProjetoService) { }
  prop = 'nav'
  ngOnInit(): void {
  }

  toggle(){
     if(this.prop == 'none'){
      this.prop = 'nav'
    }else{
      this.prop = 'none'
    }
  }
}

