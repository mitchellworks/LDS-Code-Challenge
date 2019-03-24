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
        const { id } = context.query
        const res = await fetch(`https://interview-project-17987.herokuapp.com/api/article/${id}`)
        const article = await res.json()
        return { article }
    }

    componentDidMount() {
        VidScript();
    }

    render() {
        if (!this.props.article) {
            return null;
        }
        return (
            <Layout>
                <h1>{this.props.article.title}</h1>
                <Hero images={this.props.article.images} />
                { this.props.article.content[0].text && <p>{this.props.article.content[0].text}</p> }
                <Vid title={this.props.article.video.title} description={this.props.article.video.description} url={this.props.article.video.url} />
                { this.props.article.content[1] && <p>{this.props.article.content[1].text}</p> }
                { this.props.article.content[2] && <p>{this.props.article.content[2].text}</p> }
            </Layout>
        )
    }
}


export default Article