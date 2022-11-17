const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];


        //Est-ce que tous les livres ont été au moins empruntés une fois ?

        let rent = books.every(element => {
            return element.rented > 0
        })
        console.log(rent)

        //Quel est livre le plus emprunté ?

        let mostRented = books.sort((a, b) => b.rented - a.rented);
        console.log(mostRented[0]);

        //Quel est le livre le moins emprunté ?

        let lessRented = books.sort((a, b) => a.rented - b.rented);
        console.log(lessRented[0]);

        //Trouve le livre avec l'ID: 873495 ;
       
        let idBook = books.find(element => {
            return element.id === 873495
        })
        console.log(idBook)

        //Supprime le livre avec l'ID: 133712 ;

        removeIndex = books.findIndex( element => element.id === 133712);
        books.splice(removeIndex,1);
        console.log(books);

        //Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

        books.sort((a, b) => a.title.localeCompare(b.title))
        console.log(books)
        
        
        
        










