import '../styles/MiddleContainer.css';
import Carousel from './Carousel';
import WhatsNew from './WhatsNew';

function MiddleContainer() {
    return (
        <>
            <div className="whatsnew"><Carousel/><WhatsNew/></div>
        </>
    )
}


export default MiddleContainer;