import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function HindiMovies() {

    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    const navigate = useNavigate();

     const login=()=>{
      navigate('/login');
    }

    const signUp = () => {
        navigate('/register');
      };
  
    return (
      // TOP NAVIGATION BAR 
      <nav class="navbar bg-body-tertiary navbar-expand-lg" data-bs-theme="dark">
        <div class="container-fluid">
          {/* for website name nd logo  */}
          <a class="navbar-brand" href="#">
            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="80" height="24" class="d-inline-block align-text-top" />
            Movie Stop
          </a>
          {/* for navbar other fucntion  */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/hindi_movies">Hindi Movies</a>
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
          {/* login/sign up section */}
          <form class="justify-content-end">
            <Link to="/login">
            <button class="btn btn-outline-success me-2" type="button">LOGIN</button></Link>
            <button class="btn btn-sm btn-outline-secondary" type="button" onClick={signUp}>SIGN UP</button>
          </form>
        </div>
      </nav>
  
      // SEARCH BUTTON 
      
    );
    
  }
  
  export default HindiMovies;