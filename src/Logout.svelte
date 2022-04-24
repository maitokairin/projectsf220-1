<script>
  import { isLogin, mode, userAccounts, account, isAdmin, adminAccounts} from "./stores.js";

  let picNum = 0;
  let name = '';
  let id = '';
  
  function logout() {
    $isLogin = false;
    $isAdmin = false;
    $account = '';
    name = '';
    $mode = '';
  }

  if($isAdmin){
    name = $adminAccounts[$account].name;
    id = 'ADMIN';
  }
  else{
    name = $userAccounts[$account].name;
    id = $userAccounts[$account].id;
    picNum = $userAccounts[$account].pic;
  }
  
</script>
<img class = 'uPic' src='/src/pic/OXWARD UNIVERSITY 3.png' width=700px>
{#if picNum == 1}
<img src = '/src/pic/art.jpg' width='80' alt='user' class = 'pPic' />
{:else if picNum == 2}
<img src = '/src/pic/eve.jpg' width='80' alt='user' class = 'pPic' />
{:else if picNum == 3}
<img src = '/src/pic/glasses.jpg' width='80' alt='user' class = 'pPic' />
{:else if picNum == 4}
<img src = '/src/pic/mai.jpg' width='80' alt='user' class = 'pPic' />
{:else if picNum == 5}
<img src = '/src/pic/mon.jpg' width='80' alt='user' class = 'pPic' />
{:else if picNum == 6}
<img src = '/src/pic/moredeaw.jpg' width='80' alt='user' class = 'pPic' />
{:else if picNum == 7}
<img src = '/src/pic/oat.jpg' width='80' alt='user' class = 'pPic' />
{:else if picNum == 8}
<img src = '/src/pic/orn.jpg' width='80' alt='user' class = 'pPic' />
{:else if picNum == 9}
<img src = '/src/pic/yoong.jpg' width='80' alt='user' class = 'pPic' />
{:else}
<img src = '/src/pic/jackie.jpg' width='80' alt='user' class = 'pPic' />
{/if}
<label class = 'profile'>{name}</label>
<label class = 'id'>ID : {id}</label>

<style>
  *{
    font-family: 'Poppins', sans-serif;
  }
  .pPic{
    border-radius: 50%;
    position: fixed;
    top: 8px;
    right: 50px;
  }
  .uPic{
    position: fixed;
    margin: -60px;
    left: 20px; 
  }
  .id{
    position: fixed;
    top: 50px;
    right: 150px;
    color: #f6f6e9;
    font-family: 'popins', sans-serif;
  }
  .changepin{
    position: absolute;
    top : 35px; 
    right : 120px;
    border-radius: 20px;  
    width:110px;
    height:30px
  }
  .logout{
    position: absolute;
    top : 35px; 
    right : 30px;
    border-radius: 20px;  
    width:75px;
    height:30px
  }
div{
  display: inline;
  padding: 1400px;
}
  .profile{
    position: fixed;
    top : 25px; 
    right : 150px;
    color : #f6f6e9;
    font-family: 'popins', sans-serif;
  }
</style>