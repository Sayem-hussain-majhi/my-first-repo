const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword ='';
let page = 1;
async function searchImgs(){
    keyword = searchBox.Value;
    const url = `https://api.unsplash.com/search/photos?page=1&query=office=${page}$query=${keyword}&client_id=${accessKey}`
}