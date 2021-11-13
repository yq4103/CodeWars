const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(library) {
  for (const playlist in library.playlists) {
    console.log(`${playlist}: ${library.playlists[playlist].name} - ${library.playlists[playlist].tracks.length} tracks`);
  }
};

// printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(library) {
  for (const track in library.tracks) {
    console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
  }
};

// printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  console.log(`${playlistId}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks`);
  for (const track of library.playlists[playlistId].tracks) {
    console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
  }
};

// printPlaylist("p01");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks);
};

// addTrackToPlaylist("t03", "p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library
const addTrack = function (name, artist, album) {
  const randomId = generateUid();
  const Id = {Id: randomId};
  name = {"name": name};
  artist = {"artist": artist};
  album = {"album": album};
  library.tracks[randomId] = Object.assign(Id, name, artist, album);
  console.log(library.tracks);
};

// addTrack("yolo", "NANA", "butterfly");

// adds a playlist to the library
const addPlaylist = function (name) {
  const randomId = generateUid();
  const id = {id: randomId};
  name = {"name": name};
  const tracks = {"tracks": Object.keys(library.tracks)};
  library.playlists[randomId] = Object.assign(id, name, tracks);
  console.log(library.playlists);
};

// addPlaylist("new");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {
  query = query.toLowerCase();
  for (const track in library.tracks) {
    if (track.toLowerCase().search(query) >= 0 || library.tracks[track].name.toLowerCase().search(query) >= 0 || library.tracks[track].artist.toLowerCase().search(query) >= 0 || library.tracks[track].album.toLowerCase().search(query) >= 0) {
      console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
    }
  }
};

printSearchResults("Monk");
