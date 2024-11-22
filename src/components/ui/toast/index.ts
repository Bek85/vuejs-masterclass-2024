import type { ToastRootProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

export { default as Toast } from './Toast.vue';
export { default as ToastAction } from './ToastAction.vue';
export { default as ToastClose } from './ToastClose.vue';
export { default as ToastDescription } from './ToastDescription.vue';
export { default as Toaster } from './Toaster.vue';
export { default as ToastProvider } from './ToastProvider.vue';
export { default as ToastTitle } from './ToastTitle.vue';
export { default as ToastViewport } from './ToastViewport.vue';
export { toast, useToast } from './use-toast';

import { cva, type VariantProps } from 'class-variance-authority';

export const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
        success: 'border-green-500 bg-green-500 text-white',
        warning: 'border-yellow-500 bg-yellow-500 text-white',
        error: 'border-red-500 bg-red-500 text-white',
        info: 'border-blue-500 bg-blue-500 text-white',
        loading: 'border-gray-500 bg-gray-500 text-white',
      },
      position: {
        'top-left': '',
        'top-right': '',
        'bottom-left': '',
        'bottom-right': '',
        'top-center': '',
        'bottom-center': '',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'bottom-right',
    },
  },
);

type ToastVariants = VariantProps<typeof toastVariants>;

export interface ToastProps extends ToastRootProps {
  class?: HTMLAttributes['class'];
  variant?: ToastVariants['variant'];
  position?: ToastVariants['position'];
  onOpenChange?: ((value: boolean) => void) | undefined;
}
