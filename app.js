const express = require('express')
const app = express()

app.use(express.static('public'))
//app.set('view engine', 'hbs')

app.get('/home', (request, response, next) => {
    const result = wrapInsideTemplate(`<h1>Welcome!</h1>
                                       <h2>Discover the life of Dwight Schrute</h2>`)
    response.send(result)
})

app.get('/about', (request, response, next) =>{
    const result = wrapInsideTemplate(`<h1>About</h1>
                                    <iframe src="https://giphy.com/embed/okLCopqw6ElCDnIhuS" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                                    <p>Dwight Kurt Schrute III (born January 20, 1970) is one of the highest-ranking salesmen as well as the original assistant to the regional manager, (disputed), and former Assistant Regional Manager at the paper distribution company Dunder Mifflin. Additionally, he is a bed-and-breakfast proprietor at Schrute Farms, a beet plantation owner, and an owner of the business park in which Dunder Mifflin exists. He is notorious for his lack of social skills and common sense, his love for martial arts and the justice system, and his office rivalry with fellow salesman Jim Halpert.</p>`) 
    response.send(result)
})

app.get('/works', (request, response, next) => {
    const result = wrapInsideTemplate(`<h1>Works</h1>
                                        <h2>Beets Bears Battlestar Galactica</h2>
                                        <p>Schrute Farms is a farm and the residence of Dwight and Mose Schrute. They grow beets, which they sell to local markets, hemp, as well as keeping various animals on a seemingly non-commodified level. It is also an agrotourist attraction.</p>
                                        <img src="images/beets.jpg">
                                        <p>Dwight's business phone number is (717)-555-0177</p>`)
    response.send(result)
})

function wrapInsideTemplate(content){
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Templated Page</title>
        </head>
        <body>
            <a href="/home">Home</a>
            <a href="/works">Works</a>
            <a href="/about">About</a>
        ${content}
        </body>
    </html>`
}

app.listen(3000, () => console.log('My first app listening on port 3000! '))

