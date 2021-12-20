<template>
  <div class="list">
    <div class="imageBeforeSpecification">
      <img class="image" src="@/components/images/m30.jpg" alt="">
    </div>
    <p class="parameter">Производство</p>
    <p class="value">Munich Plant</p>
    <p class="parameter">Марка двигателя</p>
    <p class="value">М30</p>
    <p class="parameter">Годы выпуска</p>
    <p class="value">1982-1992</p>
    <p class="parameter">Материал блока цилиндров</p>
    <p class="value">чугун</p>
    <p class="parameter">Система питания</p>
    <p class="value">инжектор</p>
    <p class="parameter">Тип</p>
    <p class="value">рядный</p>
    <p class="parameter">Количество цилиндров</p>
    <p class="value">6</p>
    <p class="parameter">Клапанов на цилиндр</p>
    <p class="value">2</p>
    <p class="parameter">Ход поршня, мм</p>
    <p class="value">86</p>
    <p class="parameter">Диаметр цилиндра, мм</p>
    <p class="value">92</p>
    <p class="parameter">Степень сжатия</p>
    <p class="value">8.0</p>
    <p class="parameter">Объем двигателя, куб.см</p>
    <p class="value">3430</p>
    <p class="parameter">Мощность двигателя, л.с./об.мин</p>
    <p class="value">185/5400</p>
    <p class="parameter">Крутящий момент, Нм/об.мин</p>
    <p class="value">290/4000</p>
    <p class="parameter">Топливо</p>
    <p class="value">92</p>
    <p class="parameter">Экологические нормы</p>
    <p class="value">null</p>
    <p class="parameter">Вес двигателя, кг</p>
    <p class="value">~145</p>
    <p class="parameter">Расход  топлива, л/100 км (для E34 535i)</p>
    <p class="value">17.3 </p>
    <p class="parameter">Расход масла, гр./1000 км</p>
    <p class="value">до 1000</p>
    <p class="parameter">Масло в двигатель</p>
    <p class="value">5W-30</p>
    <p class="parameter">Сколько масла в двигателе, л</p>
    <p class="value">5.75</p>
    <p class="parameter">Замена масла проводится, км</p>
    <p class="value">7000-10000</p>
    <p class="parameter">Рабочая температура двигателя, град.</p>
    <p class="value">~90</p>
    <p class="parameter">Ресурс двигателя, тыс. км</p>
    <p class="value">400+</p>
    <p class="parameter">Тюнинг, л.с.</p>
    <p class="value">800+</p>
  </div>
</template>
<style scoped>
.list {
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.imageBeforeSpecification {
  display: grid;
  grid-column-start: 1;
  grid-column-end: 3;
}
.image {
  border-radius: 20px;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
