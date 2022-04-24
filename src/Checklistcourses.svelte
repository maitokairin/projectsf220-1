<script>
  import {courses} from "./stores.js";
</script>
<table class = 'cat' align="center">
  <tr>
    <th>ID</th>
    <th>CREDIT</th>
    <th>COURSES</th>
    <th>TIME</th>
    <th>SECTION</th>
    <th>AVAILABLE</th>
  </tr>
  {#each $courses as {id,credit,course_name,time,section,amount}}
  <tr>
    <td align = "center">{id}</td>
    <td align = "center">{credit}</td>
    <td align = "center">{course_name}</td>
    <td align = "center">{time}</td>
    <td align = "center">{section}</td>
    <td align = "center">{amount}</td>
  </tr>
  {/each}
</table>

<style>
  *{
    font-family: 'Poppins', sans-serif;
  }
  .cat{
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
    background-color:#0C4271;
    color: white;
    height: 60px;
  }
  td {
    height: 60px;
  }
</style>



