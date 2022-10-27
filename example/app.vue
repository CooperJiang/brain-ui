<template>
  <BrainButtonGroup>
    <BrainButton size='small' @click="hanlderClick"> button </BrainButton>
    <BrainButton size='small' type='primary'> button </BrainButton>
    <BrainButton size='small' type='success'> button </BrainButton>
    <BrainButton size='small' type='danger'> button </BrainButton>
    <BrainButton size='small' type='warning'> button </BrainButton>
    <BrainButton size='small' type='info'> button </BrainButton>
  </BrainButtonGroup>

  <br/>
  <BrainButton >按钮尺寸</BrainButton>
  <BrainButton size="medium">按钮尺寸</BrainButton>
  <BrainButton size="small">按钮尺寸</BrainButton>
  <BrainButton size="mini">按钮尺寸</BrainButton>
  <BrainButton size="tiny">按钮尺寸</BrainButton>
  <br/>

  <BrainButton plain type="primary">朴素按钮</BrainButton>
  <BrainButton round type="primary">椭圆</BrainButton>
  <BrainButton disabled type="primary">禁止</BrainButton>
  <BrainButton circle type="primary">圆</BrainButton>
  
</template>


<script lang="ts" setup>
import { ref } from 'vue';
  function hanlderClick(evt) {
    console.log('[ 123 ] >', 123)
  }
</script> 