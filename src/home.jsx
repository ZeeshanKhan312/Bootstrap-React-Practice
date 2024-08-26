import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
function Home() {

  const navigate = useNavigate();

  // const signUp = () => {
  //   navigate('/register');
  // };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    if (name == "firstName") {
      setFirstName(value);
      setUserName(`${value} ${lastName}`);
    } else {
      setLastName(value);
      setUserName(`${firstName} ${value}`);
    }
  }

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    if (name == "addressLine1") {
      setAddressLine1(value);
      setAddress(`${value} ${addressLine2} ${city} ${state} ${zip}`);
    } else if (name == "addressLine2") {
      setAddressLine2(value);
      setAddress(`${addressLine1} ${value} ${city} ${state} ${zip}`);
    }
    else if (name == "city") {
      setCity(value);
      setAddress(`${addressLine1} ${addressLine2} ${value} ${state} ${zip}`);
    }
    else if (name == "state") {
      setState(value);
      setAddress(`${addressLine1} ${addressLine2} ${city} ${value} ${zip}`);
    }
    else if (name == "zip") {
      setZip(value);
      setAddress(`${addressLine1} ${addressLine2} ${city} ${state} ${value}`);
    }
  }

  async function save(user) {
    user.preventDefault();
    const form = user.target.form;
    if (form.reportValidity()) {
      try {
        // await axios.post("http://localhost:8080/....xyz",{
        //   name:userName,
        //   email:userEmail,
        //   password:password,
        //   address:address
        // });
        signUpClose();
        alert("User Registered Successfully");
      } catch (err) {
        signUpClose();
        alert(err);
      }
    }
    else {
      alert("Form is Invalid");
    }
  }
  const [signUpModal, setSignUpModal] = useState(false);
  const signUpShow = () => setSignUpModal(true);
  const signUpClose = () => setSignUpModal(false);


  async function login(user) {
    user.preventDefault();
    const form = user.target.form;
    if (form.reportValidity()) {
      try {
        // await axios.get("http://localhost:8080/....xyz",{
        //   email:userEmail,
        //   password:password,
        // });
        signInClose();
        alert("User Registered Successfully");
      } catch (err) {
        signInClose();
        alert(err);
      }
    } else {
      alert("Form is Invalid");
    }
  }

  const [signInModal, setSignInModal] = useState(false);
  const signInShow = () => setSignInModal(true);
  const signInClose = () => setSignInModal(false);


  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setUserEmail('');
    setPassword('');
    setAddressLine1('');
    setAddressLine2('');
    setCity('');
    setState('');
    setZip('');
  };
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
          {/* SEARCH BUTTON  */}
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

      {/* SIGN UP MODAL */}
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
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name"
                      name="firstName"
                      value={firstName}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div class="col-md-5 mx-3 p-1">
                    <label for="inputEmail4" class="form-label">Last Name</label>
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"
                      name="lastName"
                      value={lastName}
                      onChange={handleNameChange} />
                  </div>
                  <div class="col-md-5 mx-3 p-1" >
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="@email" required
                      value={userEmail}
                      onChange={(event) => {
                        setUserEmail(event.target.value);
                      }} />
                  </div>
                  <div class="col-md-5 mx-3 p-1">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="******" required
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }} />
                  </div>
                  <div class="col-10 mx-3 p-1">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required
                      name="addressLine1"
                      value={addressLine1}
                      onChange={handleAddressChange} />
                  </div>
                  <div class="col-10 mx-3 p-1">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                      name="addressLine2"
                      value={addressLine2}
                      onChange={handleAddressChange} />
                  </div>
                  <div class="col-md-5 mx-3 p-1">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"
                      name="city"
                      value={city}
                      onChange={handleAddressChange}
                      required />
                  </div>
                  <div class="col-md-3 p-1">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select" required
                      name="state"
                      value={state}
                      onChange={handleAddressChange}>
                      <option selected>Choose One </option>
                      <option>Delhi</option>
                      <option>U.P</option>
                      <option>Bihar</option>
                    </select>
                  </div>
                  <div class="col-md-2 mx-3 p-1">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" required
                      name="zip"
                      value={zip}
                      onChange={handleAddressChange} />
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
                    <button type="reset" class="btn btn-outline-primary" onClick={handleReset}>Reset</button>
                    <button type="submit" class="btn btn-outline-success" onClick={save}>Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* SIGN IN MODAL  */}
      {signInModal && (
        <div class="modal show d-block" id="loginModal" tabindex="-1">
          <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Sign In</h5>
                <button type="button" class="btn-close" onClick={signInClose}></button>
              </div>
              <div class="modal-body">
                <form class="row g-3 p-3" height="100" width="100" >
                  <div class="col-md-5 mx-3 p-1" >
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="@email" required
                      value={userEmail}
                      onChange={(event) => {
                        setUserEmail(event.target.value);
                      }} />
                  </div>
                  <div class="col-md-5 mx-3 p-1">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="******"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      required />
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
                    <button type="reset" class="btn btn-outline-primary" onClick={handleReset}>Reset</button>
                    <button type="submit" class="btn btn-outline-success" onClick={login}>Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div id="carouselExampleCaptions" class="carousel slide bg-dark" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src='https://unsplash.com/1600x900/?nature,water' class="d-block mx-auto"
              // JS code
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = process.env.PUBLIC_URL + "/movie1.jpg";
              }}
              style={{ height: "450px", width: "85%", }} />
            <div class="carousel-caption d-none d-md-block text-white">
              <h5>First Movie Name</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="" class="d-block mx-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = process.env.PUBLIC_URL + "/movie2.jpg";
              }}
              style={{ height: "450px", width: "85%" }} />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second Movie Name</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://unsplash.com/1600x900/?nature,water" class="d-block mx-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = process.env.PUBLIC_URL + "/movie2.jpg";
              }}
              style={{ height: "450px", width: "85%", }} />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third Movie Name</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <h3 className="text-dark my-3 mx-5" 
      style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold"}}>
        Recent Release
      </h3>

      <div className="container-fluid my-4 mx-3">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3" style={{paddingRight:'8px'}}>
        {/* <div class="col" style={{ width: "25%" }}> */}
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>

      <h3 className="text-dark my-3 mx-5" 
      style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold"}}>
        Trending Movies
      </h3>

      <div className="container-fluid my-4 mx-3">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3" style={{paddingRight:'8px'}}>
        {/* <div class="col" style={{ width: "25%" }}> */}
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger">Review</button>
                  <button type="button" class="btn btn-sm btn-outline-dark">Book</button>
                </div>
                <small class="text-body-secondary">4.5</small>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>

        
    </>

  );

}

export default Home;