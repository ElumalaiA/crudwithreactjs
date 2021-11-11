import React,{Component} from 'react'
import { render } from 'react-dom'


export class ButtonClick extends Component{
    constructor(props){
        super(props)

        this.state={
                show:false
            
        }
    }
toggleIn=(value)=>
{
    this.setState({
        buttontype:value
        
    })
}
render() {
    return(
          <div>
              <div className="mt-3">
              <button className="btn btn-primary m-4" onClick={()=>this.toggleIn('Hi')}>Hi</button> 
              <button className="bt btn-secondary m-4" onClick={()=>this.toggleIn('Hello')}>Hello</button>
              <button className="bt btn-secondary m-4" onClick={()=>this.toggleIn('Clear')}>Clear</button>
              </div>
              <div>
                  {
                      this.state.buttontype==='Hi'  && <div>Hi!! I am react</div>
                  }
                  {
                      this.state.buttontype==='Hello'  && <div>Hello!! I am react</div>
                  }
                  {
                      this.state.buttontype==='Clear'  && <div>    </div>
                  }
              </div>
          </div>
          

    )
        

    } 
}

export default ButtonClick