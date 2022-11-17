// write render function for each of the 4 domains

export function renderMovie(movie) {
    const div = document.createElement('div');
    div.classList.add('movie');

    const h1 = document.createElement('h1');
    h1.textContent = movie.name;

    const p = document.createElement('p');
    p.textContent = `${movie.name} is a ${movie.genre}`;

    const ul = document.createElement('ul');
    for (let star of movie.stars) {
        const li = document.createElement('li');
        li.textContent = star;
        ul.append(li);
    }

    div.append(h1, p, ul);
    return div;
}
