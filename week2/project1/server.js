const express = require('express');
const app = express();

const PORT = 9000;

//Database for SciFi Films

let scifi = [
    {
        Title: 'Another Earth',
        Director: 'Mike Cahill',
        Created: '2011',
    },
    {
        Title: 'I Orgins',
        Director: 'Mike Cahill',
        Created: '2014', 
    },
    {
        Title: 'Eternal Sunshine for the Spotless Mind',
        Director: 'Michel Gondry',
        Created: '2004',
    }
]

// Database for Horror Films
let horror = [
    {
        Title: 'Get Out',
        Director: 'Jordan Peele',
        Created: '2017',
    },
    {
        Title: 'The Orphanage',
        Director: 'J.A. Bayona',
        Created: '2007',
    },
    {
        Title: 'The Prodigy',
        Director: 'Nicholas McCarthy',
        Created: '2019',
    }
]
//Database for Romance Films
let romantic = [
    {
        Title: 'Crouching Tiger, Hidden Dragon',
        Director: 'Ang Lee',
        Created: '2000',
    },
    {
        Title: 'A Star is Born',
        Director: 'Bradley Cooper',
        Created: '2018',
    },
    {
        Title: 'Passenger',
        Director: 'Morten Tyldum',
        Created: '2016',
    }
]

// GET 

// SciFi Films
app.get('/scifi', (req, res) => {
    res.send(scifi)
});

// Horror Films 
app.get('/horror', (req, res) => {
    res.send(horror)
});

//Romance Films 
app.get('/romantic', (req, res) => {
    res.send(romantic)
});

// PORT
app.listen(PORT, () => {
    console.log(`The server started on PORT: ${PORT}`)
});