const Header = () => {
    return <header>
       <nav class="navbar bg-body-tertiary">
         <div class="container-fluid">
          <a class="navbar-brand">LEO MESSI</a>
          <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
         <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </header>;
}

export default Header;