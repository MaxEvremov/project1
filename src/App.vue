<template>
 <div id="App" class="app">
   <div class="topbar">
      <div class="not-verification" v-if="verification === false">
        <div v-if="show === false" style="padding:10px; color: black">
          Вы не вошли
        </div>
        <login
        :show="show"
        v-model="show"
        @logging="verificationLoginInformation"/>
      </div>
      <div class="verification" v-else>
        <userMenu :user="user" v-model="verification" @verif="changeVerification"/>
      </div>
    </div>
   <router-view></router-view>
  </div>
</template>

<script>
import login from '@/components/Login'
import userMenu from '@/components/UserMenu'
export default {
  data () {
    return {
      show: false,
      verification: false,
      user: [1],
      users: [
        { login: 'admin', password: 'admin', forname: 'Макс', lastname: 'Ефремов', life: 'ленивец', image: '@/components/images/1.jpeg' },
        { login: '123', password: '123', forname: 'Колямбус', lastname: 'Коршунов', life: 'дома сидит постоянно, заебал уже', image: '@/components/images/kolya.jpeg' },
        { login: 'qwe', password: 'qwe', forname: 'Никитос', lastname: 'не знаю фамилию', life: ' делает металлоагрегатор', image: '@/components/images/nikitos.jpg' },
        { login: 'zxc', password: 'zxc', forname: 'Гриша', lastname: 'Никешин', life: 'Ебёт всех в офисе', image: '@/components/images/nikeshin.jpg' }
      ]
    }
  },
  components: {
    login,
    userMenu
  },
  methods: {
    changeVerification () {
      this.verification = !this.verification
    },
    showUserInformation (user) {
      this.user = user
      this.$emit('update: user', user)
      console.log(user)
    },
    verificationLoginInformation (value) {
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i]
        if (value.login === user.login) {
          if (value.password === user.password) {
            this.verification = true
            this.showUserInformation(user)
            return alert(`Вы вошли в систему, как ${user.forname} ${user.lastname}`)
          }
        }
      }
    }
  }
}
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.topbar {
  border-radius: 10px;
  width: 100%;
  height: 100px;
  background-color: rgb(125, 165, 165);
}
</style>
