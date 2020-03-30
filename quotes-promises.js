function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  function getQuotes(url) {
    return getJSON(url);
  }

  function renderQuoteList(data) {
    const tBody = document.getElementById('tbody');
    let a = 0;
    let b = 4;
    let c = 8;
    let d = 12;
    let e = 16;
    let f = 20;
    let g = 24;

    let monCol = 1;
    let tueCol = 2;
    let wedCol = 3;
    let thuCol = 4;
    let friCol = 5;
    let satCol = 6;
    let sunCol = 7;

    data.forEach(function(quote) {
      if(a < 4 && b < 8 && c < 12 && d < 16 && e < 20 && f < 24 && g < 30){
        // create row
        let listItem = document.createElement('tr');
        // fill column
        listItem.innerHTML = `
            <td onclick="changeBox()">${monCol} ${data[a]}</td>
            <td onclick="changeBox()">${tueCol} ${data[b]}</td>
            <td onclick="changeBox()">${wedCol} ${data[c]}</td>
            <td onclick="changeBox()">${thuCol} ${data[d]}</td>
            <td onclick="changeBox()">${friCol} ${data[e]}</td>
            <td onclick="changeBox()">${satCol} ${data[f]}</td>
            <td onclick="changeBox()">${sunCol} ${data[g]}</td>`;
    
        //add the list item to the list
        tBody.appendChild(listItem);
        a++;
        b++;
        c++;
        d++;
        e++;
        f++;
        g++;
        monCol += 7;
        tueCol += 7;
        wedCol += 7;
        thuCol += 7;
        friCol += 7;
        satCol += 7;
        sunCol += 7;
      }
    });
    
  }
  
  // controller code
  function showQuotes(url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes/40/') {
    getQuotes(url).then(function(data) {
      renderQuoteList(data);
      console.log(data[0]);
    });
  }


  showQuotes();
