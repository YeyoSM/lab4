const feather = require('feather-icons');

setTimeout(() => {
   feather.replace();
}, 1000);
const Header = () => {
    return <header>
       <nav class="navbar bg-body-tertiary">
         <div class="container-fluid">
         <i data-feather="activity"></i>
         LIONEL ANDRES MESSI CUCCITTINI
          <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
         <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </header>;
}

export default Header;