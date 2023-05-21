import { Component } from 'react';
import Button from './Button';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Searchbar from './Searchbar';
import Modal from './Modal';


export class App extends Component {
  state = {
    searchThis: '',
    picturesFound: '',
    status: 'false',
    page: 1,
    isModalShown: false,
    selectedImage:''
    
  };

  onSubmit = () => {
    const { searchThis } = this.state;
    console.log(
      'button clicked and this is searchThis on the State',
      searchThis
    );
    this.fetchInfo();
  };
  handleInput = e => {
    //onChange
    e.preventDefault();
    const { value } = e.currentTarget;
    this.setState({
      searchThis: value,
    });
  };
  handleImageClick = (image) => {
   
    this.setState({ selectedImage: image,
      isModalShown: true });
     /*  console.log("isModalShown",this.state.isModalShown)
      console.log("selectedImage",this.state.selectedImage) */
  };
  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.fetchInfo();
  };

  /* componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchThis !== this.state.searchThis ||
      prevState.page !== this.state.page
    ) {
      this.fetchInfo();
      console.log('hizo this.fetchInfo');
    }
  } */

  
  setModalClose= ()=>{
    this.setState({
      selectedImage: null,
      isModalShown: false 
    })
  }
 fetchInfo = () => {
    const { picturesFound, page } = this.state;   
    this.fetchcall()
      .then(pictures => {
        /* console.log('pictures', pictures); */
        /* const picturees =this.state.picturesFound.join(pictures.hits) */
        if(page>1){
          const morePictures =[...this.state.picturesFound, ...pictures.hits]
          this.setState({
            
            picturesFound: morePictures,
          });
        }
        else{
          this.setState({
            picturesFound: pictures.hits,
          });
        }
        
        /* console.log('from App, this.state, picturesFound is:', picturesFound); */
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  async fetchcall(){
    const { searchThis } = this.state;
    const searchme = encodeURIComponent(searchThis);
    this.setState({ status: 'true' });
    return await fetch(
      `https://pixabay.com/api/?q=cat&page=${this.state.page}&key=34614174-fcdfb58168b28ad843b7da5c7&image_type=photo&orientation=horizontal&per_page=12+"&q=${searchme}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      this.setState({ status: 'false' });
      return response.json();
    });
  };
  render() {
    const { picturesFound, status, isModalShown, selectedImage} = this.state;
    return (
      <div>
        <Searchbar
          onSubmit={this.onSubmit}
          handleInput={this.handleInput}
        ></Searchbar>
        <ImageGallery handleImageClick={this.handleImageClick}>
        {picturesFound.length===0?<p>Sin imagenes para mostrar</p>:<ImageGalleryItem picturesFound={picturesFound} state={status} setModalOpen={this.setModalOpen} handleImageClick={this.handleImageClick} selectedImage={selectedImage}></ImageGalleryItem>}
        </ImageGallery>
        
        {picturesFound.length >= 0
          ? console.log(`se encontraron ${picturesFound.length} imagenes`)
          : console.log('no se encontraron imagenes')}
        <Button LoadMore={this.onLoadMore} pages={this.state.page} picturesFound={this.state.picturesFound} />
        <button onClick={this.setModalOpen} >abrir imagen</button>
        
        { isModalShown === true ? <Modal setModalClose={this.setModalClose} picturesFound={picturesFound} selectedImage={selectedImage}/> :null}
        {/* {selectedImage &&(
          <div className="selected-image-container">
            <img src={selectedImage.fullImageUrl} alt={selectedImage.title} />
          </div>
        )} */}
      </div>
    );
  }
}
