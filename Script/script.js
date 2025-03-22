function loadCatagory() {
    // Fetch the data

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories));
}

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


loadCatagory();