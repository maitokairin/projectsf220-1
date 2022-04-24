 <script>
  import {userAccounts,checkmodestd,courses,mode} from "./stores.js";
  let ainfo = [];
  let data = [];
  
  let name = Object.keys($userAccounts);
  for (let item of name) {
    for (let idex = 0; idex < $userAccounts[item]['quota'].length; idex++) {
      if($userAccounts[item]['quota'][idex] === $checkmodestd){
        ainfo.push($userAccounts[item]['id']);
        ainfo.push($userAccounts[item]['name']);
        data.push(ainfo);
        ainfo = [];
      }
    }
  }
  let amount_array = data.length;
</script>
<div class = 'astra'>
<h3>{$checkmodestd}</h3>
</div>
<table class ='viper' align="center">
  
  {#if amount_array == 0}
    <h2 align = "center" >ยังไม่มีนักศึกษาคนใดขอโควต้ารายวิชานี้</h2>
  {:else}
    <tr>
      <th class = 'id'>STUDENT ID</th>
      <th>NAME</th>
    </tr>
  {#each data as row}
  <tr>
     {#each row as cell}
      <td align = 'center'>{cell}</td>
      {/each}  
   </tr>  
     {/each}


   {/if}
 </table>

<style>
  *{
    font-family: 'popins', sans-serif;
  }
  .astra{
    text-align: left;
    padding-top: 120px;
    padding-left: 120px;
    font-size:26px;
  }
         
  .viper{
    padding-left: 90px;
    padding-top: 10px;
    padding-right: 70px;
    font-weight: bold;
  }
  .id{
    width: 300px;
  }
  tr:nth-child(odd) {
    background-color: #F5FAFF;
  }
  table{
    width: 100%;
  }
  th{
    background-color: #0C4271;
    color: white;
    height: 60px;
  }
  td {
    height: 50px;
  }
</style>