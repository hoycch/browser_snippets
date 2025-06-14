$$('.media-item-rating-icon.smile+div')
  .map(el => {
    const rating = parseFloat(el.innerText);
      const bottom = el.closest('.media-item-content-bottom');
      const name = bottom.previousElementSibling.innerText;
      const views = bottom.querySelector('.media-item-content-count').innerText;
      
    return {name, rating, views};
  }).sort((a, b) => b.rating - a.rating);