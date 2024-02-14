<script setup lang="ts">
const todoList = ref<string[]>([]);
const text = ref<string>("");
</script>
<template>
    <main class="bg-green-600/50 w-full h-screen overflow-auto">
        <section class="w-full h-full flex justify-center p-24">
            <div class="bg-white w-[600px] h-[400px] shadow-modal-default flex flex-col p-6">
                <p class="text-mainTitle font-bold">Make TodoList</p>
                <hr class="mt-2" />
            </div>
        </section>
    </main>
</template>
