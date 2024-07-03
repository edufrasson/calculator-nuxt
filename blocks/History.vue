<script setup lang="ts">
const { $storage } = useNuxtApp()
import HistoryRow from '~/components/HistoryRow.vue'
import { Icon } from '@iconify/vue'
import { getFromStorage } from '~/functions/storage'


const historyList = getFromStorage($storage)
</script>
<template>
  <div class="w-96 flex flex-col gap-4 py-3 overflow-y-auto bg-[#1F305E]">
    <div class="flex justify-between items-center pt-4">
      <div class="w-full text-xl text-white">Histórico de Cálculos</div>
      <NuxtLink to="/calculator">
        <Icon
          class="size-6 cursor-pointer text-[#c74f38]"
          icon="bx:log-out"
        />
      </NuxtLink>
    </div>

    <HistoryRow
      v-for="history in historyList"
      :expression="history.expression"
      :result="history.result"
    />
  </div>
</template>
