let N = parseInt(gets())
let M = parseInt(gets())

let album = [];

for (let i = 0; i < M; i++) {
    let fig = parseInt(gets())

    if (album.indexOf(fig) === -1) {
        album.push(fig);
    }

}

console.log(N - album.length)