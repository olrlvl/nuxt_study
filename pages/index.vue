<script setup lang="ts">
const todoList = ref<string[]>([]);
const text = ref<string>("");
</script>
<template>
    <main class="bg-green-600/50 w-full h-screen overflow-auto">
        <section class="w-full h-full flex justify-center p-24">
            <div class="bg-white w-[600px] h-[400px] shadow-modal-default flex flex-col p-6 rounded">
                <div class="flex items-center gap-2">
                    <p class="text-mainTitle font-bold">Make TodoList</p>
                    <!-- 완료된 항목 삭제 -->
                    <div class="w-8 h-8 bg-purple-400 ml-auto cursor-pointer rounded-lg"></div>
                    <!-- 전체 삭제 -->
                    <div class="w-8 h-8 bg-green-400 cursor-pointer rounded-lg"></div>
                </div>
                <hr class="mt-2" />
                <!-- Input -->
                <BaseInput layout="mt-2" v-model="text" input-type="text" place-holder="할일을 입력해주세요 :)" />

                {{ text }}
            </div>
        </section>
    </main>
</template>
