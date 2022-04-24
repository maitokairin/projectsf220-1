<script>
  import {checkmodestd,courses,mode} from "./stores.js";

  function check_std_name(index) {
    $mode = "check_std";
    $checkmodestd = $courses[index].course_name;
  }

  
</script>
<label class = 'content'>รายชื่อผู้ที่ขอโควตา</label>
<div align="left">
  <h2>รายชื่อผู้ที่ขอโควตา</h2>
    {#each $courses as {course_name,amount,id},index}
  <h3>{id} </h3>
  <span style="text-decoration:none" onmouseover="style='text-decoration:underline'" onmouseout="style='text-decoration:none'" class = "display" on:click={() => {check_std_name(index)}}>{course_name}</span>
  <br>
  <br>
  <br>
    {/each}
</div>

<style>
  h2{
    padding-bottom: 35px;
  }
  .display{
   cursor: pointer; 
  }
  *{
    font-family: 'popins', sans-serif;
  }
  h3,span{
    display: inline;
  }
  .content{
    padding-top: 200px;
    padding-left: 140px;
    font-size: 30px;
  }
  div{
    padding-top: 70px;
    padding-left: 120px;
    margin:20px;
  }
</style>