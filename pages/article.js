import React, { Component } from 'react';
import Layout from '../components/layout'
import Hero from '../components/hero'
import Vid from '../components/vid'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

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

    render() {
        return (
            <Layout>
                <Hero images={this.props.article.images} />
                <h1>{this.props.article.title}</h1>
                <p>{this.props.article.content[0].text}</p>
                <Vid title={this.props.article.video.title} description={this.props.article.video.description} url={this.props.article.video.url} />
            </Layout>
        )
    }
}


export default Article