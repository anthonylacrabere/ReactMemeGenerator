import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => this.setState({
            allMemeImgs: data.memes
        }))
    }

    render() {
        return (
            <h1>MEME GENERATOR SECTION</h1>
        )
    }
}

export default MemeGenerator