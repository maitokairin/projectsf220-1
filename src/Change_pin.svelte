<script>
  import {userAccounts, adminAccounts, account,mode,isAdmin} from './stores.js';
  let old_pin = '';
  let new_pin = '';

  function change_my_pin() {
    if($isAdmin == true){
      const check_old_ad = old_pin == $adminAccounts[$account].pin
      if(check_old_ad == true){
        $adminAccounts[$account].pin = new_pin;
        alert("เปลี่ยนรหัสผ่านสำเร็จแล้ว!!!!");     
        $mode = 'menu_admin';
      }
      else{
        alert("รหัสผ่านเก่าไม่ถูกต้อง");
      }
    }
    else{
      const check_old = old_pin == $userAccounts[$account].pin
      if(check_old == true){
        $userAccounts[$account].pin = new_pin;
        alert("เปลี่ยนรหัสผ่านสำเร็จแล้ว!!!!");     
        $mode = 'menu';
      }
      else{
        alert("รหัสผ่านเก่าไม่ถูกต้อง");
      }
    }
    
  }
  
</script>

<main class = 'login-design'>
<div class='login'>
  <div class='login-data'>
    <h1>Change Password</h1>
    <form action='#' class = 'login-form'>
      <div class = 'input-group'>
        <label class = 'input-fill'>
          <input class = 'i' type='password' name='email' id='email' bind:value = {old_pin} />
          <span class = 'input-label' class:active = { old_pin !== ''}> Old Password</span>
          <i class="fa-solid fa-lock email"></i>
        </label>
      </div>
      <div class = 'input-group'>
        <label class = 'input-fill'>
          <input class = 'i' type='password' name='password' id='password' bind:value = {new_pin} />
          <span class = 'input-label' class:active = { new_pin !== ''}>New Password</span>
          <i class="fa-solid fa-lock email"></i>
        </label>
      </div>
      <button class = 'login-btn' on:click = {change_my_pin}>Change Password</button>
    </form>
  </div>
</div>
</main>

<style>
  *{
    font-family: 'Poppins', sans-serif;
  }
  .login{
    display: flex;
    justify-content: center;
    align-item: center;
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
