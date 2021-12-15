<template>
  <div class="userMenu">
    <div>
      <table class="userInfo">
        <body>
          <tr class="tr">
            <th class="th">Имя</th>
            <th class="th">{{user.forname}}</th>
          </tr>
          <tr class="tr">
            <th class="th">Фамилия</th>
            <th class="th">{{user.lastname}}</th>
          </tr>
          <tr class="tr">
            <th class="th">Род занятий</th>
            <th class="th">{{user.life}}</th>
          </tr>
          <my-button @click="$emit('verif')">Выход</my-button>
          <my-button @click="changeData"> изменить данные</my-button>
        </body>
      </table>
    </div>
    <div>
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
<style scoped>
.userMenu {
  border: solid 1px black ;
  border-radius: 10px;
  margin-top: 0px;
  width: 100%;
  height: 190px;
  background-color: rgb(125, 165, 165);
}
.userInfo {
  border: solid 1px black ;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 20px;
  width: 400px;
  height: 170px;
  background-color: rgb(125, 165, 165);
  padding: 5px;
}
.tr {
  width: 400px;
  margin-left: 20px;
  background-color: rgb(250, 205, 120);
}
.th {
  border-radius: 5px;
  width: 200px;
  text-align: left;
}
</style>
