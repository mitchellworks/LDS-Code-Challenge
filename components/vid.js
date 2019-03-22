import Link from 'next/link'

const Vid = ({ title, description, url }) => (
    <div>
        <Link href="/">
            <div>
                <video controls>
                    <source src={url}></source>
                </video>
                <a>{title}</a>
                <a>{description}</a>
            </div>
        </Link>
    </div>
)

export default Vid