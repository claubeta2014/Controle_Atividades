import { TipoNotif } from "@/interface/INotificacoes"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/tp-mutacoes"

export const notifMix = {
    methods: {
        notificar(tipo: TipoNotif, titulo: string, texto: string): void {
            store.commit(NOTIFICAR,
                { titulo, texto, tipo }
            )
        }
    }
}