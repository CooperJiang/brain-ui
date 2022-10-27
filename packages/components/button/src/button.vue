<template>
    <button class="br-button" :class="classList"  :type="nativeType" :autofocus="autoFocus" :disabled="disabled || loading" @click="handlerClick"><slot></slot></button>
  </template>

<script lang="ts" setup name="BrainButton">
import { computed, defineEmits  } from 'vue'
import { Props, Emits } from './button'

const props = defineProps(Props)
const emits = defineEmits(Emits)

const classList = computed(() => {
  const { type, size, round, plain, circle, disabled, nativeType, autoFocus, icon, loading } = props
  return [
    {
      [`br-button--${type}`]: type,
      [`br-button--${size}`]: size,
      [`is-disabled`]: disabled,
      [`is-loading`]: loading,
      [`is-round`]: round,
      [`is-plain`]: plain,
      [`is-circle`]: circle,
    }
  ]
})
function handlerClick (evt: MouseEvent): void {
    emits("click", evt)
  }
 
</script>
