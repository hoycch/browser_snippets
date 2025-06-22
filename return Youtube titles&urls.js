$$('ytd-rich-item-renderer h3.ytd-rich-grid-media #video-title-link')
  .map(el => {
    const name = el.innerText;
    const link = `https://www.youtube.com/${el.getAttribute('href')}`;
    return {name, link};
  })