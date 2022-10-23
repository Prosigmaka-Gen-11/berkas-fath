import React from "react";

export default class Lifecycle extends React.Component {
    constructor() {
        super();

        this.state = {
            payment: "",
            donationType: "",
            nickname: "",
            display: ""
        }
    }

    componentDidMount() {
        this.setState({
            payment: "BSI",
            donationType: "Yatim dan Dhuafa",
            nickname: "Hamba Allah"
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.payment!==prevState.payment || this.state.donationType!==prevState.donationType || this.state.nickname!==prevState.nickname) {
            
            this.setState({
                display: `${this.props.name} has donated for ${this.state.donationType} via ${this.state.payment} on behalf of ${this.state.nickname}.`
            })
        }
    }
    componentWillUnmount() {
        this.setState({
            payment: "",
            donationType: "",
            nickname: "",
            display: ""
        })
    }

    render() {
        return <>
            <button
            className="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => this.setState({payment: "BRI"})}>
                Change Payment
            </button>
            <button 
            className="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => this.setState({donationType: "Natural disaster"})}>
                Change Donation Type
            </button>
            <button 
            className="text-white bg-sky-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => this.setState({nickname: "Robin Hood"})}>
                Change Nickname
            </button>
            <br />
            <div className="my-5 ml-20 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Summary of Life Cycle</h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">{this.state.display}</p>
            </div>
        </>
    }
}