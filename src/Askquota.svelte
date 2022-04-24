<script>
  import {courses, userAccounts, account} from "./stores.js";

  let newtask = [];
  for (let item = 0; item < $courses.length; item++) {
    newtask.push($courses[item].course_name);
  }
  function double_check(index) {
    let cnt = 0;
    for (let item = 0; item < $userAccounts[$account]['quota'].length; item++) {
      if($userAccounts[$account]['quota'][item] === newtask[index]){
        cnt += 1;
      }
    }
    if(cnt == 1){
        return true;
        cnt = 0;
      }
      else{
        return false;
        cnt = 0;
      }
  }
  
  function add(index) {
    if($courses[index].amount == 0){
      alert('ไม่สามารถขอโควต้าวิชานี้ได้เนื่องจากจำนวนที่นั่งเต็ม');
    }
    else{
      if($userAccounts[$account]['quota'].length == 0){
        $userAccounts[$account]['quota'].push($courses[index].course_name);
        $courses[index].amount -= 1;
        alert('ลงทะเบียนสำเร็จ');
      }
      else {
        if(double_check(index)){
          alert("คุณลงทะเบียนวิชานี้ไปแล้ว");
        }
        else{
          $userAccounts[$account]['quota'].push($courses[index].course_name);
          $courses[index].amount -= 1;
          alert('ลงทะเบียนสำเร็จ');
        }
      }
    }
  }
</script>

<table class = 'bird'align="center">
  <tr>
    <th>ID</th>
    <th>CREDIT</th>
    <th>COURSES</th>
    <th>TIME</th>
    <th>SECTION</th>
    <th>AVAILABLE</th>
    <th>SIGN UP</th>
  </tr>
  {#each $courses as {id,credit,course_name,time,section,amount},index}
  <tr>
    <td align = "center">{id}</td>
    <td align = "center">{credit}</td>
    <td align = "center">{course_name}</td>
    <td align = "center">{time}</td>
    <td align = "center">{section}</td>
    <td align = "center">{amount}</td>
    <td align = 'center'><button on:click={() => add(index)}>REGISTER</button></td>
  </tr>
  {/each}
</table>

<style>
  *{
    font-family: 'Poppins', sans-serif;
  }
  .bird{
  padding-left: 90px;
  padding-top: 115px;
  padding-right: 70px;
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
    height: 60px;
  }
</style>

<!-- for debuging. -->
<!--
$userAccounts[$account]['quota'].push($courses[index].course_name);
$courses[index].amount -= 1;
<p>{newtask}</p>
{#each $userAccounts[$account]['quota'] as quota}
<h1>{quota}</h1>
{/each}
-->