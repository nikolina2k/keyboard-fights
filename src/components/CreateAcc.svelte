<script lang="ts">
</script>

<div class="card">
  <h1>Create an account</h1>

  <form action="/">
  <label id="icon" for="name"><i class="icon-envelope "></i></label>
  <input type="text" name="name" id="name" placeholder="Email" required/>
  <label id="icon" for="name"><i class="icon-user"></i></label>
  <input type="text" name="name" id="name" placeholder="Name" required/>
  <label id="icon" for="name"><i class="icon-shield"></i></label>
  <input type="password" name="name" id="name" placeholder="Password" required/>
  <label id="icon" for="name"><i class="icon-shield"></i></label>
  <input type="password" name="name" id="name" placeholder="Confirm password" required/>
  <a href="#" class="button">Create</a>
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
  -webkit-border-radius: 8px/7px; 
  -moz-border-radius: 8px/7px; 
  border-radius: 8px/7px; 
  background-color: #ebebeb; 
  -webkit-box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
  -moz-box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
  box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
  border: solid 1px #cbc9c9;
}

form{
  margin: 0 30px;
}

</style>