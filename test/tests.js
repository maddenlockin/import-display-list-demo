// import functions under test

const test = QUnit.test;

test('example test...', (expect) => {
    // Arrange
    const expected = true;

    // Act
    const actual = true;

    // Assert
    expect.deepEqual(actual, expected);
});

import { fetchMovies } from '../fetch-utils.js';
import { renderMovie } from '../render-utils.js';

test('test movie render function', async (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class=\"movie\"><h1>Rage of Angels: The Story Continues</h1><p>Rage of Angels: The Story Continues is a Drama</p><ul><li>Daveen</li><li>Trudey</li><li>Bendetta</li></ul></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const movies = await fetchMovies();
    const actual = renderMovie(movies[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
