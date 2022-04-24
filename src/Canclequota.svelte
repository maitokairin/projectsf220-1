<script>
  import {userAccounts,account,courses} from "./stores.js";
  let amount_quota = $userAccounts[$account]['quota'].length; 

  function delete_course(index) {
    const result = $courses.find((courses) => {
      return courses.course_name === $userAccounts[$account]['quota'][index]
    })
    const findindex = $courses.indexOf(result)
    $courses[findindex].amount += 1;
    $userAccounts[$account]['quota'].splice(index,1);
    $userAccounts[$account]['quota'] = $userAccounts[$account]['quota'];
  }
</script>

<ul>
  {#if amount_quota == 0}
  <div class = 'pad'>
  <h3 align = 'center'>ยังไม่มีรายวิชาที่ขอโควต้า</h3>
    </div>
  {:else}
<table class ='tiger' align="center">
  <tr>
    <th>COURSES</th>
    <th>CANCEL</th>
  </tr>
  {#each $userAccounts[$account]['quota'] as quota,index}
  <tr>
    <td align = "center" class = 'quota'>{quota}</td>
    <td align = "center"><span class = "display" on:click={()=>delete_course(index)}>❌</span></td>
  </tr>
  {/each}
</table>
  {/if}
</ul>

<style>
  .pad{
    padding-top: 120px;
  }
  *{
    font-family: 'Poppins', sans-serif;
  }
  .tiger{
  padding-left: 50px;
  padding-top: 115px;
  padding-right: 70px;
  }
  .quota{
    width: 1500px;
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

