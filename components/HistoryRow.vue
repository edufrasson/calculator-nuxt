<script setup lang="ts">
interface Props{
  expression: string
  result: string | number
}

defineProps<Props>()
</script>
<template>
  <div class="w-full h-20 bg-[#244184] rounded-lg text-xl p-2 text-white cursor-pointer">
    <div>
      {{ expression}}
    </div>
    <div>
      Resultado: {{ result }}
    </div>
  </div>
</template>