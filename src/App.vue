<template>
 <div id="App" class="app">
   <div class="topbar">
      <div class="not-verification" v-if="verification === false">
        <div v-if="show === false" style="padding:5px; color: black">
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
      registration: false,
      user: [1],
      users: [
        { login: 'admin', password: 'admin', forname: '1', lastname: '1', life: '1', image: '@/components/images/1.jpeg' },
        { login: '123', password: '123', forname: '2', lastname: '2', life: '2', image: '@/components/images/kolya.jpeg' },
        { login: 'qwe', password: 'qwe', forname: '3', lastname: '3', life: '3', image: '@/components/images/nikitos.jpg' },
        { login: 'zxc', password: 'zxc', forname: '4', lastname: '4', life: '4', image: '@/components/images/nikeshin.jpg' }
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
  display: grid;
  margin: 0;
  grid-template-rows: repeat(2 1fr);
}
.topbar {
  display: grid;
  border-radius: 10px;
  width: 100%;
  background-color: rgb(125, 165, 165);
}
</style>
