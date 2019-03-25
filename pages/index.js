/* This is the app homepage. It displays a dynamic list of linked articles.
*   it could be a class, but here is is just a functional component with no state.
* */

import Layout from '../components/layout'
import '../styles.scss'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const Index = (props) => (
    <Layout>
        <div>
            <h1>Articles</h1>
        </div>
        <ul>
            {props.articles.map(obj => (
                <li key={obj.url}>
                    <Link as={`/article/${obj.url}`} href={`/article?id=${obj.url}`}>
                        <a>{obj.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://interview-project-17987.herokuapp.com/api/article');
    const data = await res.json();

    return {
        articles: data
    }
};

export default Index
