import React, {Component} from 'react';
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Directions from './component/directions/directions';
import Pictures from './component/pictures/pictures';
import pictures from './pictures'

class App extends Component {
    constructor() {
        super();
        this.state = {
            pictures: pictures,
            score: 0,
            highScore: 0,
            message: 'Click to Win!'
        };

    }
    // state = {
    //     pictures: pictures,
    //     score: 0,
    //     highScore: 0
    // };
    shufflePictures = (picState) => {


        picState.sort( () => 0.5 - Math.random());

    };
    handleClick = (clicked, id) => {
        console.log(this.state);

        // let score = this.state.score;

        if(clicked){
            this.shufflePictures(this.state.pictures);
            // console.log(this.state);

            console.log('you lose');
            console.log(`this is what was clicked: ${JSON.stringify(this.state.pictures[id-1])}`);
            console.log(`this is what was clicked: ${id}`);

            // console.log(`lose state: ${JSON.stringify(this.state)}`);
            // let clickValues = this.state
            const setValuesFalse = this.state.pictures.map( pics => pics.clicked = false);
            // console.log(`old state: ${JSON.stringify(this.state.pictures)}`);
            if(this.state.score > this.state.highScore){
                this.setState({
                    highScore: this.state.score
                })
            }
            this.setState({
                setValuesFalse,
                score: 0,
                message: 'LOOOOOOOOSEEEEERRRRR'
            });
            // console.log(`new state: ${JSON.stringify(this.state.pictures)}`)
        }else {

            console.log('click again');
            console.log(`this is what was clicked: ${JSON.stringify(this.state.pictures[id-1])}`);
            console.log(`this is what was clicked: ${id}`);
            this.state.pictures.forEach( item => {
                if(item.id === id){
                    item.clicked = true
                }
            });

            // this.state.pictures[id-1].clicked = true;
            this.state.score = this.state.score + 1;
            // console.log(this.state.score);
            this.setState({
                pictures: this.state.pictures,
                score: this.state.score++,
                message: 'Guess Again!'
            });
            this.shufflePictures(this.state.pictures)



        }

    };

    render() {
        return (
            <div>
                <Header
                    message={this.state.message}
                    score={this.state.score}
                        highScore={this.state.highScore}
                />
                <Directions/>
                <div className="container pictureContainer">
                    <div className="row">
                        {this.state.pictures.map(picture => (
                            <Pictures
                                      key={picture.id}
                                      {...picture}
                                      handleClick={this.handleClick}
                            />
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
