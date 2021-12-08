import './Carousel.css';


import Carousel from 'react-material-ui-carousel'

function Carousel1(props)
{
    var images = [
        {
            url:"https://wallpapercave.com/wp/trlzN6b.jpg"
        },
        {
            url:"https://wallpapercave.com/wp/wp2809591.jpg"
        },
        {
            url:"https://cdn.wallpapersafari.com/28/73/TcRMwS.jpg"
        },
        {
            url:"https://images.wallpaperscraft.com/image/single/lake_mountains_forest_152659_1920x1080.jpg"
        }
    ]

    return (
        <Carousel
        indicators={false}
        animation="slide"
        stopAutoPlayOnHover={true}
        className="carousel">
            {
                images.map( (item, i) => <img src={item.url}></img> )
            }
        </Carousel>
    )
}


export default Carousel1;