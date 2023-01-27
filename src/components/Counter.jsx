
import React , {Component} from 'react' 
import  PropTypes  from 'prop-types' 
import './Counter.css'
class Counter extends Component {
  constructor(){
    super();

    this.state={
      Counter:0
    }
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
  }
  render(){
  return( 
  <div className="Counter">
  <CounterButton by= {1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
   <CounterButton by= {5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
   <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
   <div><button className="reset" onClick={this.reset}> reset</button> </div>
   <span className="count">{this.state.Counter}</span>
   </div>);
  }

  reset()
  {
    this.setState( {
        Counter:0
      })

  }

  increment(by) {
    console.log(`increment from parent- ${by}`)
    this.setState

    ({
      Counter:this.state.Counter+ by
    })
    }

    decrement(by) {
      console.log(`decrement from parent- ${by}`)
      this.setState
  
      ({
        Counter:this.state.Counter-by
      })
      } 
}
class CounterButton extends Component {
  constructor(){
    super();

   /*this.state={
      Counter:0
    }
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);*/
  }
 render () 
  {
   return (
    <div className="Counter">
    <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
    <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
   {/*<span className="count">{this.state.Counter}</span>*/}
  </div>)

  }
 /*  increment() {
//console.log("increment from parent")
    this.setState(

    (prevState) =>  {
      return{Counter:prevState.Counter+ this.props.by}
    })
    this.props.incrementMethod(this.props.by)

    }

    decrement() {
      //console.log("decrement from parent")
          this.setState(
      
          (prevState) =>  {
            return{Counter:prevState.Counter -this.props.by}
          })
          this.props.decrementMethod(this.props.by)
      
          } */
    
}
CounterButton.defaultProps= {
  by : 1

}
CounterButton.propTypes ={
  by : PropTypes.number
}

export default Counter 