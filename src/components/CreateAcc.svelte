<script lang="ts">
</script>

<div class="create-acc">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <h2 class="card-title text-center">Create Account</h2>
            <div class="card-body py-md-4">
              <form _lpchecked="1">
              <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Name">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email">
              </div>                     
              <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password">
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between">
                <a href="#">Login</a>
                <button class="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>

  .create-acc {
    display: table;
    margin: auto;
    background: rgba(0, 0, 0, .4);
    border-radius: 100px;
    box-shadow: #f05e5e 0 10px 20px -10px;
    box-sizing: border-box;
    color:white;
    font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    width: fit-content;
    word-break: break-word;
    border: 0;
  }

  h2{
    padding-top: 1.5rem;
  }
  a{
    color: #333;
  }
  a:hover{
    color: #da5767;
    text-decoration: none;
  }
  .card{
    border: 0.40rem solid #f8f9fa;
    top: 10%;
  }
  .form-control{
    background-color: #f8f9fa;
    padding: 20px;
    padding: 25px 15px;
    margin-bottom: 1.3rem;
  }

  .form-control:focus {

      color: #000000;
      background-color: #ffffff;
      border: 3px solid #da5767;
      outline: 0;
      box-shadow: none;

  }

  .btn{
    padding: 0.6rem 1.2rem;
    background: #da5767;
    border: 2px solid #da5767;
  }
  .btn-primary:hover {

      
      background-color: #df8c96;
      border-color: #df8c96;
    transition: .3s;

  }

</style>