/* This would be a good place for a full navigation, but we'll just link
    to the articles list, for now.
 */

import Link from 'next/link'

const Header = () => (
    <div id="header">
        <Link href="/">
            <a>Articles</a>
        </Link>
    </div>
);

export default Header