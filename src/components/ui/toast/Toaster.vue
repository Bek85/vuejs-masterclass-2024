<script setup lang="ts">
import { isVNode } from 'vue'
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '.'
import { useToast } from './use-toast'

const { toasts } = useToast()

// Add position prop
withDefaults(defineProps<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
}>(), {
  position: 'bottom-right'
})
</script>
<template>
  <ToastProvider>
    <ToastViewport :position="position" />
    <Toast v-for="toast in toasts" :key="toast.id" v-bind="toast">
      <div class="grid gap-1">
        <ToastTitle v-if="toast.title"> {{ toast.title }} </ToastTitle>
        <template v-if="toast.description">
          <ToastDescription v-if="isVNode(toast.description)">
            <component :is="toast.description" />
          </ToastDescription>
          <ToastDescription v-else> {{ toast.description }} </ToastDescription>
        </template>
        <ToastClose />
      </div>
      <component :is="toast.action" />
    </Toast>
  </ToastProvider>
</template>
