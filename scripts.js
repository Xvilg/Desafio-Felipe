function GetDados() {
    fetch("https://reqres.in/api/users").then(res => res.json()).then(dados => {
        const Dado = dados.data;
        for (i = 0; i < Dado.length; i++) {


            const GetTbody = document.querySelector("tbody");
            const createTr = document.createElement("tr");
            const createTh = document.createElement("th");

            const text = document.createTextNode(i + 1)
            createTh.setAttribute("scope", "row")
            createTh.appendChild(text)
           
            


            for (D = 1; D < 6; D++) {
                const createTd = document.createElement("td")
                const TextTd = document.createTextNode("")
                createTd.appendChild(TextTd)
                createTr.appendChild(createTd)
                const Dt = dados.data[i];


                if (D == 1) {
                    createTd.textContent = Dt.id;
                } else if (D == 2) {
                    createTd.textContent = Dt.email;
                } else if (D == 3) {
                    createTd.textContent = Dt.first_name;
                } else if (D == 4) {
                    createTd.textContent = Dt.last_name;
                } else {

                    const link = document.createElement("a")
                    

                    const buro = document.createElement("i");
                    buro.setAttribute("class", "fab fa-buromobelexperte")    
                    
                    

                    if (Dt.first_name.length < 5) {
                        const appleAlt = document.createElement("i");
                        appleAlt.setAttribute("class", "fas fa-apple-alt")


                        createTd.appendChild(appleAlt)   

                    } else {
                        link.setAttribute("href", Dt.avatar) 
                        
                        const apple = document.createElement("i");
                        apple.setAttribute("class", "fab fa-apple");
                        
                        
                                                                        
                        createTd.appendChild(apple)                                                                                                     
                    }
                    
                    createTr.appendChild(createTd)
                    GetTbody.appendChild(createTr)

                    link.appendChild(buro)
                    createTd.appendChild(link)
                }

            }
            
        }

    })


}
GetDados()