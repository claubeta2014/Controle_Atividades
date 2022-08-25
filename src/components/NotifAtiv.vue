<template>
    <div class="notificacoes">
        <article class="message" :class="contexto[notificacao.tipo]"
        v-for="notificacao in notificacoes" :key="notificacao.id">
            <div class="message-header">{{notificacao.titulo}}</div>
            <div class="message-body">{{notificacao.texto}}</div>
        </article>
    </div>
</template>
<script lang="ts">
import { TipoNotif } from '@/interface/INotificacoes';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'NotifAtiv',
    data(){
        return {
            contexto: {
                [TipoNotif.SUCESSO]: 'is-success',
                [TipoNotif.ERRO]: 'is-danger',
                [TipoNotif.ATENCAO]: 'is-warning'
            }
        }
        
    },
    setup() {
        const store = useStore()
        return {
            notificacoes: computed(() => store.state.notificacoes)
        }
    }
})

</script>

<style scoped>
 .notificacoes {
     position: absolute;
     right: 0;
     width: 300px;
     padding: 8px;
     z-index: 150;
 }
</style>