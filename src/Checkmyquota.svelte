<script>
  import {userAccounts,account} from "./stores.js";
  let amount_quota = $userAccounts[$account]['quota'].length;
  let sumCredit = $userAccounts[$account]['quota'].length*3;
</script>
<ul class = 'dog' align="center">
  {#if amount_quota == 0}
  <h3>ยังไม่มีรายชื่อวิชาที่ขอโควต้า</h3>
  {:else}
  <table align="center">
  <tr>
    <th>COURSES</th>
    <th>STATUS</th>
  </tr>
    {#each $userAccounts[$account]['quota'] as courses}
  <tr>
    <td align = "center">{courses}</td>
    <td>✅</td>
  </tr>
    {/each}
    <tr align = 'center'>
      <td></td>
      <td class='noeykob'>ลงทะเบียนทั้งหมด {amount_quota} วิชา รวม {sumCredit} หน่วยกิต</td>
    </tr>
</table>
  {/if}
</ul>

<style>
  *{
    font-family: 'Poppins', sans-serif;
  }
  .dog{
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
  .noeykob {
    background-color: #0C4271;
    color: white;
  }
</style>

