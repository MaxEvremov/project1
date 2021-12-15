<template>
  <div>
    <div class="login-menu"
      v-if="show === true"
      :value="modelValue">
      <div>
        <my-input
          v-model="logInf.login"
          placeholder="Введиnt логин"/>
        <my-input
          v-model="logInf.password"
          placeholder="Введите пароль"/>
        <my-button
          @click="sendLogInf">
          Войти
          </my-button>
        <my-button
          @click="showOrHideLogin">
          Закрыть
          </my-button>
     </div>
   </div>
   <div v-else>
      <my-button @click="showOrHideLogin">Войти</my-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      logInf: {
        login: '',
        password: ''
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    modelValue: [String, Number]
  },
  methods: {
    showOrHideLogin () {
      this.showoption = !this.show
      this.$emit('update:modelValue', this.showoption)
    },
    sendLogInf () {
      console.log('данные из поля ввода логина и пароля отправлены в функцию проверки')
      this.$emit('logging', this.logInf)
      this.logInf = {
        login: '',
        password: ''
      }
    }
  }
}

</script>
<style scoped>
.login-menu {
  border-radius:10px ;
  width: 200px;
  height: 100px;
  background-color: rgb(125, 165, 165);
  margin: auto;
}
</style>
