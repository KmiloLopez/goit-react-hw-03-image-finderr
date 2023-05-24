import React, { Component } from 'react';
import { Buttonn } from './Styled.components/Button.styled';

export class Button extends Component {
    continue = (e) => {
      e.preventDefault();
  };
    render() {
      const {LoadMore, picturesFound} = this.props
      return (
        <>
        {picturesFound&&<Buttonn type="button"onClick={LoadMore}>Load More
        </Buttonn>}
        

       {/*  {console.log(`Pages ${pages}`)} */}
        </>
        
        
      )
    }
  }
  
  export default Button;
