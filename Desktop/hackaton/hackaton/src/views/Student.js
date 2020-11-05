import React, { Component } from 'react';
import axios from 'axios';
import {Button, Card, CardActionArea, CardActions, CardContent, CardHeader} from '@material-ui/core'

class Student extends Component {
    constructor(props){
        super(props)
        this.state={
            listStudent:[{
                fullName:"nguyen van A",
                student_id:"unknow",
                gender:"unknow"
            }],
            showDetail: [],
        }
    }

    async componentDidMount(){
        const {match : {params}} = this.props;
        const linkApi = `http://localhost:4000/student/${params.class_id}`
        const res = await axios.get(linkApi)
        this.setState({
            listStudent: res.data.data
        })
        const showDetail = this.state.listStudent.map(e=>false)
    }

    renderList=(student, index)=>{
        return <Card>
            <CardHeader title={student.fullName}>   
            </CardHeader>
            <Button variant="contained" color="secondary" onClick={()=>this.renderDetail(index)}>
                Chi tiet
            </Button>
            <CardContent>
                {this.state.showDetail[index]?    
            <CardActions>
                {student.student_id}
                <br></br>
                {student.gender}
            </CardActions>
                :null
            }
            </CardContent>
        </Card>
    }

    renderDetail=(index)=>{
        const newArr = [...this.state.showDetail]
        newArr[index] =! newArr[index]
        this.setState({
            showDetail: newArr
        })
    }

    render() {
        return (
            <div>
                {
                this.state.listStudent.map((student, index)=>{
                    return <Card>
                        <CardContent>{this.renderList(student, index)}</CardContent> 
                    </Card>
                })
            }
            </div>
        );
    }
}

export default Student;