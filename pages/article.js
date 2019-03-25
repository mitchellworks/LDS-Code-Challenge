/* This is the single article page
    uses a shared layout component
    a hero image area
    article content
    and a video component.

    It is a class which gives us easy access to the standard component pre- and post- methods
    including getInitialProps (for the JSON fetch)
    and componentDidMount (to add the Youtube API scripting).
 */

import React, { Component } from 'react';
import '../styles.scss'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Vid from '../components/vid'
import VidScript from '../components/vidScript'
import fetch from 'isomorphic-unfetch'

class Article extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(context) {
        const { id } = context.query;
        const res = await fetch(`https://interview-project-17987.herokuapp.com/api/article/${id}`);
        const article = await res.json();
        return { article }
    }

    componentDidMount() {
        // Here we call the script to interact with the Youtube API,
        // which we want to do after the player is all loaded.
        if (this.props.article.video) {
            VidScript();
        }
    }

    render() {
        // Make sure there is content to display.
        if (!this.props.article) {
            return <h2>Sorry, no content was returned.</h2>;
        }
        return (
            <Layout>
                <h1>{this.props.article.title}</h1>
                <Hero images={this.props.article.images} />
                { this.props.article.content[0].text && <p>{this.props.article.content[0].text}</p> }
                {this.props.article.video && (<Vid title={this.props.article.video.title} description={this.props.article.video.description} url={this.props.article.video.url} />)}
                { this.props.article.content[1] && <p>{this.props.article.content[1].text}</p> }
                { this.props.article.content[2] && <p>{this.props.article.content[2].text}</p> }
            </Layout>
        )
    }
}


export default Article