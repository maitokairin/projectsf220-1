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
<div align = "center">

  <input type = "password" bind:value = {old_pin} placeholder= "กรุณาใส่pinเก่า">
  <input type = "password" bind:value = {new_pin} placeholder= " กรุณาใส่pinใหม่">
  <button on:click = {change_my_pin}>ยืนยันการเปลี่ยนรหัสผ่าน</button>
  
</div>

<style>
  *{
    font-family: 'Poppins', sans-serif;
  }
  div{
    padding-top: 450px;
  }
  input{
    
  }
</style>
