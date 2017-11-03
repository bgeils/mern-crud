# Open Energy

Providing energy resources to all. 

![Node Version](https://img.shields.io/badge/node-v6.11.0-yellowgreen.svg)
![NPM Version](https://img.shields.io/badge/npm-v3.10.10-blue.svg)
![MongoDB Version](https://img.shields.io/badge/mongodb-v3.4.2-blue.svg)
![Mongoose Version](https://img.shields.io/badge/mongoose-v4.10.8-blue.svg)
![Language: American English](https://img.shields.io/badge/language-american%20english-red.svg)


Live: [https://gentle-scrubland-39988.herokuapp.com/](https://gentle-scrubland-39988.herokuapp.com/)


## Instructions

*Make sure MongoDB service is running.*

For the **back-end**, install the dependencies once via the terminal.
```bash
npm install
```

Run the *main server*. It listens on port 3000.
```bash
CORS=1 node server
```
View it on the browser.

<br>

If you want to configure the **front-end**, go to *react-src* folder via the terminal.

```bash
cd react-src
```

Install the dependencies required by React once.
```bash
npm install
```

Run the *development server* for React. It listens on port 4200.
```bash
REACT_APP_API_URL=http://localhost:3000 npm start
```

To make a production build, simply run on *react-src* folder via the terminal.
```bash
npm run build
```

It re-creates a folder named *public* on the root directory. This is where the production-ready front-end of the web application resides.

## Docker
```bash
docker-compose up
```
<br>

## Heroku 
```bash
git push heroku master
heroku ps:scale web=1
heroku open
```


## To Do

- [ ] Write the to do list

