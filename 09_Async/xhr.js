document.getElementById('button').addEventListener('click',
  loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data/data.txt', true);


  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }


  // One way to do it
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML =
        `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function () {
    console.log('Request error...')
  }

  // Older way
  // xhr.onreadystatechange = function () {
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }


  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3. processing request
  // 4. request finished and response is ready


}