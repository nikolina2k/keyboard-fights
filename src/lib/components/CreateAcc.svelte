<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="card">
  <h1>Create an account</h1>

  <form action="/">
  <input type="text"  id="newEmail" placeholder="Email" required/>
  <input type="text" id="name" placeholder="Username" required/>
  <input type="password" id="password" placeholder="Password" required/>
  <input type="password" id="confirmPassword" placeholder="Confirm password" required/>
  <button type="button" class="button">Create</button>
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
  margin-bottom: 20px;
}

.card {
  margin: 20px auto;
  width: 343px; 
  height: 464px;
  border-radius: 10px;
  box-shadow: #f05e5e 0 10px 20px -10px;
  border: none;
  background-color: rgba(0, 0, 0, .4);
  backdrop-filter: blur(10px);display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

form{
  margin: 0 30px;
  
}

input[type=text],input[type=password]{
  width: 200px; 
  height: 39px;
  border-radius: 10px; 
  background-color: #fff;
  box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
  border: solid 1px #cbc9c9;
  margin-left: -5px;
  margin-top: 13px; 
  padding-left: 10px;
}

button {
  font-size: 14px;
  font-weight: 600;
  padding: 7px 20px;
  margin-top: 30px;
  margin-left: auto;
  display: inline-block;
  text-decoration: none;
  width: 50%;
  border-radius: 100px;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: #c2fbd7;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
}

button:hover {
  top: 3px;
  cursor: pointer;
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05);
}

</style>