import {createCardMarkup} from './js/markup'
import {pixabayAPI} from './js/API'
import Notiflix from 'notiflix'

const searchRefs = {
    gallery: document.querySelector('.gallery'),
    searchForm: document.querySelector('.search-form')
}

const pixabayAPi = new pixabayAPI()

searchRefs.searchForm.addEventListener('submit', onSearchForm)

  async function onSearchForm(e){
    e.preventDefault();

    const seeCard = e.target.elements['searchQuery'].value.trim();
    console.log (seeCard)
    pixabayAPi.q = seeCard.trim();
    if (!seeCard) {
        return Notiflix.Notify.failure('Please enter picture tag you want to find!');
      }

      const {data} = await pixabayAPi.fetchCard();
      searchRefs.gallery.insertAdjacentHTML('beforeend', createCardMarkup(data.hits));
    
}