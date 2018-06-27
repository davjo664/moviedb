// Link.react.test.js
import React from 'react';
import Detail from './Detail';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import DetailContainer from '../container/DetailContainer';

const movie = {
    movieid: '318925',
    watched: false,
    title: 'Test movie',
    overview: 'This is a test movie',
    vote_average: '8.5',
    vote_count: '1002',
    poster_path: '/5riPuUoFczB4NKHRneJTsdeHsSS.jpg',
    release_date: '1993-01-12',
    _id: '22'
}

test('Detail screen for test movie', () => {
  const component = renderer.create(
    <BrowserRouter>
        <DetailContainer movie={movie}/>
    </BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const component = TestUtils.renderIntoDocument(
    <BrowserRouter>
        <DetailContainer movie={movie}/>
    </BrowserRouter>
);

it("Shows correct image poster", function () {
    var img = TestUtils.findRenderedDOMComponentWithTag(
        component, 'img'
    );

    expect(ReactDOM.findDOMNode(img).src)
        .toEqual("https://image.tmdb.org/t/p/w300/"+movie.poster_path);
});

it("Renders correct title", function () {
    var h1 = TestUtils.findRenderedDOMComponentWithTag(
       component, 'h1'
    );

    expect(ReactDOM.findDOMNode(h1).textContent)
        .toEqual(movie.title);
});

it("Renders correct movie information", function () {
    var h4 = TestUtils.scryRenderedDOMComponentsWithTag(
       component, 'h4'
    );

    expect(h4.length).toEqual(3);

    expect(ReactDOM.findDOMNode(h4[0]).textContent)
        .toEqual(movie.overview);
    
    expect(ReactDOM.findDOMNode(h4[1]).textContent)
        .toEqual(movie.vote_average+'/10 on average out of '+movie.vote_count+' votes');

    expect(ReactDOM.findDOMNode(h4[2]).textContent)
        .toEqual(movie.release_date);
});

it("'add to watchlist' button exists", async () => {

    var btn = TestUtils.scryRenderedDOMComponentsWithTag(
       component, 'button'
    );

    expect(btn).toBeDefined();
    
    // await TestUtils.Simulate.click(btn[1]);

});
