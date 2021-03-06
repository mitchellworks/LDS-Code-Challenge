/* Hero is a class, rather than a functional component, because
    that gives us a chance to set state on the thumbnails, so we can
    style the featured one and replace the main image to match.
 */
import React, { Component } from 'react';

class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            on: '0'
        }
    }

    makeMain = (obj, index) => {
        // update the state, which updates class
        this.setState({on: index});
    };

    render() {
        if (!this.props.images) {
            return null;
        }
            return (
                <div id='hero'>
                    <Main image={this.props.images[this.state.on]}/>
                    <Thumbs makeMain={this.makeMain} images={this.props.images} active={this.state.on}/>
                </div>
            );

    }
}

// This gives us our list of thumbnails.
const Thumbs = (props) => {

    return (
        <div>
            <ul>
                {props.images.map((obj, index) => (
                        <li key={index}>
                            <img title={obj.title} src={"//" + obj.thumbnailUrl} className={(props.active === index) ? 'active' : ''} id={'t-' + index} onClick={() => props.makeMain(obj, index) } />
                        </li>
                    )
                )}

            </ul>
        </div>
    )
};

// This gives us our main image, which is updated whenever the active thumbnail changes.
const Main = ({image}) => {
    return (
        <React.Fragment>
        <div><img src={"//" + image.mainUrl} id='hero-img'/></div>
        <div><h2>{image.title}</h2>
        <h2>{image.description}</h2></div>
        </React.Fragment>
    )
};




export default Hero