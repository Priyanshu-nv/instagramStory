const arr = [
  {
    dp: 'https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1709625509094-7947968103ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D',
  },
  {
    dp: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D',
    story:
      'https://images.unsplash.com/photo-1709586742118-31ad5bad3ffc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fHw%3D',
  },
  {
    dp: 'https://images.unsplash.com/photo-1445130406619-1f1289c21242?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNDIzMDd8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1709548189190-714eabf3411f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTE3fHx8ZW58MHx8fHx8',
  },
  {
    dp: 'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1532463241668-48909ef051c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhc3VhbHxlbnwwfHwwfHx8MA%3D%3D',
  },
];

let clutter = '';
let storiya = document.querySelector('#storiya');

arr.forEach((elem, index) => {
  clutter += `<div class="story">
  <img id="${index}"src="${elem.dp}" alt="" /> </div>`;
});

document.querySelector('#storiya').innerHTML = clutter;

storiya.addEventListener('click', (dets) => {
  document.querySelector('#full-screen').style.display = 'block';
  document.querySelector('#full-screen').style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(() => {
    document.querySelector('#full-screen').style.display = 'none';
  }, 2000);
});
