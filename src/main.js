const Main = () => {
    return <main>
       <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQDLE5RikXl3Qo-dMRNOZdXB5Dar4v8N0eXa7xHUVni4rirFQUeUZ1_GwHwaQVAh8dLI&usqp=CAU" class="d-block w-100" alt="Messi"></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/0a/af/14/0aaf1423f722b2e79b08cec36a09c61a.jpg" class="d-block w-60" alt="Messi"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </main>;
}

export default Main;