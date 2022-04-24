<script>
  import {isLogin, mode} from "./stores.js";
  import Login  from './Login.svelte';
  import Logout from "./Logout.svelte";
  import Menustudent from "./Menustudent.svelte";
  import Askquota from "./Askquota.svelte";
  import Checklistcourses from "./Checklistcourses.svelte";
  import Checkmyquota from "./Checkmyquota.svelte";
  import Canclequota from "./Canclequota.svelte";
  import Back from "./Backs.svelte";
  import Adminmenu from "./Adminmenu.svelte";
  import Permlodwicha from "./Permlodwicha.svelte";
  import Wachnamestudent from "./Wachnammestudent.svelte";
  import Backad from "./Backad.svelte";
  import Check_std from "./Check_std.svelte";
  import Change_pin from "./Change_pin.svelte";
  import Profile_std from './Profile.svelte';
  import Profile_admin from './Profileadmin.svelte';

</script>

{#if !$isLogin}
  <Login />
{:else}
    <Logout />
    {#if $mode == 'menu'}
        <Menustudent />
    {:else if $mode == 'profile'}
        <Menustudent />
        <Profile_std />
    {:else if $mode == 'profile_admin'}
        <Adminmenu />
        <Profile_admin />
    {:else if $mode == 'menu'}
        <Menustudent />
    {:else if $mode == 'ask_quota'}
        <Menustudent />
        <Askquota />
    {:else if $mode == 'cancel_quota'}
        <Menustudent />
        <Canclequota />
    {:else if $mode == 'check_list_courses'}
        <Menustudent />
        <Checklistcourses />
    {:else if $mode == 'check_my_quota'}
        <Menustudent />
        <Checkmyquota />
    {:else if $mode == 'change_pin'}
        <Menustudent />
        <Change_pin />
    {:else if $mode == 'menu_admin'}
        <Adminmenu />
        <Adminmenu />
    {:else if $mode == 'permlod'}
        <Adminmenu />
        <Permlodwicha />
    {:else if $mode == 'wach_name_s'}
        <Adminmenu />
        <Wachnamestudent />
    {:else if $mode == 'check_std'}
        <Adminmenu />
        <Check_std />
    {:else if $mode == 'change_pin_admin'}
        <Adminmenu />
        <Change_pin />
    {/if}
{/if}
