//  API Fetch Area

function loadCatagory() {
    // Fetch the data

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories));
}

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
}

//  Display API Data Area

function displayCategories(categories) {
    const catContainer = document.getElementById("Category-container");
    for( let cat  of categories){
        const catDiv = document.createElement("div");
        catDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        catContainer.append(catDiv)
    }
}

function displayVideos(videos){
    vidContainer = document.getElementById("vid-container");
    videos.forEach(video => {
        const vidCard =document.createElement("div");
        vidCard.innerHTML =`
        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `;
        vidContainer.append(vidCard);
    });
}


loadCatagory();
loadVideos();