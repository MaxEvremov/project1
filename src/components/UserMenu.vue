<template>
  <div class="userMenu">
      <div class="userInfo">
            <p class="values">Имя</p>
            <p class="values">{{user.forname}}</p>
            <p class="values">Фамилия</p>
            <p class="values">{{user.lastname}}</p>
            <p class="values">Род занятий</p>
            <p class="values">{{user.life}}</p>
          <my-button @click="$emit('verif')">Выход</my-button>
          <my-button @click="changeData"> изменить данные</my-button>
      </div>
      <div class="links">
        <my-button class="userbutton"><router-link style="text-decoration: none; color: black" to="/">Перейти в главное меню</router-link></my-button>
        <my-button class="userbutton"><router-link style="text-decoration: none; color: black" to="/tasks">перейти в tasks</router-link></my-button>
        <my-button class="userbutton"><router-link style="text-decoration: none; color: black" to="/information">перейти к информации</router-link></my-button>
        <my-button class="userbutton"><router-link style="text-decoration: none; color: black" to="/gridtesting">WIKImotors</router-link></my-button>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Array,
      required: true
    }
  },
  methods: {
    userInformation () {
      console.log(this.user)
    }
  }
}
</script>
<style>
.userMenu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: solid 1px black ;
  border-radius: 10px;
  width: 100%;
  height: 190px;
  background-color: rgb(250, 205, 120);
}
.userbutton {
  display: grid;
  align-items: left;
}
.userInfo {
  min-width: 300px;
  max-width: 350px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 20px;
  padding: 5px;
  gap: 5px;
}
.values {
  max-height: 8px;
  display: grid;
  min-height: 40px;
  background-color: rgb(125, 165, 165);
  margin: 0ch;
  border-radius: 10px;
  align-items: center;
  color: black;
}
</style>
