// Remove Active Class

function removeActive(){
    const removeAct = document.getElementsByClassName("active");
    for(let btn of removeAct){
        btn.classList.remove(("active"));
    }
}

//  API Fetch Area

function loadCatagory() {
    // Fetch the data

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories));
}

function loadCatagoryVideos(id){
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {

        removeActive();
        const clickedBtn = document.getElementById(`btn-${id}`);
        clickedBtn.classList.add("active");

        displayVideos(data.category)
    });
}

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => {
        removeActive();
        document.getElementById("btn-all").classList.add("active");
        displayVideos(data.videos);
    });
}

//  Display API Data Area

function displayCategories(categories) {
    const catContainer = document.getElementById("Category-container");
    for( let cat  of categories){
        const catDiv = document.createElement("div");
        catDiv.innerHTML = `
        <button id="btn-${cat.category_id}" onclick="loadCatagoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        catContainer.append(catDiv)
    }
}

function displayVideos(videos){
    const vidContainer = document.getElementById("vid-container");
    vidContainer.innerHTML= ``;

    if(videos.length== 0){
        vidContainer.innerHTML= `
         <div class="col-span-full flex flex-col items-center justify-center py-20">
                <img src="./design/Icon.png" alt="">
                <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
            </div>
        `;
        return;
    }

    videos.forEach(video => {
        // console.log(video);
        const vidCard =document.createElement("div");
        vidCard.innerHTML =`
         <div class="card bg-base-100" onclick=loadVideoDetails('${video.video_id}')>
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
                        <p class="text-sm text-gray-400 flex gap-1">
                        ${video.authors[0].profile_name} 
                        ${video.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">`: ``} 
                        </p>
                        <p class="text-sm text-gray-400">${video.others.views}</p>
                    </div>
                  </div>
                </div>
              </div>
        `;
        vidContainer.append(vidCard);
    });
}

function loadVideoDetails(videoID){
    console.log(videoID);
    const url =`https://openapi.programming-hero.com/api/phero-tube/video/${videoID}`;
    fetch(url)
    .then((res)=> res.json())
    .then((data) => displayVideoDetails(data.video))
}

function displayVideoDetails(video){

    document.getElementById("video_modal").showModal();
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
    <h2>${video.title}</h2>
    `;

}


loadCatagory();
