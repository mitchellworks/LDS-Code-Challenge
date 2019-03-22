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


    return (
        <div>
            <img src={"//" + images[0].mainUrl} />
            <h2>{images[0].title}</h2>
            <h2>{images[0].description}</h2>
            <Thumbs />
        </div>
    );
}



export default Hero