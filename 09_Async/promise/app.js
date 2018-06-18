const posts = [
  {
    title: 'Post One', body: 'This is post one'
  },
  {
    title: 'Post Two', body: 'This is post two'
  }
]

function createPost(post) {
  return new Promise(function (resolve, reject) {


    setTimeout(() => {
      posts.push(post);
      // 1 to 10
      const randomNum = Math.floor(Math.random() * 10) + 1;

      const isError = randomNum % 2 != 0;

      if (!isError) {
        resolve();
      } else {
        reject(`Error ${randomNum}: Something went wrong.`)
      }
    }, 1000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;

  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(function (error) {
    console.log(error);
  });
