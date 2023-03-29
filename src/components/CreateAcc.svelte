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

</style>