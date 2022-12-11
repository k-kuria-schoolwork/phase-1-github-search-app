
function search() {
const form = document.getElementById('#github-form');
form.addEventListener('submit', searchResult)

}

function searchResult(event) {
  event.preventDefault();

const search = event.target.getElementById('search').value;
alert(search)

}

function getUser(userSearch) {
fetch(`https://api.github.com/search/users?q${userSearch}`,{
  method: 'GET',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/vnd.github.v3+json'
}

})
.then(response => response.json())
.then(search => search.items.forEach(displayUser))
.catch(error => consol.log('Hey there!, error'));

}
function displayUser(){
  getUser()
}
