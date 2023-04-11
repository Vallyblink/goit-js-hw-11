export function createCardMarkup (data){
  console.log(data)
  return data.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>  `
     <div class="card">
     <a href="${largeImageURL}" onclick="event.preventDefault()" class="photo-link">
      <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" />
       <div class="info">
          <p class="info-item">
            <b>Likes</b> ${likes}
          </p>
          <p class="info-item">
            <b>Views</b> ${views}
          </p>
          <p class="info-item">
            <b>Comments</b> ${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b> ${downloads}
          </p>
       </div>
      </a>
      </div>`
     )
     .join('')
     
}
