<script setup lang="ts">
const { $storage } = useNuxtApp()
import { Icon } from '@iconify/vue'
import { saveInStorage } from '~/functions/storage'
const display = ref<string>('')

function calculateExpression() {
  if (!display.value) {
    return
  }

  let result = eval(display.value)

  if (isNaN(result) || !isFinite(result)) {
    return (display.value = 'Error')
  }

  saveInStorage({ expression: display.value, result }, $storage)

  display.value = String(result)
}

function handleClick(value: string) {
  if (!display.value && value === '0') {
    return
  }

  display.value = display.value?.concat(value)
}
</script>

<template>
    <div
    class="w-96 flex flex-col items-center gap-y-6 px-4 rounded bg-[#89ab37]"
  >
    <div class="w-full flex justify-end pt-4">
      <NuxtLink to="/history">
        <Icon
          class="size-6 cursor-pointer text-[#c74f38]"
          icon="bx:history"
        />
      </NuxtLink>
    </div>

    <div
      class="w-full h-20 overflow-x-auto p-2 text-4xl rounded bg-[#E2E8F0] text-black flex items-center"
    >
      {{ display }}
    </div>
    <div class="grid grid-cols-4 grid-rows-3 gap-4 w-72 pb-6">
      <Square @click="handleClick('1')"> 1 </Square>
      <Square @click="handleClick('2')"> 2 </Square>
      <Square @click="handleClick('3')"> 3 </Square>
      <Square
        @click="handleClick('/')"
        is-operator
      >
        /
      </Square>

      <Square @click="handleClick('4')"> 4 </Square>
      <Square @click="handleClick('5')"> 5 </Square>
      <Square @click="handleClick('6')"> 6 </Square>
      <Square
        @click="handleClick('*')"
        is-operator
      >
        *
      </Square>

      <Square @click="handleClick('7')"> 7 </Square>
      <Square @click="handleClick('8')"> 8 </Square>
      <Square @click="handleClick('9')"> 9 </Square>
      <Square
        @click="handleClick('-')"
        is-operator
      >
        -
      </Square>

      <Square @click="handleClick('0')"> 0 </Square>
      <Square @click="display = ''"> C </Square>
      <Square @click="calculateExpression()"> = </Square>
      <Square
        @click="handleClick('+')"
        is-operator
      >
        +
      </Square>
    </div>
  </div>
</template>
