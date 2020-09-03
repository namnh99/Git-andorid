import {

  Card, Typography, Button, CardHeader, Divider, CardContent, CardActions

} from '@material-ui/core'
const React = require('react') // ES6
const axios = require('axios')


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      listProduct: [{
        display: 'san pham moi 1',
        description: 'dep trai 1',
        imageUrl: ''
      }, {
        display: 'san pham moi 1',
        description: 'xinh gai 2',
        imageUrl: ''
      }],
      total: 0,
      size: 4,
      page: 2,
      showDescripton: false
    }
  }

  async componentDidMount() {
    const linkApi = 'http://localhost:5000/api/v1/product'
    const res = await axios.get(linkApi, {
      params: {
        size: this.state.size,
        page: this.state.page,
      }
    })
    console.log(res.data)
    this.setState({
      listProduct: res.data.data,
      total: res.data.megadata.total
    })
  }

  hamRenderProduct = (product) => {
    return <Card>
      <CardHeader title={product.display} style={{ backgroundColor: '#bcaaa4' }} ></CardHeader>
      <Divider></Divider>
      {/* <CardContent>
        <Typography>
          {product.description}
        </Typography>
      </CardContent> */}
      <Divider></Divider>
      <CardActions>
        <img src={product.imageUrl}></img>
      </CardActions>
      <Divider></Divider>
      <CardActions>
    <Button variant="contained" color="inherit" onClick={()=>this.renderData()}>Chi tiet </Button>
      </CardActions>
       <CardContent>
          {this.state.showDescripton?
            <Typography>
              {product.description}
            </Typography>
            :null
          }       
      </CardContent>
    </Card>
  }

  renderData() {
    this.setState({
      showDescripton: !this.state.showDescripton
    })
  }

  backPage = () => {
    this.setState({ page: this.state.page - 1 })
    if (this.state.page === 1) {
      this.setState({ page: this.state.page })
    }
    this.componentDidMount()
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
    if (this.state.page === Math.ceil(this.state.total / this.state.size)) {
      this.setState({ page: this.state.page })
    }
    this.componentDidMount()
  }

  render() {
    return <div>
      <Button>Total: {this.state.total} </Button>
      <Divider></Divider>
      <Button>Page: {this.state.page} </Button>
      <Divider></Divider>
      <Button>Size: {this.state.size} </Button>
      <Divider></Divider>
      <Button>Paging: {this.state.page} - {Math.ceil(this.state.total / this.state.size)} </Button>
      <Divider></Divider>

      <Button variant="contained" onClick={this.backPage} color="secondary" >back</Button>
      <Button variant="contained" onClick={this.nextPage} color="secondary" >next</Button>
      {
        this.state.listProduct.map((product) => {
          return <Card>
            <CardContent> {this.hamRenderProduct(product)} </CardContent>
          </Card>
        })
      }
    </div>
  }
}


export default HomePage;
