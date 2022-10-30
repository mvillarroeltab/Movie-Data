let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

var movieArray = [];
for (title in movieData) {
  var data = movieData[title];
  data.title = title;
  movieArray.push(data);
}

console.log(movieArray);

function render(items) {
  var index = 0;
  while (index < items.length) {
    let item = items[index];
    document.getElementById(`${index + 1}`).innerHTML =
    `<img class="image-m" src="./images/${item.title}.jpg" alt="Movie1" />`
    + "<h1>" + item.title + "</h1>"
    + "<br>"
    + "<p>" + item.plot + "</p>"
    + "<p>Rating: " + item.rating + "</p>"
    + "<p>Runtime: " + item.runtime + "</p>"
    + "<p>Year: " + item.year + "</p>";
    + "<p>Cast: " + item.cast.toString() + "</p>";

    index = index + 1;

  }

};
render(movieArray);

// Function to sort by rating

function sort1rating (){
function sortByRating(a, b) {
  if (a.rating > b.rating) {
    return -1;
  } else {
    return 1;
  }
}
movieArray.sort(sortByRating);

render(movieArray);
}

let sort1 = document.getElementById('rat');
sort1.addEventListener ('click', sort1rating);

// Function to sort by year

function sort1year (){
function sortByYear(a, b) {
  if (a.year > b.year) {
    return -1;
  } else {
    return 1;
  }
}
movieArray.sort(sortByYear);

render(movieArray);
}

let sort2 = document.getElementById('yea');
sort2.addEventListener ('click', sort1year);

function sort1runt (){
function sortByRuntime(a, b) {
  if (a.runtime > b.runtime) {
    return -1;
  } else {
    return 1;
  }
}
movieArray.sort(sortByRuntime);

render(movieArray);
}

let sort3 = document.getElementById('runt');
sort3.addEventListener ('click', sort1runt);

// const movie1 = "The Darjeeling Limited";
// const first = movieData[movie1];
//
// const movie2 = "The Royal Tenenbaums";
// const second = movieData[movie2];
//
// const movie3 = "Fantastic Mr. Fox";
// const third = movieData[movie3];
//
// const movie4 = "The Grand Budapest Hotel";
// const fourth = movieData[movie4];
//
// console.log(first);
//
// document.getElementById("1").innerHTML = Object.values(first);
// document.getElementById("2").innerHTML = Object.values(second);
// document.getElementById("3").innerHTML = Object.values(third);
// document.getElementById("4").innerHTML = Object.values(fourth);
