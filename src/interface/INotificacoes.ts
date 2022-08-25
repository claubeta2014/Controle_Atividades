export enum TipoNotif{
    SUCESSO,
    ERRO,
    ATENCAO 
}

export interface INotificacoes{
    titulo: string
    texto: string
    tipo: TipoNotif
    id: number 

}