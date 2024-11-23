<script setup lang="ts">
import {
  LogOut,
  User,
  Search
} from 'lucide-vue-next';

</script>
<template>
  <nav class="h-16 border-b bg-muted/40 flex justify-between items-center px-6">
    <form class="w-full max-w-96 relative">
      <iconify-icon icon="lucide:search" class="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <!-- <Search class="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" /> -->
      <Input type="text" placeholder="Search..." class="pl-8" />
    </form>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User class="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut class="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
</template>
