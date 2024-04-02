import { Component } from "react";

class Carousel extends Component{
    state = {
        active: 0
    }

    static defaultProps = {
        images : ["http://pets-images.dev-apis.com/pets/none.jpg"]
    }
    //Handles an event from onclik opperations
    // firts it need to be an arrow function.
    handleIndexClic = (event) => {
        //Javascript weirness: +"5" equals to number 5
        // target.dataset makes references to all HTML attributes.
        this.setState({
            active : +event.target.dataset.index,
        })
    }

    render(){
        const { active } = this.state;
        const { images } = this.props;
        
        return (
            <div className="carousel">
                <img src={images[active]} alt="animal hero" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                        onClick={this.handleIndexClic}
                        data-index={index}
                        src={photo}
                        key={photo}
                        className={index === 0 ? "active" : "" }
                        alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;