"use strict";
//Album: Write a function called make_album() that builds an Object describing a music album. The function should take in an artist name and an album title, and it should return an Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    const music_album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        music_album.tracks = tracks;
    }
    return music_album;
}
;
const album1 = make_album('Atif Aslam', 'Jal Pari');
console.log(album1);
const album2 = make_album('Rahat Fateh Ali Khan', 'Mai Nai Usay Daikha Hay', 11);
console.log(album2);
const album3 = make_album('Sajjad Ali', 'Goldies not Oldies');
console.log(album3);
