import React from 'react';

class ConsumerWrapper extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <this.props.context.Consumer>
                {context=>(
                    <this.props.component value = {context}/>
                )}
            </this.props.context.Consumer>
        )
    }
}

export default ConsumerWrapper;