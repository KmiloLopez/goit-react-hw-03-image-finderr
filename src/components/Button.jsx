import React, { Component } from 'react';

export class Button extends Component {
    continue = (e) => {
      e.preventDefault();
  };
    render() {
      const {LoadMore, pages, picturesFound} = this.props
      return (
        <>
        {picturesFound===''?null:<button type="button"onClick={LoadMore}>Load More
        </button>}
        

       {/*  {console.log(`Pages ${pages}`)} */}
        </>
        
        
      )
    }
  }
  
  export default Button;
