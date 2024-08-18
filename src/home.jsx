import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
function Home() {

  // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  const navigate = useNavigate();

  const signUp = () => {
    navigate('/register');
  };

  const [signUpModal, setSignUpModal] = useState(false);
  const signUpShow = () => setSignUpModal(true);
  const signUpClose = () => setSignUpModal(false);

  const [signInModal, setSignInModal] = useState(false);
  const signInShow = () => setSignInModal(true);
  const signInCLose = () => setSignInModal(false);
  return (
    <>
      {/* TOP NAVIGATION BAR */}
      <nav class="navbar bg-body-tertiary navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid">
          {/* for website name nd logo  */}
          <a class="navbar-brand" href="/">
            <img src="../public/logo192.png" alt src={process.env.PUBLIC_URL + "/logo192.png"} width="70" height="24" class="d-inline-block align-text-top" />
            Movie Stop
          </a>
          {/* for navbar other fucntion  */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/hindi_movies">Hindi Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">English Movies</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Comedy</a></li>
                  <li><a class="dropdown-item" href="#">Romance</a></li>
                  <li><a class="dropdown-item" href="#">Sci-Fi</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <form class="d-flex mx-2" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

          {/* login/sign up section */}
          <form class="justify-content-end">
            <button class="btn btn-outline-primary me-2" type="button" onClick={signInShow}>LOGIN</button>
            {/* <Link to="/register"> */}
            <button class="btn btn-outline-secondary me-2" type="button" onClick={signUpShow}>SIGN UP</button>
          </form>
        </div>
      </nav>

      {signUpModal && (
        <div class="modal show d-block" id="loginModal" tabindex="-1">
          <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Sign Up</h5>
                <button type="button" class="btn-close" onClick={signUpClose}></button>
              </div>
              <div class="modal-body">
                <form class="row g-3 p-3" height="100" width="100" >
                  <div class="col-md-5 mx-3 p-1">
                    <label for="inputEmail4" class="form-label">First Name</label>
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" required />
                  </div>
                  <div class="col-md-5 mx-3 p-1">
                    <label for="inputEmail4" class="form-label">Last Name</label>
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                  </div>
                  <div class="col-md-5 mx-3 p-1" >
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="@email" required />
                  </div>
                  <div class="col-md-5 mx-3 p-1">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="******" required />
                  </div>
                  <div class="col-10 mx-3 p-1">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required />
                  </div>
                  <div class="col-10 mx-3 p-1">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div class="col-md-5 mx-3 p-1">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" required />
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
                    <input type="text" class="form-control" id="inputZip" required />
                  </div>
                  <div class="col-12 mx-3 p-1">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="invalidCheck" required />
                      <label class="form-check-label" for="gridCheck invalidCheck">
                        Agree to Terms & Conditions.
                      </label>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="reset" class="btn btn-outline-primary">Reset</button>
                    <button type="submit" class="btn btn-outline-success" onClick={signUpClose}>Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {signInModal && (
        <div class="modal show d-block" id="loginModal" tabindex="-1">
          <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Sign In</h5>
                <button type="button" class="btn-close" onClick={signInCLose}></button>
              </div>
              <div class="modal-body">
                <form class="row g-3 p-3" height="100" width="100" >
                  <div class="col-md-5 mx-3 p-1" >
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="@email" required />
                  </div>
                  <div class="col-md-5 mx-3 p-1">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="******" required />
                  </div>

                  <div class="col-12 mx-3 p-1">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="invalidCheck" required />
                      <label class="form-check-label" for="gridCheck invalidCheck">
                        Agree to Terms & Conditions.
                      </label>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="reset" class="btn btn-outline-primary">Reset</button>
                    <button type="submit" class="btn btn-outline-success" onClick={signInCLose}>Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

    // SEARCH BUTTON 

  );

}

export default Home;