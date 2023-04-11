import axios from "axios";

 export class pixabayAPI{
    #BASE_URL = 'https://pixabay.com/api/';
    #API_KEY = '35293905-dc99b5737d2ab8084be15efcb';
    
    page = 1;
    per_page = 40;
    q = '';
    total = '';
   
    async fetchCard() {
      try {
        return axios.get(`${this.#BASE_URL}`,{ params: {
      key: this.#API_KEY,
      q: this.q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: this.page,
      per_page: this.per_page, }, });
   }
   catch(err){
    throw new Error(err.message)

   }
}
resetPage() {
  this.page = 1;
}

incrementPage() {
  this.page += 1;
}

setTotal(total) {
  this.totalImages = total;
}

}



