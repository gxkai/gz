<script lang="ts" setup>
import { useHelloWorld } from '@/store/helloWorld'

const store = useHelloWorld()
const { message } = store
</script>

<template>
  <div class="flex place-items-center h-screen w-full justify-center">
    <div>
      <Button prefix="test" type="primary">
        Button
      </Button>
    </div>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
