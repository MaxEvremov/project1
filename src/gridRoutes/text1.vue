<template>
    <div class="list">
      <div class="imageBeforeSpecification">
        <img class="image" src="@/components/images/m54.jpg" alt="">
      </div>
      <p class="parameter">Производство</p>
      <p class="value"> Munich Plant</p>
      <p class="parameter">Марка двигателя</p>
      <p class="value">М54</p>
      <p class="parameter">Годы выпуска</p>
      <p class="value">2000-2006</p>
      <p class="parameter">Материал блока цилиндров</p>
      <p class="value">алюминий</p>
      <p class="parameter">Система питания</p>
      <p class="value">инжектор</p>
      <p class="parameter">Тип</p>
      <p class="value">рядный</p>
      <p class="parameter">Количество цилиндров</p>
      <p class="value">6</p>
      <p class="parameter">Клапанов на цилиндр</p>
      <p class="value">4</p>
      <p class="parameter">Ход поршня, мм</p>
      <p class="value">89.6</p>
      <p class="parameter">Диаметр цилиндра, мм</p>
      <p class="value">84</p>
      <p class="parameter">Степень сжатия</p>
      <p class="value">10.2</p>
      <p class="parameter">Объем двигателя, куб.см</p>
      <p class="value">2979</p>
      <p class="parameter">Мощность двигателя, л.с./об.мин</p>
      <p class="value">231/5900</p>
      <p class="parameter">Крутящий момент, Нм/об.мин</p>
      <p class="value">300/3500</p>
      <p class="parameter">Топливо</p>
      <p class="value">95</p>
      <p class="parameter">Экологические нормы</p>
      <p class="value">Евро 3-4</p>
      <p class="parameter">Вес двигателя, кг</p>
      <p class="value">~130кг</p>
      <p class="twinString">Расход  топлива, л/100 км (для E60 530i)</p>
      <div class="parameter">
        <p>— город</p>
        <p>— трасса</p>
        <p>— смешанный</p>
      </div>
      <div class="value">
        <p>14.0</p>
        <p>7.0</p>
        <p>9.8</p>
      </div>
      <p class="parameter">Расход масла, гр./1000</p>
      <p class="value">до 1000</p>
      <p class="parameter">Масло в двигатель</p>
      <div class="value">
        <p>5W-30</p>
        <p>5W-40</p>
      </div>
      <p class="parameter">Сколько масла в двигателе, л</p>
      <p class="value">6.5л</p>
      <p class="parameter">Замена масла проводится, км</p>
      <p class="value">10000км (рекомендовано 7000км)</p>
      <p class="parameter">Рабочая температура двигателя, град.</p>
      <p class="value">~95</p>
      <p class="twinString">Ресурс двигателя, тыс. км</p>
      <div class="parameter">
        <p>— по данным завода</p>
        <p>— на практике</p>
      </div>
      <div class="value">
        <p>-</p>
        <p>~300</p>
      </div>
      <p class="twinString">Тюнинг, л.с.</p>
      <div class="parameter">
        <p>— потенциал</p>
        <p>— без потери ресурса</p>
      </div>
      <div class="value">
        <p>350+</p>
        <p>н.д.</p>
      </div>
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
