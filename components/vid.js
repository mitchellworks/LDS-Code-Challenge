/* This video component can be called in any page that has a need for an embedded video */

const Vid = ({ title, description, url }) => {
    if (!title) {
        return null;
    } else {
        return (
            <div id="vid">
                        <iframe id="vid-player" src={url + "?enablejsapi=1"} frameBorder="0"
                                allowFullScreen></iframe>
                        <h5>{title}</h5>
                        <h6>{description}</h6>
            </div>
        );
    }
};



export default Vid