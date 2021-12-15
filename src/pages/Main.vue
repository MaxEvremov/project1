<template>
    <div class="header">
        <div class="inner-header">
            <h1 class="text-header">
                Visotsky Tasks Corporation
            </h1>
        </div>
        <div class="main-text">
            <p>Наша корпорация вот уже целых 2 недели занимается какой-то учебной еболой</p>
            <p>У подопытного уже мозги плавятся</p>
            <p>памагити..</p>
            </div>
        <div class="menu">
                <p class="menu-header">Меню сайта</p>
                <router-link class="router-link" to="/tasks"> Задания </router-link>
                <router-link class="router-link" to="/information"> Информация </router-link>
        </div>
    </div>
</template>
<style scoped>
.header {
    border: solid 1px black ;
    border-radius: 20px;
    width: 700px;
    height: 500px;
    background-color: rgb(125, 165, 165);
    margin-bottom: 20px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
}
.inner-header {
    border: solid 4px black ;
    border-radius: 20px;
    width: 600px;
    height: 60px;
    background-color: rgb(125, 165, 165);
    margin-bottom: 20px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    color: rgb(250, 205, 120);
    -webkit-text-stroke: 2px #000000;
}
.text-header {
    font-size: 40px;
    margin-top: 10px;
}
.main-text {
    border: solid 1px black;
    font-size: 20px;
    padding: 20px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 150px;
    margin-top: 40px;
    background-color:rgb(250, 205, 120);
    color: black;
}
.menu {
    border: solid 1px black;
    padding: 10px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 520px;
    height: 100px;
    margin-top: 20px;
    background-color:rgb(250, 205, 120);
    color: black;
}
.menu-header {
    font-size: 30px;
    margin-top: 0px;
    height: 30px;
}
.router-link {
    border-radius: ;
    font-size: 28px;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 0px;
    color: black;
    text-decoration: none;
    background-color: rgb(255, 197, 88);
}
</style>
