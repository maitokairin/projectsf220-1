<script>
  import {userAccounts, adminAccounts, isLogin, mode, account,isAdmin} from './stores.js';
  let Email_new = '';
  let pin = '';

  function a(event) {
    if (event.key === 'Enter') {
      alertMessage2();
    }
  }
  
  function submit(event) {
  if (event.key === 'Enter') {
    checkLogin();
  }
  }

  function alertMessage2() {
    alert('กรุณากรอก Password')
  }
  
  function alertMessage() {
    alert('Email หรือ Password ไม่ถูกต้อง');
  }

  function validate(accounts) {
    return accounts[Email_new].pin == pin;
  }

  function checkLogin() {
    const isUserAccount = Email_new in $userAccounts;
    const isAdminAccount = Email_new in $adminAccounts;
    if (isUserAccount || isAdminAccount) {
      if (isUserAccount && validate($userAccounts)) {
        $isLogin = true;
        $isAdmin = false;
        $mode = 'menu';
        $account = Email_new;
        Email_new = '';
        pin = '';
        
      } else if (isAdminAccount && validate($adminAccounts)) {
        $isLogin = true;
        $isAdmin = true;
        $mode = 'menu_admin';
        $account = Email_new;
        Email_new = '';
        pin = '';
      } else {
        alertMessage();
        Email_new = '';
        pin = '';
      }
    } else {
      alertMessage();
      Email_new = '';
      pin = '';
    }
  }

</script>

<main class = 'login-design'>
<div class='waves'>
  <img src = '/src/pic/OXWARD UNIVERSITY.png' width = 900px>
</div>
<div class='login'>
  <div class='login-data'>
    <img src='/src/pic/OXWARD UNIVERSITY1.png' width = 500px alt='' />
    <h1>Login</h1>
    <form action='#' class = 'login-form'>
      <div class = 'input-group'>
        <label class = 'input-fill'>
          <input class = 'i' type='email' name='email' id='email' bind:value = {Email_new} />
          <span class = 'input-label' class:active = { Email_new !== ''}> Email Address</span>
          <i class="fa-solid fa-envelope email"></i>
        </label>
      </div>
      <div class = 'input-group'>
        <label class = 'input-fill'>
          <input class = 'i' type='password' name='password' id='password' bind:value = {pin} />
          <span class = 'input-label' class:active = { pin !== ''}>Password</span>
          <i class="fa-solid fa-lock email"></i>
        </label>
      </div>
      <button class = 'login-btn' on:click = {checkLogin}>Login</button>
    </form>
  </div>
</div>
</main>

<style>
  *{
    font-family: 'popins', sans-serif;
  }
  .login{
    display: flex;
    justify-content: center;
    align-item: center;
  }
  .login-design{
    display: grid;
    grid-template-columns: repeat(2,50%);
    height: 100px;
  }
  .waves{
    background-color: #fff;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .login{
    padding-top: 170px;
    background: #fff;
    padding-bottom: 100px;
  }
  .login-data{
    text-align: center;
    width: 60%;
  }
  .input-group{
    position: relative;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
  .input-fill input{
    border: none;
    border-bottom: 3px solid #848F9A;
    width: 100%;
    height: 2rem;
    font-size: 0.875rem;
    line-height: 147.6%;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 2rem;
  }
  .input-fill input:focus{
    outline: none;
    border-color: #0C4271;
  }
  .input-fill .input-label{
    position: absolute;
    top: 15px;
    left: 28px;
    line-height: 147.6%;
    color: #848F9A;
    transition: top 0.2s;
    font-weight: 700;
  }
  .input-fill .input-label.active{
    top: 0;
    margin-bottom: 2rem;
    color: #0C4271;
  }
  .input-label:hover ~ .i{
    background: lightgrey;
  }
  .email{
    position: absolute;
    top: 19px;
    left: 0;
    color: #848F9A;
    font-size: 1.5rem;
  }
  .email:focus{
    color: #0C4271;
  }
  .input-fill .email.active{
    color: #0C4271;
  }
  .input-fill input:focus + .input-label{
    top: 0;
    margin-bottom: 2rem;
    color: #0C4271;
  }
  .input-fill input:focus ~ .email{
    color: #0C4271;
  }
  .login-btn{
    border-radius: 3rem;
    width: 45%;
    border: 1px solid #0C4271;
    font-size: 1.3rem;
    background-color: #0C4271;
    color: #fff;
    padding: 0.5rem;
    transition: 0.3s ease-in-out all;
    font-weight: 700;
  }
  .login-btn:hover{
    cursor: pointer;
    background-color: #fff;
    color: #0C4271;
  }
  .i:hover{
    background: lightgrey;
  }
  .i{
    font-family: 'Dosis', sans-serif;
  }
</style>