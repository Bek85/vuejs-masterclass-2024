<script setup lang="ts">
import { login } from '@/utils/authQueries';
import { debouncedWatch } from '@vueuse/core';

const { serverError, handleServerError, realtimeErrors, handleLoginForm } = useFormErrors();

const formData = ref({
  email: '',
  password: ''
})

const router = useRouter()

debouncedWatch(formData, () => handleLoginForm(formData.value), {
  debounce: 1000,
  deep: true
});

const signin = async () => {
  const result = await login(formData.value);

  if (!result?.error) router.push('/');
  else handleServerError(result.error);
};
</script>
<template>
  <div class="mx-auto flex w-full justify-center items-center p-10 text-center -mt-20 min-h-[90vh]">
    <Card class="max-w-sm w-full mx-auto">
      <CardHeader>
        <CardTitle class="text-2xl"> Login </CardTitle>
        <CardDescription> Login to your account </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-col gap-4 mb-4 justify-center items-center">
          <Button variant="outline" class="w-full"> Register with Google </Button>
          <Separator label="Or" />
        </div>
        <form class="grid gap-4" @submit.prevent="signin">
          <div class="grid gap-2">
            <Label id="email" class="text-left">Email</Label>
            <Input type="email" v-model="formData.email" placeholder="johndoe19@example.com" required
              :class="{ 'border-red-500': serverError }" />
            <ul v-if="realtimeErrors?.email.length" class="text-sm text-left text-red-500">
              <li v-for="error in realtimeErrors.email" class="list-disc" :key="error">{{ error }}</li>
            </ul>
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label id="password">Password</Label>
              <a href="#" class="inline-block ml-auto text-xs underline"> Forgot your password? </a>
            </div>
            <Input id="password" type="password" v-model="formData.password" autocomplete required
              :class="{ 'border-red-500': serverError }" />
            <ul v-if="realtimeErrors?.password.length" class="text-sm text-left text-red-500">
              <li v-for="error in realtimeErrors.password" class="list-disc" :key="error">{{ error }}</li>
            </ul>
          </div>
          <ul v-if="serverError" class="text-sm text-left text-red-500">
            <li class="list-disc">{{ serverError }}</li>
          </ul>
          <Button type="submit" class="w-full"> Login </Button>
        </form>
        <div class="mt-4 text-sm text-center"> Don't have an account? <RouterLink to="/register" class="underline">
            Register </RouterLink>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
