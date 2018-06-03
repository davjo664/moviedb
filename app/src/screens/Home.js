import React, { Component } from 'react';

import GenreContainer from '../components/GenreContainer'
const allCategories = ["Drama","Action","Fantasy","Crime","Adventure","Animation","Comedy"];

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: ["Drama","Action","Fantasy", "Crime"]
        };
    }


    componentDidMount() {
        document.getElementById('home').addEventListener('scroll', this.handleScroll.bind(this));
    }
  
    componentWillUnmount() {
        document.getElementById('home').removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll(event) {

        
     
        let scrollPos = event.srcElement.scrollTop;

        if (event.srcElement.scrollHeight > event.srcElement.clientHeight+scrollPos-window.innerWidth/4*(4/3)) {
            console.log("Fetch new category");
            if (allCategories.length > this.state.categories.length) {
                this.setState({
                    ...this.state,
                    categories: [...this.state.categories, allCategories[this.state.categories.length]]
                })
            }
        }
    }

    render() {
        const movieGenres = this.state.categories.map((genre) => (
            <div style={{overflow: 'hidden'}}>
                <h4 style={{marginLeft: 10, marginBottom: 4}}> {genre} </h4>
                <div style={{height: window.innerWidth/4*(4/3)}}>
                    <GenreContainer genre={genre} />
                </div>
            </div>
        ))
        return (
            // Footer and header have both 56px height
            <div id='home' style={{overflow: 'scroll', height: window.innerHeight-56*2}}> 
                {movieGenres}
            </div>
        )
    }
}

export default Home;
