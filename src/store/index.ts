
import IProjeto from "@/interface/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONAR_PROJETO, ALTERAR_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./tp-mutacoes";
import { INotificacoes } from "@/interface/INotificacoes";

interface EstadoAplicacao {
    projetos: IProjeto[],
    notificacoes: INotificacoes[]
}
export const key: InjectionKey<Store<EstadoAplicacao>> = Symbol()
export const store = createStore<EstadoAplicacao>({
    state: {
        projetos: [],
        notificacoes: []
    },
    mutations: {
        [ADICIONAR_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERAR_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [NOTIFICAR](state, novaNotificacao: INotificacoes) {
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)
            setTimeout(() => {
                state.notificacoes = 
                state.notificacoes.filter (notificacao => notificacao.id !=novaNotificacao.id)
            }, 3000)
        }
    }
})

export function useStore(): Store<EstadoAplicacao> {
    return vuexUseStore(key)

}