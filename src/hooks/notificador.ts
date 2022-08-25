import { TipoNotif } from "@/interface/INotificacoes"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/tp-mutacoes"

type Notificador ={
    notificar: (tipo: TipoNotif, titulo: string, texto: string ) => void
}

export default(): Notificador =>{
    const notificar= (tipo: TipoNotif, titulo: string, texto: string ): void => {
        store.commit(NOTIFICAR, {
            titulo,
            texto,
            tipo
        })
    }
    return {
        notificar
    }
}