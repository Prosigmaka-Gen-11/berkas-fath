import { Component } from "react";

export const Name = 'fathiyah'
export const Age = 18

export default class Children extends Component {
    render() {
        return <div>
            <h2>Aku children {this.props.name}</h2>
            <button onClick={()=> this.props.sebutNama('ahmad')}>
                sebut nama
            </button>
        </div>
    }
}