var form = document.getElementById("myForm");
form.addEventListener('submit', function(e){
    e.preventDefault();
    var search = document.getElementById("search").value;


    //remove the space
    var originalName = search.split(' ').join('');

    document.getElementById("result").innerHTML = "";

  //fetch call to api
  fetch("https://api.github.com/users/"+search)
  .then((result) => result.json())
  .then((data) => {
     console.log(data);
     document.getElementById("result").innerHTML = `
    <a target="_blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}" class="img-fluid" style="align: center;" alt="Responsive image"/></a>
     
     `
  })
});