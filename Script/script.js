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
        // console.log(video);
        const vidCard =document.createElement("div");
        vidCard.innerHTML =`
         <div class="card bg-base-100">
                <figure class="relative">
                  <img class="w-full h-[150px] object-cover"
                    src="${video.thumbnail}"
                    />
                    <span class="absolute bottom-2 right-2 text-white bg-slate-600 px-2 rounded text-sm">3 hours 56 mins</span>
                </figure>


                <div class="flex p-5 gap-3">
                    <div class="profile">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                              <img src="${video.authors[0].profile_picture}" />
                            </div>
                          </div>
                    </div>
                    <div class="intro">
                        <h2 class="text-sm font-semibold">${video.title}</h2>
                        <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                        <p class="text-sm text-gray-400">${video.others.views}</p>
                    </div>
                  </div>
                </div>
              </div>
        `;
        vidContainer.append(vidCard);
    });
}


loadCatagory();
loadVideos();