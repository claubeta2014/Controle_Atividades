<template>
    <div class="box has-text-weight-bold">
   <slot>
   </slot>
  </div>    
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent( {
    name: 'BoxAtiv'
})
</script> 

<style scoped>
.box {
    background: rgb(254, 254, 254);
    

}
.columns {
    background: rgb(185, 25, 25);
}

</style>