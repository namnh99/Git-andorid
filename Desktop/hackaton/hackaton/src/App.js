import React, { Component } from 'react';
import axios from 'axios'
import {Button, Card, CardActions, CardHeader} from '@material-ui/core'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      listClass:[{
      class_id: '01',
      className: 'mon hoc'
      }],
    }
  }

  async componentDidMount(){
    const linkApi = "http://localhost:4000/class";
    const res = await axios.get(linkApi)
    console.log(res.data)
    this.setState({
      listClass: res.data.data,
    })
  }

 renderClass = (e) => {
    return <Card>
       <CardActions>
        {e.class_id}
      </CardActions>
      <CardHeader title={e.className}>
      </CardHeader>
      <Button variant="contained" color="inherit" onClick={()=>this.renderDetail(e.class_id)}>
        Chi tiet lop
      </Button>
    </Card>
 }

  renderDetail = (el) =>{ 
    window.location.assign(`http://localhost:4000/student/${el}`)
  } 

  render() {
    return (
      <div>
        {this.state.listClass.map((e)=>{
          return <Card>
            {this.renderClass(e)}
          </Card>
        })}
      </div>
    );
  }
}

export default App;