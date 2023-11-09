import React from "react";
import PropTypes from 'prop-types'; 


class ErrorBoundary extends React.Component{
    constructor(props){
       super(props)
       this.state = {hasError:false}
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
    componentDidCatch(error,info){
        console.error(error,info);
    }
    render(){
        if(this.state.hasError){
            return this.props.fallback
        }else{
            return this.props.children
        }
    }
}
ErrorBoundary.propTypes={
    fallback:PropTypes.object,
    children:PropTypes.object
}

export default ErrorBoundary;