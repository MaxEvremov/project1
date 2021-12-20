<template>
  <div class="generalWindow">
    <div class="gridtopbar" style="font-weight: bold">WikiMotors
      <div>
        <p>Разобраться во всем этом многообразии двигателей обычному человеку действительно не просто.
          Здесь рассматриваются современные и относительно современные двигатели автомобилей, преимущественно бензиновые,
          но некоторая часть будет отведена под роторные, дизельные и электромоторы.
          </p>
      </div>
    </div>
    <div class="gridtoolbar"
      :class="{
        'upGridToolbar': width <= 500
    }"
    >
      <router-link class="gridbutton" to="/text1"> M54B30 </router-link>
      <router-link class="gridbutton" to="/text2"> M30B35 </router-link>
      <router-link class="gridbutton" to="/text3"> M62B44 </router-link>
      <router-link class="gridbutton" to="/text4"> S68 </router-link>
    </div>
    <div class="griddynamicdata"
      :class="{
        'stretchDynamicData': width <= 500
      }"
    >
      <transition>
        <router-view/>
      </transition>
    </div>
    <div class="gridbottom">
      <my-button><router-link style="text-decoration: none; color: black" to="/">Возврат в меню</router-link></my-button>
      <my-button @click="scrollUp">Наверх</my-button>
      <my-button><router-link style="text-decoration: none; color: black" to="/gridtesting">Скрыть</router-link></my-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    width: 0
  }),
  methods: {
    updateWidth () {
      this.width = window.innerWidth
      console.log(this.width)
    },
    scrollUp () {
      window.scrollTo(0, 0)
    }
  },
  created () {
    window.addEventListener('resize', this.updateWidth)
  }
}
</script>
<style scoped>
.generalWindow {
  position: relative;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(236, 166, 34);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  min-width: 300px;
  justify-items: center;
}
.gridtopbar {
  padding: 10px;
  border-radius: 10px;
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: rgb(255, 197, 88);
  color: black;
  font-size: 20px;
}
.upGridToolbar {
  grid-column-start: 1;
  grid-column-end: 3;
  align-items: center
}
.stretchDynamicData {
  grid-column-start: 1;
  grid-column-end: 3;
  align-items: center

}
.gridtoolbar {
  border-radius: 10px;
  display: grid;
  grid-row-gap: 10px;
  align-self: start;
  min-width: 150px;
  max-width: 160px;
  font-size:20px;
}
.gridbottom {
  border-radius: 10px;
  grid-column-start: 2;
  grid-column-end: 3;
  background-color: rgb(255, 197, 88);
}
.griddynamicdata {
  border-radius: 10px;
  color: black;
  grid-column-end: 3;
}
.gridbutton {
  display: grid;
  border-radius: 10px;
  width: auto;
  height: 30px;
  background-color: rgb(125, 165, 165);
  text-align: center;
  text-decoration: none;
  color: black;
  align-items: center
}
</style>
