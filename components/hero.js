import Link from 'next/link'

const Hero = ({images}) => {
    const Thumbs = () => {
        return (
            <ul>
                {images.map(obj => (
                    <li key={obj.thumnailUrl}>
                        <Link onClick={(e) => makeMain(obj, e)}>
                            <img src={"//" + obj.thumbnailUrl} />
                        </Link>
                    </li>
                ))}

            </ul>
        )
    }

    const makeMain = (obj, e) => {
        // add active class (remove other actives)
        console.log("makeMain fired");
        // target and update main image
    }

    if (!images) {
        return null;
    } else {
        return (
            <div id='hero'>
                <div><img src={"//" + images[0].mainUrl} /></div>
                <div><h2>{images[0].title}</h2>
                    <h2>{images[0].description}</h2></div>
                <div><Thumbs /></div>
            </div>
        );

    }
}



export default Hero