import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardActions, CardHeader, Divider, CardContent,  Button, Typography } from '@material-ui/core';


class Product extends Component {
    constructor(props){
        super(props)
        this.state ={
            listProduct:[{
                display: 'san pham1',
                description: 'day la sp1',
                imageUrl: ''
            }],
            total: 0,
            size: 2,
            page: 2,
            showDescripton: []
        } 
    }

    async componentDidMount(){
        const linkApi='http://localhost:5000/api/v1/product'
        const res = await axios.get(linkApi, {     
        })
        console.log(res.data)
        this.setState({
           listProduct: res.data.data,
           total: res.data.metadata.total,
       })
       const showDescripton = this.state.listProduct.map(e=>false)
       console.log(showDescripton)
    }

    renderProduct = (product, index) => {
        return <Card>
            <CardHeader title={product.display + index} style={{backgroundColor: '#bcaaa4'}}>  
            </CardHeader>
            <Divider></Divider>
            <CardActions>
                <img src={product.imageUrl}></img>
            </CardActions>
            <Divider></Divider>
            <CardActions>
            <Button variant="contained" color="inherit" onClick={()=>this.renderDetail(index)}>Chi tiet </Button>
            </CardActions>
            <CardContent>
                {this.state.showDescripton[index]?
            <Typography>
                {product.description}
            </Typography>
                :null
        }       
      </CardContent>
        </Card>
    }

    renderDetail = (index) => {
        console.log(index)
        const newArr = [...this.state.showDescripton];
        newArr[index] = !newArr[index];
        this.setState({
            showDescripton: newArr
        })
    }

    render() {
        return (
            <div>
               {
                this.state.listProduct.map((product, index)=>{
                    return <Card>
                        <CardContent>{this.renderProduct(product, index)}</CardContent>
                        </Card>
                    })
               }
            </div>
        );
    }
}

export default Product;