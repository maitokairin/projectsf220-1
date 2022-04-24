<script>
  import {userAccounts, account} from './stores.js';
  let picNum = 0;
</script>

<div class = 'wrapper'>
  <div class = 'left'>
{#if picNum == 1}
<img src = '/src/pic/art.jpg' width='100' alt='user' />
{:else if picNum == 2}
<img src = '/src/pic/eve.jpg' width='100' alt='user' />
{:else if picNum == 3}
<img src = '/src/pic/glasses.jpg' width='100' alt='user' />
{:else if picNum == 4}
<img src = '/src/pic/mai.jpg' width='100' alt='user' />
{:else if picNum == 5}
<img src = '/src/pic/mon.jpg' width='100' alt='user' />
{:else if picNum == 6}
<img src = '/src/pic/moredeaw.jpg' width='100' alt='user' />
{:else if picNum == 7}
<img src = '/src/pic/oat.jpg' width='100' alt='user' />
{:else if picNum == 8}
<img src = '/src/pic/orn.jpg' width='100' alt='user' />
{:else if picNum == 9}
<img src = '/src/pic/yoong.jpg' width='100' alt='user' />
{:else}
<img src = '/src/pic/jackie.jpg' width = '100' alt='user' />
{/if}
    <h4>Michael Jackie</h4>
    <p>PROFESSOR</p>
  </div>
  <div class='right'>
    
    <div class = 'info'>
      <h3>PROFESSOR INFORMATION</h3>
      <div class = 'info_data'>
        <div class = 'data'>
          <h4>ID</h4>
          <p>Professor</p>
        </div>
        <div class = 'data'>
          <h4>GENDER</h4>
          <p>Male</p>
        </div>
      </div>
    </div>

    <div class = 'projects'>
      <h3>CONTACT</h3>
      <div class = 'projects_data'>
        <div class = 'data'>
          <h4>ADDRESS</h4>
          <p>Bankok, Thailand</p>
        </div>
        <div class = 'data'>
          <h4>TEL.</h4>
          <p>0900000000</p>
        </div>
      </div>
    </div>
    
  </div>
</div>
<style>
  *{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  .wrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 600px;
    display: flex;
    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
  }
.wrapper .left{
  width: 35%;
  background: linear-gradient(to right, #0C4271, #3A85C6);
  padding: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
  color: #fff;
}
.wrapper .left img{
  margin-bottom: 10px;
  border-radius: 5px;
}
.wrapper .left h4{
  margin-bottom: 10px;
}
.wrapper .left p{
  font-size: 12px;
}
.wrapper .right{
  width: 65%;
  background: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 30px 25px;
}
.wrapper .right .info,
.wrapper .right .projects{
  margin-bottom: 25px;
}
.wrapper .right .info h3,
.wrapper .right .projects h3{
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e0e0e0;
  color: #353c3e;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.wrapper .right .info_data,
.wrapper .right .projects_data{
  display: flex;
}
.wrapper .right .info_data .data,
.wrapper .right .projects_data .data{
  width: 45%;
}
.wrapper .right .info_data .data h4,
.wrapper .right .projects_data .data h4{
  color: #353c4e;
  margin-bottom: 5px;
}
.wrapper .right .info_data .data p,
.wrapper .right .projects_data .data p{
  font-size: 13px;
  margin-bottom: 10px;
  color: #919aa3;
}
</style>