import {createCardMarkup} from './js/markup'
import {pixabayAPI} from './js/API'
import Notiflix from 'notiflix'
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchRefs = {
    gallery: document.querySelector('.gallery'),
    searchForm: document.querySelector('.search-form'),
    loadMore: document.querySelector('.load-more'),
}
searchRefs.loadMore.classList.add('visually-hidden');
const pixabayAPi = new pixabayAPI()

searchRefs.searchForm.addEventListener('submit', onSearchForm)
searchRefs.loadMore.addEventListener('click', onLoadMore)

  async function onSearchForm(e){
    e.preventDefault();
    clearMarkup()
    pixabayAPi.resetPage();
    const seeCard = e.target.elements['searchQuery'].value.trim();
    console.log (seeCard)
    pixabayAPi.q = seeCard.trim();
    if (!seeCard) {
        return Notiflix.Notify.failure('Please enter picture tag you want to find!');
      }

      try{
        const {data} = await pixabayAPi.fetchCard();

        if(data.hits.length === 0){
           Notiflix.Notify.failure(
            'Sorry, there are no images matching your TAG. Please try another TAG.');
          searchRefs.loadMore.classList.add('visually-hidden');
          return
        }
        if(pixabayAPi.page === 1) {
          Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
      }
        
        searchRefs.gallery.insertAdjacentHTML('beforeend', createCardMarkup(data.hits));
        searchRefs.loadMore.classList.remove('visually-hidden');
       
        gallery.refresh()
      }
      catch(error){
        return Notiflix.Notify.failure(
          'Something wrong! ALARM MO^&*$&^&R'
        )
      } 
      
}
async function onLoadMore(e){
  const seeCard = searchRefs.searchForm.elements['searchQuery'].value.trim();
    console.log (seeCard)
    pixabayAPi.q = seeCard.trim();
    pixabayAPi.incrementPage();

    try{
      const {data} = await pixabayAPi.fetchCard();
      searchRefs.gallery.insertAdjacentHTML('beforeend', createCardMarkup(data.hits));
      gallery.refresh()
      Notiflix.Notify.success('Here your next 40 pictures')
    }
    catch(error){
       console.log ('nope nope nope')
    }

}


const gallery = new simpleLightbox(".card a", {
	captions: true,
	captionSelector: "img",
	captionType: "attr",
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});



 function clearMarkup() {
  searchRefs.gallery.innerHTML = '';
}