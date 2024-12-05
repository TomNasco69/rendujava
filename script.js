



fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {

      let   imagejavascript = document.createElement("img")
        

        let div1 = document.getElementById("div1");
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let buttonHeader = document.createElement("button");
        
        h1.textContent = data.nomCommercial;
        div1.appendChild(h1);
        h2.textContent = data.texteAccroche;
        div1.appendChild(h2);
        buttonHeader.textContent = data.texteBouton;
        div1.appendChild(buttonHeader);



        let div2 = document.getElementById("div2");

        data.promessesClient.forEach(promesses => {
            let h2Promesse = document.createElement("h2")
            h2Promesse.textContent = promesses
            div2.appendChild(h2Promesse)
        });

        
        
        let nosPlats = document.getElementById("nosPlats")
       
      

        data.plats.forEach(element => {
            let divPlats = document.createElement("div")
            nosPlats.appendChild(divPlats)
            let image = document.createElement("img")
            let h3 = document.createElement("h3")
            h3.textContent = element.nom;
            h3.textContent = element.desc;
            divPlats.appendChild(image)
            image.src = element["image-url"];
            divPlats.appendChild(h3);
            divPlats.className='plat'
            image.className='plat'
            
        })
       
        data.services.forEach(service => {
            let Services = document.getElementById("Services");
            let div3 = document.createElement("div");
           

            Services.appendChild(div3);
            let h4 = document.createElement("h4");
            div3.appendChild(h4);
            h4.textContent= service.nom;
            let p3= document.createElement("p")
            div3.appendChild(p3)
            p3.textContent= service.desc;
          });
         data.temoignages.forEach(témoignage => {
          let Avis = document.getElementById("Avis");
          let div4 = document.createElement("div");
          Avis.appendChild(div4);
          let h4A = document.createElement("h4");
          div4.appendChild(h4A);
          h4A.textContent= témoignage.prenom;
          let p4 = document.createElement("p");
          div4.appendChild(p4);
          p4.textContent= témoignage.typeExperience;
          let p5 = document.createElement("p");
          div4.appendChild(p5);
          p5.textContent= témoignage.commentaire
          let p6 = document.createElement("p")
          div4.appendChild(p6)
          p6.textContent= témoignage.note
         });
  
    
        
    }).catch(error => console.error('Error:', error));
