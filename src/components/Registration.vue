<template>
  <div class="registrationMenu">
    <div class="userInfo">
      <p class="twinString">
        Для регистрации введите ваши данные
        </p>
      <p
        class="parameter">
        Имя
      </p>
      <my-input
        class="value"
        v-focus
        v-model="user.forname"
        type="text"
        placeholder="Введите имя">
      </my-input>
      <p
        class="parameter">
        Фамилия
      </p>
      <my-input
        class="value"
        v-model="user.lastname"
        type="text"
        placeholder="Введите фамилию">
      </my-input>
      <p
        class="parameter">
        Род деятельности
      </p>
      <my-input
        class="value"
        v-model="user.life"
        placeholder="Введите интересы">
      </my-input>
      <p
        class="parameter">
        Логин
      </p>
      <my-input
        class="value"
        v-model="user.login"
        type="text"
        placeholder="Введите логин">
      </my-input>
       <p
        class="parameter">
        Пароль
      </p>
      <my-input
        class="value"
        v-model="user.password"
        type="text"
        placeholder="Введите пароль">
      </my-input>
    </div>
    <div>
      <my-button
      @click="registration">
      Регистрация
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let user: {
      forname: '',
        lastname: '',
        life: '',
        login: '',
        password: ''
    }
  }
  // data () {
  //   return {
  //     user: {
  //       forname: '',
  //       lastname: '',
  //       life: '',
  //       login: '',
  //       password: ''
  //     }
  //   }
  // },
  // // methods: {
  // //   createUser () {
  // //     this.user.id = Date.now()
  // //     this.$emit('createUser', this.user)
  // //     this.user = {
  // //       forname: '',
  // //       lastname: '',
  // //       life: '',
  // //       login: '',
  // //       password: ''
  // //     }
  // //   }
  // // }
  // setup (props) {
  //   const{} = newUser(user)
  // }
}
</script>

<style scoped>
.registrationMenu {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.userInfo {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.twinString {
  background-color: rgb(250, 205, 120);
  display: grid;
  min-height: 40px;
  border-radius: 10px;
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 0ch;
  align-items: center;
  font-weight: bold
}.value {
  display: grid;
  min-height: 40px;
  background-color: rgb(250, 205, 120);
  margin: 0ch;
  border-radius: 10px;
  align-items: center
}
.parameter {
  display: grid;
  min-height: 40px;
  background-color: rgb(250, 205, 120);
  margin: 0ch;
  border-radius: 10px;
  align-items: center;
  font-weight: bold
}
</style>
