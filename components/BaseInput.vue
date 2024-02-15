<!-- 공통 기본 인풋 -->
<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

const props = withDefaults(
    defineProps<{
        modelValue?: string; // Model 데이터
        value?: InputHTMLAttributes["value"]; // Local 데이터
        inputType?: string; // 인풋 타입
        placeHolder?: string; // 인풋 플레이스 홀더
        maxLength?: number; // 인풋 최대 길이 제한
        autoCompleteType?: string; // 자동완성 타입
        labelTitle?: string; // 라벨 이름
        disable?: boolean; // 인풋 비활성화 상태
        error?: boolean; // 에러 상태
        focus?: boolean; // 포커스 상태
        asterisk?: boolean; // 강조 * 텍스트
        layout?: string; // 인풋 레이아웃(스타일) 설정
        labelStyle?: string; // 라벨 스타일
    }>(),
    {
        labelTitle: "",
        disable: false,
        error: false,
        focus: false,
        asterisk: false,
        layout: "flex-col",
        labelStyle: "",
        autoCompleteType: undefined,
    }
);

const emit = defineEmits(["update:modelValue", "update:focus", "enterUp", "keyUp"]);

const updateValue = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    emit("update:modelValue", target.value);
};

const enterUp = (event: KeyboardEvent) => {
    emit("enterUp", event);
};

const keyUp = (event: KeyboardEvent) => {
    emit("keyUp", event);
};
</script>
<template>
    <div class="flex" :class="props.layout">
        <!-- 인풋 라벨 -->
        <p v-if="labelTitle !== ''" class="input-text-label whitespace-nowrap" :class="`${[props.layout === 'flex-col' ? 'mb-1' : '']} ${props.labelStyle}`">
            {{ labelTitle }} <strong v-if="asterisk === true" class="text-red-100">*</strong>
        </p>
        <!-- 폼 -->
        <div class="relative w-full">
            <!-- 인풋 박스 -->
            <input
                :type="inputType"
                class="input-default placeholder:text-gray-300"
                :class="`${error === true ? 'border border-red-100' : ''} ${focus === true ? 'border border-sub' : ''}`"
                @input="(event: Event) => updateValue(event as InputEvent)"
                @focus="emit('update:focus', true)"
                @blur="emit('update:focus', false)"
                @keyup.enter="enterUp"
                @keyup="keyUp"
                :autocomplete="autoCompleteType"
                :maxlength="maxLength"
                :placeholder="placeHolder"
                :disabled="disable"
            />
        </div>
    </div>
</template>
