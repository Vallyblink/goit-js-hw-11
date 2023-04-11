export function createCardMarkup (data){
  console.log(data)
  return data.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>  `
     <div class="card">
     <a class="photo-card" href="${largeImageURL}">
     <img class="photo-card-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
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
      </div>`
     )
     .join('')
     
}
