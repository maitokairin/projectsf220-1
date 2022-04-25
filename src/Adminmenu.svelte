<script>
  import {mode, ismenuopen, isLogin, isAdmin, account, adminAccounts} from "./stores.js";
  let close = false;
  let name = '';
  let eiei = $adminAccounts[$account].name;
  function Myfunction(){
    if(close === true){
      $ismenuopen = false;
    }
    else if (close === false) {
      $ismenuopen = true;
    }
  }
  function logout() {
    $isLogin = false;
    $isAdmin = false;
    $account = '';
    name = '';
    $mode = '';
  }
</script>

<div class = 'navigation' class:navigationA = {$ismenuopen === false}>
<ul>
  <li class = 'list' class:active={$mode === 'menu_admin'} on:click={() => $mode = 'menu_admin'}>
    <b></b>
    <b></b>
    <a href = "#">
      <span class='icon'><ion-icon name="home-outline"></ion-icon></span>
      <span class='title'>Home</span>
    </a>
  </li>
  <li class = 'list' class:active={$mode === 'profile_admin'} on:click={() => $mode = 'profile_admin'}>
    <b></b>
    <b></b>
    <a href = "#">
      <span class='icon'><ion-icon name="person-outline"></ion-icon></span>
      <span class='title'>Profile</span>
    </a>
  </li>
  <li class = 'list' class:active={$mode === 'permlod'} on:click ={() => $mode = 'permlod'}>
    <b></b>
    <b></b>
    <a href = "#">
      <span class='icon'><ion-icon name="book-outline"></ion-icon></span>
      <span class='title'>Courses List</span>
    </a>
  </li>
  <li class = 'list' class:active={$mode === 'wach_name_s'} on:click ={() => $mode = 'wach_name_s'}>
    <b></b>
    <b></b>
    <a href = "#">
      <span class='icon'><ion-icon name="clipboard-outline"></ion-icon></span>
      <span class='title'>Student Lists</span>
    </a>
  </li>
  <li class = 'list' class:active={$mode === 'change_pin_admin'} on:click ={() => $mode = 'change_pin_admin'}>
    <b></b>
    <b></b>
    <a href = "#">
      <span class='icon'><ion-icon name="key-outline"></ion-icon></span>
      <span class='title'>Change Pin</span>
    </a>
  </li>
  <li class = 'list' on:click ={logout}>
    <b></b>
    <b></b>
    <a href = "#">
      <span class='icon'><ion-icon name="log-out-outline"></ion-icon></span>
      <span class='title'>Logout</span>
    </a>
  </li>
</ul>
</div>

<div class = 'welcome' class:active = {$mode === 'menu_admin'}>
  <img src = '/src/pic/OXWARDUNIVERSITY2.png' class = 'welcomepic' width = '600' />
  <label class = 'welcomeFont'>WELCOME</label>
  <label class = 'welcomeFont1'>{eiei}</label>
</div>

<label class = 'toggle' class:toggleA={$ismenuopen === false} on:click = {Myfunction}>
  <ion-icon name="close-circle-outline" class = 'closeicon'></ion-icon>
  <ion-icon name="menu-outline" class = 'open'></ion-icon>
  <label>
  <input class = 'menu' type = 'checkbox' bind:checked = {close} />
  </label>
</label>

<style>
  .welcomeFont1{
    font-size: 50px;
    position: fixed;
    top: 77%;
    left: 950px;
  }
  .welcomeFont{
    font-size: 50px;
    position: fixed;
    top: 77%;
  }
  .welcomepic{
    position: fixed;
    top: 26%;
    left: 35%;
  }
  .welcome{
    display: none;
  }
  .welcome.active{
    display: flex;
    position: fixed;
    top: 5%;
    left: 35%;
    padding-right: 750px;
    padding-bottom: 750px;
    width: 100px;
    height: 100px;
    text-align: center;
  }
  .menu{
    position: fixed;
    top: 120px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #0C4271;
    border-radius: 10px;
    cursor: pointer;
    display: none;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'popins', sans-serif;
  }
  .navigation{
    position: fixed;
    top: 120px;
    left: 20px;
    bottom: 20px;
    width: 70px;
    border-radius: 10px;
    border-left: 5px solid #0C4271;
    background: #0C4271;
    transition: 0.5s;
    overflow-x: hidden;
  }
  .navigationA{
    width: 300px;
  }
  .navigation ul{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    padding-left: 5px;
    padding-top: 40px;
  }
  .navigation ul li{
    position: relative;
    list-style: none;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .navigation ul li.active{
    background: #fff;
  }
  .navigation ul li b:nth-child(1){
    position: absolute;
    top: -20px;
    height: 20px;
    width: 100%;
    background: #fff;
    display: none;
  }
  .navigation ul li b:nth-child(1)::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 20px;
    background: #0C4271;
  }
  .navigation ul li b:nth-child(2){
    position: absolute;
    bottom: -20px;
    height: 20px;
    width: 100%;
    background: #fff;
    display: none;
  }
  .navigation ul li b:nth-child(2)::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    background: #0C4271;
  }
  .navigation ul li.active b:nth-child(1){
    display: block;
  }
  .navigation ul li.active b:nth-child(2){
    display: block;
  }
  .navigation ul li a{
    position: relative;
    display: black;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: #fff;
  }
  .navigation ul li.active a{
    color: #333;
  }
  .navigation ul li a .icon{
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    bottom: -7px;
  }
  .navigation ul li a .icon ion-icon{
    font-size: 1.5em;
  }
  .navigation ul li a .title{
    position: relative;
    display: black;
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    white-spce: normal;
  }
  .toggle{
    position: fixed;
    top: 120px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #0C4271;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .toggleA{
    background: #EA828D;
  }
  .toggle ion-icon{
    position: absolute;
    color: #fff;
    font-size: 34px;
    display: none;
  }
  .toggle ion-icon.open{
    display: block;
  }
  .toggle ion-icon.closeicon{
    display: none;
  }
  .toggleA ion-icon.open{
    display: none;
  }
  .toggleA ion-icon.closeicon{
    display: block;
  }
</style>
