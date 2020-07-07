import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArquitetoComponent } from './views/arquiteto/arquiteto.component';
import { FornecedorCoponent } from './views/fornecedor/fornecedor.component';
import { EngenheiroComponent } from './views/engenheiro/engenheiro.component';
import { ConstrucaoCreateComponent } from './views/construcao/construcao.component';
import { ClienteComponente } from './views/cliente/cliente.component';
import { ProjetoComponent } from './views/projeto/projeto.component';
import { ConstrucaoComponent } from './views/construcaolist/construcaolist.component';
import { ConstrucaoDetailsComponent } from './views/construcaodetails/construcaodetails.component';
import { ProjetoCreateComponent } from './views/projetocreate/projetocreate.component';
import { ProjetoDetailsComponent } from './views/projetodetails/projetodetails.component';
import { ArquitetoReadComponent } from './views/arquiteto-read/arquiteto-read.component';
import { ArquitetoUpdateComponent } from './views/arquiteto-update/arquiteto-update.component';
import { EngenheiroReadComponent } from './views/engenheiro-read/engenheiro-read.component';
import { EngenheiroUpdateComponent } from './views/engenheiro-update/engenheiro-update.component';
import { FornecedorUpdateComponent } from './views/fornecedor-update/fornecedor-update.component';
import { FornecedorReadComponent } from './views/fornecedor-read/fornecedor-read.component';
import { ClienteReadComponent } from './views/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './views/cliente-update/cliente-update.component';
const routes: Routes = [
  {
    path: "",
    component: ClienteComponente
  },
  {
    path: "cliente-read",
    component: ClienteReadComponent
  },
  {
    path: "cliente-update/:id",
    component: ClienteUpdateComponent
  },
  {
    path: 'engenheiro',
    component: EngenheiroComponent
  },
  {
    path: 'engenheiro-read',
    component: EngenheiroReadComponent
  },
  {
    path: 'engenheiro-update/:id',
    component: EngenheiroUpdateComponent
  },
  {
    path: 'construcao-create',
    component: ConstrucaoCreateComponent
  },
  {
    path: 'construcao',
    component: ConstrucaoComponent
  },
  {
    path: 'construcao-details/:id',
    component: ConstrucaoDetailsComponent
  },
  {
    path: "fornecedor",
    component: FornecedorCoponent
  },
  {
    path: "fornecedor-read",
    component: FornecedorReadComponent
  },
  {
    path: "fornecedor-update/:id",
    component: FornecedorUpdateComponent
  },
  {
    path: 'projeto',
    component: ProjetoComponent
  },
  {
    path: 'projeto-create',
    component: ProjetoCreateComponent
  },
  {
    path: 'projeto-details/:id',
    component: ProjetoDetailsComponent
  },
  {
    path: 'arquiteto',
    component: ArquitetoComponent
  },
  {
    path: 'arquiteto-read',
    component: ArquitetoReadComponent
  },
  {
    path: 'arquiteto-update/:id',
    component: ArquitetoUpdateComponent
  },
  {
    path: 'cliente',
    component: ClienteComponente
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
