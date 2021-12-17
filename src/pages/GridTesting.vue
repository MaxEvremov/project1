<template>
  <div class="generalWindow">
    <div class="gridtopbar">one
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex et nam dicta accusamus beatae commodi obcaecati iste cumque, aut esse.</p>
      </div>
    </div>
    <div class="gridtoolbar">
      <router-link class="gridbutton" to="/text1"> M54B30 </router-link>
      <router-link class="gridbutton" to="/text2"> M62B44 </router-link>
      <router-link class="gridbutton" to="/text3"> M30B34 </router-link>
      <router-link class="gridbutton" to="/text4"> S68 </router-link>
    </div>
    <div class="griddynamicdata">
      <router-view/>
    </div>
    <div class="gridbottom">four</div>
  </div>
</template>
<script>
import text1 from '@/gridRoutes/text1'
export default {
  components: {
    text1
  }
}
</script>

<style scoped>
.generalWindow {
  border-radius: 10px;
  padding: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin-top: 100px;
  background-color: rgb(248, 168, 20);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px
}
.gridtopbar {
  border-radius: 10px;
  grid-column-start: 1;
  grid-column-end: 5;
  background-color: rgb(255, 197, 88);
}
.gridtoolbar {
  border-radius: 10px;
  display: grid;
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: rgb(255, 197, 88);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 10px;
  align-self: start;
}
.gridbottom {
  border-radius: 10px;
  grid-column-start: 1;
  grid-column-end: 5;
  background-color: rgb(255, 197, 88);
}
.griddynamicdata {
  border-radius: 10px;
  grid-column-start: 2;
  grid-column-end: 5;
  background-color: rgb(255, 197, 88);
}
.gridbutton {
  border-radius: 10px;
  width: auto;
  height: 30px;
  background-color: rgb(125, 165, 165);
  text-align: center;
}
</style>
