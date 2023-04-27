      // main tag refrence 
      const main = document.querySelector('main');



      // three jokes
      const joke1 = "What do a tick and the Eiffel Tower have in common? They're both Paris sites";
      const joke2 = "What do you call a fish wearing a bowtie? Sofishticated";
      const joke3 = "f April showers bring May flowers, what do May flowers bring? Pilgrims";



      // Define the html template

      const jokeList = `

        <ul>

          <li>${joke1}</li>
          <li>${joke2}</li>
          <li>${joke3}</li>
        </ul>

    `;
      main.innerHTML = jokeList;



      // Create a new paragraph element
      const paragraph = document.createElement('p');



      paragraph.textContent = "That's all folks !";


      
      // Append the paragraph to body tag 
      
      document.body.appendChild(paragraph);