<script setup lang="ts">
import type { Todo } from "@/types/Todo";
import { onMounted, ref, computed } from "vue";
import TodoActionButton from "./TodoActionButton.vue";
import { getDarkColors, getColorFromTodoStatus } from "@/types/Colors";

const props = defineProps<{
  todo: Todo;
}>();
const isHoveringOn = ref(false);

const onHover = () => {
  isHoveringOn.value = false;
};

const tagsWithColors = computed(() =>
  props.todo.tags.map((tag) => {
    return {
      tag,
      color: getDarkColors(tag),
    };
  })
); 

const todoStatus = ref<Todo['status']>('completed'); 
const handleStatusChange = (newValue: Todo['status']) => {
    todoStatus.value = newValue;
} 


const isEditing = ref(false);


const hanldeRemove = () => { 

}
</script>

<template>
  <div
    class="bg-white flex flex-row rounded-md shadow-indigo-500 shadow-lg"
    @mouseover="onHover"
  >
    <div class="border-r-4 border-red-500 px-3 py-2">
      <img
        class="rounded-full w-min border-4 border-indigo-700 border-w"
        src="../../assets/default_avatar.png"
        alt="User image"
      />
    </div>
    <div class="content flex flex-col w-full">
      <div class="px-4">
        <h3 class="text-indigo-700 text-lg font-extrabold">
          {{ props.todo.title }}
        </h3>
        <p class="text-indigo-400 text-md">
          {{ props.todo.content }}
        </p>
      </div>
      <div class="status-and-select absolute justify-self-start self-end px-3 py-2"> 
          <div class="status text-white font-semibold capitalize rounded-md py-1 px-2" v-show="!isEditing" :style="{
            backgroundColor: getColorFromTodoStatus(todoStatus)
          }">
            {{todoStatus}}
          </div>
          <select class="px-2 py-1" v-show="isEditing" v-model="todoStatus">
            <option value="not_started"> 
                Not started
            </option>
            <option value="doing"> 
                Doing
            </option>
            <option value="completed"> 
                Completed
            </option>
          </select>
      </div>
      <div
        class="bottom-info flex flex-row items-center justify-between justify-self-end h-min w-full mt-auto"
      >
        <!-- <div> 
          {{JSON.stringify(tagsWithColors)}}
        </div> -->
        <div
          class="tag-contents flex flex-row pl-3 gap-1"
          v-show="tagsWithColors && tagsWithColors.length"
        >
          <template v-for="tagItem in tagsWithColors">
            <div
              class="tag-item px-2 py-1 border-2 rounded-md text-white font-bold"
              :style="{
                backgroundColor: tagItem.color,
              }"
            >
              {{ tagItem.tag }}
            </div>
          </template>
        </div>
        <div class="action-buttons flex flex-row gap-3 ml-auto px-2 py-2">
          <TodoActionButton v-show="!isEditing" :text="'Edit'" @click="isEditing = true"></TodoActionButton>
          <TodoActionButton v-show="isEditing" :text="'Done'" @click="isEditing = false"></TodoActionButton>
          <TodoActionButton
            :text="'Remove'"
            class="hover:bg-red-400"
          ></TodoActionButton>
        </div>
      </div>
    </div>
  </div>
</template>
