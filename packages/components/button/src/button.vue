<template>
  <button>
  	<slot>{{p.size}}||{{p.type}}</slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { buttonProps } from './types'

export default defineComponent({
    name: 'BrainButton',
    props: buttonProps,
    setup(props){
        const p = computed(()=>{
            const { size= 'meduim', type = 'text' } = props
            return { size, type }
        })
        return { p  }
    }
})
</script>