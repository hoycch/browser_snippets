console.table($$('.poi-list-cell-desktop-main-section')
  .map(el => {
    const name = el.querySelector('.poi-list-cell-link').innerText;
    const rating = parseFloat(el.querySelector(".smile>.text").innerText);
      const location = el.querySelector('.poi-list-cell-line-info-link span:nth-child(2)').innerText;
    const views = el.querySelector('.tbb-count')?.innerText || '';
      
    return {location, name, rating, views};
  }).sort((a, b) => b.rating - a.rating))