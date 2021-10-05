import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {ListaProdutosComponent} from './produtos/lista-produtos/lista-produtos.component';
import {AdicionarProdutosComponent} from './produtos/adicionar-produtos/adicionar-produtos.component';
import {CarrinhoComponent} from './carrinho/carrinho.component';
import {ConfiguracoesComponent} from './configuracoes/configuracoes.component';
import {PerfilComponent} from './perfil/perfil.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'produtos', component: ProdutosComponent, children: [
      {path: '', redirectTo: 'produtos', pathMatch: 'full'},
      {path: 'lista', component: ListaProdutosComponent},
      {path: 'adicionar', component: AdicionarProdutosComponent },
    ]},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'configuracoes', component: ConfiguracoesComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
