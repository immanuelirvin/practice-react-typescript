import React, {Component} from "react";
import { IData, IHomePageProps, IHomePageState } from "./HomePage.interfaces";
import Card from "../../components/card/Card";
import "./HomePage.css"

class HomePage extends Component<IHomePageProps, IHomePageState>{
    constructor(props: IHomePageProps){
        super(props);
        this.state = {
            name : "Irvin",
            count : 1,
            data : [
                {
                    name: "Irvin",
                    count: 1
                },
                {
                    name: "Matthew",
                    count: 2
                },
                {
                    name: "Excel",
                    count: 3
                }
            ]
        }
    }

    addCount = (index: number) => {

        let tempData = [...this.state.data];

        tempData[index].count +=1
        
        this.setState({
            data: tempData
        })
        // this.setState((prevState)=>({
        //     count : prevState.count + 1
        // }))
    }

    reduceCount = (index: number) => {

        let tempData = [...this.state.data];

        tempData[index].count -=1
        
        this.setState({
            data: tempData
        })
        // this.setState((prevState)=>({
        //     count : prevState.count - 1
        // }))
    }

    render() {
        const {name, count, data} = this.state

        return (
            <div className="home">
                {/* <Card 
                    name = {name}
                    count = {count}
                /> */}
                {
                    data.map((item: IData, index: number) =>{
                        return (
                            <Card
                                name = {item.name}
                                count = {item.count}
                                addCount={this.addCount}
                                reduceCount={this.reduceCount}
                                index = {index}
                            />
                        )
                    })
                }
                
            </div>
            
        )
    }
}

export default HomePage;