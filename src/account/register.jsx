
function Register() {


  return (
    <>
    <nav class="navbar bg-body-tertiary navbar-expand-lg" data-bs-theme="dark">
      <div class="container-fluid">
        {/* for website name nd logo  */}
        <a class="navbar-brand" href="/">
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Logo" width="70" height="24" class="d-inline-block align-text-top" />
          Movie Stop
        </a>
      </div>
    </nav>

    <form class="row g-3 p-3 bg-dark text-white" height= "100" width="100" >
      <div class="col-md-5 mx-3 p-1">
        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
      </div>
      <div class="col-md-5 mx-3 p-1">
        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
      </div>
      <div class="col-md-5 mx-3 p-1" >
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" required/>
      </div>
      <div class="col-md-5 mx-3 p-1">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-10 mx-3 p-1">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div class="col-10 mx-3 p-1">
        <label for="inputAddress2" class="form-label">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div class="col-md-5 mx-3 p-1">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity" />
      </div>
      <div class="col-md-3 p-1">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select" required> 
          <option selected>Choose One </option>
          <option>Delhi</option>
          <option>U.P</option>
          <option>Bihar</option>
        </select>
      </div>
      <div class="col-md-2 mx-3 p-1">
        <label for="inputZip" class="form-label">Zip</label>
        <input type="text" class="form-control" id="inputZip" />
      </div>
      <div class="col-12 mx-3 p-1">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="invalidCheck" required />
          <label class="form-check-label" for="gridCheck invalidCheck">
            Agree to Terms & Conditions.
          </label>
        </div>
      </div>
      <div class="col-12 mx-3 p-1">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
    </>
  );
}

export default Register;