<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="card">
  <h1>Create an account</h1>

  <form action="/">
  <input type="text" name="name" id="name" placeholder="Email" required/>
  <input type="text" name="name" id="name" placeholder="Name" required/>
  <input type="password" name="name" id="name" placeholder="Password" required/>
  <input type="password" name="name" id="name" placeholder="Confirm password" required/>
  <a href="{base}" class="button">Create</a>
  </form>
</div>

<style>

div, h1, form, input { 
  padding:0;
  margin:0;}

:focus {outline:none}

h1 {
  font-size: 32px;
  font-weight: 300;
  color: white;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 10px;
}

.card {
  margin: 20px auto;
  width: 343px; 
  height: 464px;
  border-radius: 8px/7px; 
  background-color: #ebebeb;
  box-shadow: 1px 2px 5px rgba(0,0,0,.31);
  border: none;
  background-color: rgba(0, 0, 0, .4);
  backdrop-filter: blur(10px);
}

form{
  margin: 0 30px;
}

input[type=text],input[type=password]{
  width: 200px; 
  height: 39px;
  border-radius: 0px 4px 4px 0px/5px 5px 4px 4px; 
  background-color: #fff;
  box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
  border: solid 1px #cbc9c9;
  margin-left: -5px;
  margin-top: 13px; 
  padding-left: 10px;
}

a.button {
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 6px 25px 0px 20px;
  margin: 10px 8px 20px 0px;
  display: inline-block;
  text-decoration: none;
  width: 50px; height: 27px;
  border-radius: 5px; 
  background-color: black;
  box-shadow: 0 3px grey;
  transition: all 0.1s linear 0s; 
  top: 0px;
  position: relative;
}

a.button:hover {
  top: 3px;
  background-color: green;
  -webkit-box-shadow: none; 
  -moz-box-shadow: none; 
  box-shadow: none;
  
}

</style>