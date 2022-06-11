import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ClienteInserirComponent } from "./clientes/cliente-inserir.component"
import { ClienteListaComponent } from "./clientes/cliente-lista/cliente-lista.component"

const routes: Routes = [
    // cada rota é um json
    //sempre q precisar de uma nova rota add aqui
    //localhost:4200
    {path: '', component: ClienteListaComponent},
    //localhost:4200/criar
    {path: 'criar', component: ClienteInserirComponent},
    //localhost:4200/editar/321
    {path: 'editar/:idCliente', component: ClienteInserirComponent},
]


@NgModule({
    imports: [
        //Usar rotas declaradas la em cima
        RouterModule.forRoot(routes)
    ],
    exports: [
        // garante q outros tenham acesso ao RouterModule? ex routerLink?
        RouterModule
    ]
})
export class AppRoutingModule {

}