<script>
  import {courses} from "./stores.js"

  let newtask = '';
  let newamount = '';
  let newsection = '';
  let newtime = '';
  let newcoursesid = '';
  let newcredit = '';

  function add_course() {
    if(newamount <= 0){
      alert("จำกรุณากรอกจำนวนที่นั่งมากกว่า0ที่");
    }
    else if(newtime <= 0){
      alert("กรุณาเลือกเวลาเรียน")
    }
    else if(newcredit <=0){
      alert("กรุณาใส่จำนวนหน่วยกิต")
    }
    else if(newsection <=0){
      alert("กรุณาเลือกSection")
    }
    else{
    $courses.push({course_name: newtask, amount: newamount, id: newcoursesid, 
    section: newsection, time: newtime, credit: newcredit})
    $courses = $courses;
    newtask = '';
    newamount = '';
    newsection = '';
    newtime = '';
    newcoursesid = '';
    newcredit = '';
    }
  }
  function delete_wicha(index) {
    $courses.splice(index,1)
    $courses = $courses;
  }
  
</script>

<table class = 'doggo' align="center">
  <tr>
    <th>ID</th>
    <th>CREDIT</th>
    <th>COURSES</th>
    <th>TIME</th>
    <th>SECTION</th>
    <th>AVAILABLE</th>
    <th>Delete</th>
  </tr>
  {#each $courses as {id,credit,course_name,time,section,amount},index}
  <tr>
    <td align = "center">{id}</td>
    <td align = "center">{credit}</td>
    <td align = "center">{course_name}</td>
    <td align = "center">{time}</td>
    <td align = "center">{section}</td>
    <td align = "center">{amount}</td>
    <td align = 'center'><span on:click={()=>delete_wicha(index)}>❌</span></td>
  </tr>
  {/each}
  <tr>
    <td align = 'center'><input name = 'coursesid' bind:value={newcoursesid} placeholder='กรุณาระบุรหัสวิชา'></td>
    <td align = 'center'><input type = 'number' bind:value={newcredit} placeholder = 'กรุณาระบุหน่วยกิต'></td>
    <td align = 'center'><input bind:value={newtask} placeholder='กรุณาใส่ชื่อวิชาที่จะเพิ่ม'></td>
    <td align = 'center'><select bind:value ={newtime}>
  <option value = 0>--เวลาเรียน--</option>
  <option value = 'MON 9.30 - 12.30'>MON 9.30 - 12.30</option>
  <option value = 'MON 13.30 - 16.30'>MON 13.30 - 16.30</option>
  <option value = 'TUE 9.30 - 12.30'>TUE 9.30 - 12.30</option>
  <option value = 'TUE 13.30 - 16.30'>TUE 13.30 - 16.30</option>
  <option value = 'WED 9.30 - 12.30'>WED 9.30 - 12.30</option>
  <option value = 'WED 13.30 - 16.30'>WED 13.30 - 16.30</option>
  <option value = 'THU 9.30 - 12.30'>THU 9.30 - 12.30</option>
  <option value = 'THU 13.30 - 16.30'>THU 13.30 - 16.30</option>
  <option value = 'FRI 9.30 - 12.30'>FRI 9.30 - 12.30</option>
  <option value = 'FRI 13.30 - 16.30'>FRI 13.30 - 16.30</option>
  <option value = 'SAT 9.30 - 12.30'>SAT 9.30 - 12.30</option>
  <option value = 'SAT 13.30 - 16.30'>SAT 13.30 - 16.30</option>
  <option value = 'SUN 9.30 - 12.30'>SUN 9.30 - 12.30</option>
  <option value = 'SUN 13.30 - 16.30'>SUN 13.30 - 16.30</option>
</select></td>
    <td align = 'center'><input type = 'number' bind:value ={newsection} placeholder ='กรุณาระบุsection'></td>
    <td align = 'center'><input type = 'number' bind:value={newamount} placeholder='กรุณาใส่จำนวนที่นั่ง'></td>
    <td align = 'center'><button on:click={add_course}>Add</button></td>
  </tr>
</table>

<style>
  *{
    font-family: 'Poppins', sans-serif;
  }
  .doggo{
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
  span{
    font-size: 25px;
  }
  input,select,button{
    border-radius: 300px;
    margin: 15px;
    border: 2px solid #0C4271
  }
</style>