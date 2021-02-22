# SINUS Webshop

## Instruktioner
Ni ska bygga en FrontEnd till en färdig BackEnd.

## SINUS Webshop

SINUS Webshop är en onlinebutik som säljer skateboards och tillbehör.

Webshoppen ska ha 3 olika lägen
* Anonym besökare
* Inloggad Kund
* Inloggad Admin

### Anonym besökare
Det ska finnas en `registrerings`-view med ett registreringsformulär.
En order kan genomföras som anonym användare.

### Inloggad Kund
Det ska finnas en `My Account`-view med information om ditt konto och din orderhistorik.

### Inloggad Admin (VG-krav)
Det ska finnas en `Admin Area`-view med ett CRUD-gränssnitt för alla produkter.

### Övriga Views och Features
* En view för produktlista
* En view utcheckning med formulär för kontaktinfo och betalinfo, fylls i automagiskt om man är inloggad
* modal för enstaka produkt
* Modal för kundkorg
* Modal för inloggningsformulär


### API Specifikation

| Resurs | Metod | Detaljer |
| ------ | ------ | ------ |
| /api/auth/ | POST | Authentiserar user med email & password. Returnerar en JWT-token som används vid varje anrop API:et i en Authorization-header. |
| /api/register/ | POST | Registrerar en user enligt User-modellen. |
| /api/products/ | GET | Returnerar en lista på samtliga produkter. |
| /api/products/:id | GET | Returnerar en enstaka produkt. |
| /api/products/ | POST | Skapar en ny produkt, se produkt-modell. Enbart tillgänglig för admins |
| /api/products/:id | PATCH | Uppdaterar produkt, se produkt-modell. Enbart tillgänglig för admins |
| /api/products/:id | DELETE | Tar bort en produkt med :id. Enbart tillgänglig för admins |
| /api/orders | GET | Returnerar en lista på samtliga ordrar för admins, och ägda orders för inloggad användare. |
| /api/orders | POST | Skapar en ny order, se order-modell. |


# SINUS Webshop - REST API

## Getting Started

1. Install dependencies `cd backend`
2. Install dependencies `npm install`
3. Seed the database with `node database/seed.js`
4. Start the server `node app.js`

### Datamodeller

#### Product

```javascript
 {
    _id: '39y7gbbZk1u4ABnv', // generated serverside
    title: 'Gretas Fury',
    price: 999,
    shortDesc: 'Unisex',
    longDesc: 'Skate ipsum dolor sit amet...',
    imgFile: 'skateboard-greta.png' // Asset logic on clientside
} 
```

#### Order
```javascript
 {
    _id: 123,
    timeStamp: Date.now(), 
    status: 'inProcess',
    items: [ <productId1>, <productId2>, ... ], // Array of product IDs
    orderValue: 999
} 
```

#### User
```javascript
 {
    _id: '6b521d3f-3d15...' // generated server side
    email: 'johan.kivi@zocom.se',
    password: '$$$hashed password$$$',
    name: 'Johan Kivi',
    role: 'admin', // or customer

    adress: {
        street: 'Tokitokvägen 3',
        zip: '123 45',
        city: 'Tokberga'
    },
    orderHistory: [ orderId1, orderId2, ... ]
} 
```

