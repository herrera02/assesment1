// 0-1000
for (let i = 1000; i >= 0; i--) 
if (i % 2 === 0) 
   console.log(i);


// 1000-0
for (let i = 0; i <= 10000; i++) {
    if (i === 2500) {
        alert("A quarter of the way there!");
    } else if (i === 5000) {
        alert("Halfway there!");
    } else if (i === 10000) {
        alert("The loop is done!");
    }
}
// Top 5 favorite 
const favoriteTVShows = ['South Park', 'Family guy', 'Spongebob', 'Riverdale', 'The 100'];
for (let i = 0; i < favoriteTVShows.length; i++) {
    console.log("My #" + (i+1) + " favorite tv show is " + favoriteTVShows[i]);
}