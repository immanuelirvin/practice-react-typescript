import React, {Component} from "react";
import { ICardProps, ICardState } from "./Card.interfaces";
import "./Card.css"

class Card extends Component<ICardProps, ICardState>{
    constructor(props: ICardProps){
        super(props);
        this.state = {
            
        }
    }
    
    render() {

        const {name, count, addCount, reduceCount,index} = this.props;
        return(
            <div className="card">
                <div>{name}</div>
                <div>{count}</div>
                <div>
                    <button onClick={() => addCount(index)}>+</button>
                    <button onClick={() => reduceCount(index)}>-</button>
                </div>
            </div>
        )
    }
}

export default Card;