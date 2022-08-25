import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AtiviCadastrada from '../visualizar/AtiviCadastrada.vue';
import ProjetosFeitos from '../visualizar/ProjetosFeitos.vue';
import FormulariosProj from '../visualizar/Projetos/FormulariosProj.vue';
import ListaAtiv from '../visualizar/Projetos/ListaAtiv.vue';

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'AtividadesCadastradas',
    component: AtiviCadastrada
},
{
    path: '/projetos',
    component: ProjetosFeitos,
    children: [

        {
            path: '',
            name: 'Projetos',
            component: ListaAtiv
        },
        {
            path: 'novo',
            name: 'Novo Projeto',
            component: FormulariosProj
        },
        {
            path: ':id',
            name: 'Editar o projeto',
            component: FormulariosProj,
            props: true
        },
    ]

}
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador; 