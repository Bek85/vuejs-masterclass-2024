<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ToastViewport, type ToastViewportProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

interface Props extends ToastViewportProps {
  class?: HTMLAttributes['class']
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom-right'
})

const delegatedProps = computed(() => {
  const { class: _, position: __, ...delegated } = props
  return delegated
})

const positionClasses = computed(() => {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
  }
  return positions[props.position]
})
</script>
<template>
  <ToastViewport v-bind="delegatedProps" :class="cn(
    'fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px]',
    positionClasses,
    props.class
  )" />
</template>
