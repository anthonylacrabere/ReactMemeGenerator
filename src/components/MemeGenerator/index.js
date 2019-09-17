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
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data 
            
            this.setState({
            allMemeImgs: memes
            })
        })
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
           <div>
               <form className="meme-form">
                    <input 
                        name="topText"
                        placeholder="text du haut"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                    <input 
                        name="bottomText"
                        placeholder="text du bas"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Generate</button>
               </form>
           </div>
        )
    }
}

export default MemeGenerator