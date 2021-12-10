<template>
    <div id='buttonbar'>
        <my-button
            class="button"
            id="button"
            @click="$emit('newElement')"
            >
            Новый элемент
        </my-button>
        <my-button
            class="button"
            id="button"
            @click="$emit('sort')"
            >
            Отсортировать
        </my-button>
         <my-button
            class="button"
            id="button"
            @click="$emit('find')"
            >
            Поиск
        </my-button>
        <my-button
            class="button"
            id="button"
            >
            Сохранить всё
        </my-button>
        <my-button
            class="button"
            id="button"
            @click="$emit('deleteAll')"
            >
            Удалить всё
        </my-button>
    </div>
</template>

<style>
#buttonbar {
    border: solid 1px black ;
    border-radius: 20px;
    width: 680px;
    height: 40px;
    background-color: rgb(125, 165, 165);
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
}
</style>
