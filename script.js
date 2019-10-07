const jokeImage = document.getElementById("joker-image");
let jokeGif = document.getElementById("joker-gif");

jokeImage.addEventListener("click", function() {
  fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=BMOAGSh7X1RQlhPF31He4HwSFk3jycJU&tag=&rating=G"
  )
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data.data.image_url);
      let url = data.data.image_url;
      jokeGif.innerHTML=`<img src="${url}"/>`;
    });
});

const jokeButton = document.getElementById("joker-button");
let jokeArea = document.getElementById("joker-message");

jokeButton.addEventListener("click", function() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data.value);
      jokeArea.innerHTML = data.value;
    });
});
