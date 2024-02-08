<script setup lang="ts">
const todoList = ref<string[]>([]);
const text = ref<string>("");

function addTodo() {
    todoList.value.push(text.value);
    text.value = "";
}

function removeTodo(index: number) {
    todoList.value.splice(index, 1);
}
</script>
<template>
    <main class="bg-black w-full h-screen overflow-auto flex jus">
        <div class="w-96 h-96 bg-white self-center"></div>
    </main>
</template>
