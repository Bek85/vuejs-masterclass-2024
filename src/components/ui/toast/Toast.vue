<script setup lang="ts">
import { ToastRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
import { toastVariants } from '.'
import type { ToastProps } from '.'
import { computed } from 'vue'

const props = defineProps<ToastProps>()

const animationClass = computed(() => {
  const position = props.position || 'bottom-right'
  const animations = {
    'top-left': 'animate-in data-[state=open]:slide-in-from-left-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-full data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-left-full',
    'top-right': 'animate-in data-[state=open]:slide-in-from-right-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-right-full',
    'bottom-left': 'animate-in data-[state=open]:slide-in-from-left-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-bottom-full',
    'bottom-right': 'animate-in data-[state=open]:slide-in-from-right-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-bottom-full',
    'top-center': 'animate-in data-[state=open]:slide-in-from-top-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-full data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-top-full',
    'bottom-center': 'animate-in data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-bottom-full',
  }
  return animations[position]
})
</script>
<template>
  <ToastRoot v-bind="$props" :class="cn(toastVariants({ variant: props.variant }), animationClass, props.class)">
    <slot />
  </ToastRoot>
</template>
