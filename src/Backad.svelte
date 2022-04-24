<script>
  import {mode,checkmodestd} from "./stores.js"

  function back() {
    $mode = 'menu_admin';
    $checkmodestd = "";
  }
</script>

<footer>
<button on:click = {back}>Back to menu</button>
</footer>

<style>
  button{
  border-radius: 50px;
  background:rgba(255,255,255,0.7);
  }
</style>