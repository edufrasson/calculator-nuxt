<script setup lang="ts">
interface Props {
  isOperator?: boolean
}

withDefaults(defineProps<Props>(), { 
  isOperator: false 
})
</script>

<template>
  <div
    :class="['size-16 flex items-center justify-center text-2xl rounded cursor-pointer transition-all', isOperator ? 'bg-[#c74f38] hover:bg-[#743428] text-white': 'bg-slate-200 hover:bg-slate-400']"
  >
    <slot />
  </div>
</template>
