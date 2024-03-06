const arr = [
  {
    dp: 'https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww',
  },
  {
    dp: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww',
    story:
      'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww',
  },
  {
    dp: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww',
    story:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww',
  },
  {
    dp: 'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1630255733678-cf82ac59eef8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
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
