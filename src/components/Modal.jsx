import React, { Component } from 'react'
import { createPortal } from 'react-dom';


export class Modal extends Component {
    /* constructor(props) {
        super(props);
        this.modalContainer = document.createElement('div');
        this.modalContainer.className = 'modal-container';
      } */
    componentDidMount() {
        /* document.body.appendChild(this.modalContainer); */
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        /* document.body.removeChild(this.modalContainer); */
        window.removeEventListener('keydown', this.handleKeyDown);
      }
      handleKeyDown = e => {
        if (e.code === 'Escape') {
          this.props.setModalClose();
        }
      };
      handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
          this.props.setModalClose();
        }
      };
    
  render() {
    const {setModalClose, selectedImage}=this.props;
    return (
        <>
        {/* {console.log("modal opened")} */}
       
        {createPortal(
          <div className="Overlay">
          <div className="Modal" onClick={this.handleBackdropClick}>
          <img src={selectedImage} alt="Imagen" />
            
          </div>
          <button onClick={setModalClose}>
        Cerrar imagen
      </button>
        </div>
          ,
          document.body
        )}
      
      </>
        
    )
  }
}

export default Modal