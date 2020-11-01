import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';

class ProductItem extends Component {
    constructor(props){
        super(props)
        this.state={
            display:'san pham 1',
            imageUrl: '',
            priceSale: 1,
        }
    }

    async componentDidMount(){
        const {match: {params}} = this.props;
        const linkApi = `http://localhost:5000/api/v1/product/${params.id}`
        const res = await axios.get(linkApi,{        
        })
        console.log(res.data.data.priceSale)
        this.setState({
            display: res.data.data.display,
            imageUrl: res.data.data.imageUrl,
            priceSale: res.data.data.priceSale,
        })
    }

    render() {
        return <Card>
           <CardHeader title={this.state.display}>
           </CardHeader>
           <CardActions>
               <img src={this.state.imageUrl} ></img>
           </CardActions>
           <CardContent>
             {this.state.priceSale}$
           </CardContent>
        </Card>
    }
}

export default ProductItem;