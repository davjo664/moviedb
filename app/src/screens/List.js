import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/FooterBar'

class List extends Component {

    render() {
        return (
            <div>
                <HeaderBar />
                    <div> List </div>
                <FooterBar />
            </div>
        )
    }
}

export default List;