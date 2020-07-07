import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// observable: responssável por requisições HTTP
import { HttpClientModule} from '@angular/common/http'

// Modulos de Terceiros
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule }  from '@angular/material/sidenav';
import {MatSnackBarModule }  from '@angular/material/snack-bar';
import { MatInputModule} from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule } from '@angular/forms'

// Componentes gerado para navegação 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArquitetoComponent } from './views/arquiteto/arquiteto.component';
import { NavComponent } from './components/nav/nav.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArquitetoComponent,
    FornecedorCoponent,
    ProjetoCreateComponent,
    ConstrucaoCreateComponent,
    ConstrucaoComponent,
    ClienteComponente,
    NavComponent,
    EngenheiroComponent,
    ProjetoComponent,
    ConstrucaoDetailsComponent,
    ProjetoDetailsComponent,
    ArquitetoReadComponent,
    ArquitetoUpdateComponent,
    EngenheiroReadComponent,
    EngenheiroUpdateComponent,
    FornecedorUpdateComponent,
    FornecedorReadComponent,
    ClienteReadComponent,
    ClienteUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
