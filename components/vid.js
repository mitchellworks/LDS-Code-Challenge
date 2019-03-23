import Link from 'next/link'

const Vid = ({ title, description, url }) => {
    if (!title) {
        return null;
    } else {
        return (
            <div id="vid">
                <Link href="#">
                    <div>
                        <video controls>
                            <source src={url}></source>
                        </video>
                        <h5>{title}</h5>
                        <h6>{description}</h6>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Vid