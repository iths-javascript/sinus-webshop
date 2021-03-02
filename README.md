# SINUS Webshop

## Arbetssätt
### Agilt arbetssätt:

Daily check-in kl 9 - Var är vi? Vad ska vi jobbar med idag?

Daily checkup kl 13 - Går allt som planerat? 

Daily checkout kl 15.50 - hur långt har vi kommit? Någon som vill fortsätta after hours? Vad tänker du jobbar på?

### Trello-board är uppdelat i 4 kolumner: 
To Do
In Progress
To Test/Code Review
Done

To Do - Varje kort är en självständig del av webbsidan med en “Definition of Done”. Färgade etiketter visar dependencies. Alla kort ordnas enligt prioritetsordning (högst prio högst upp) efter diskussion.

In Progress - lägg till vilken /vilka teammedlemmar jobbar på kortet. Ta helst endast ett kort i taget om de inte är beroende av varandra.

To Test - kort som tros vara klara läggs här så att de kan testas i kombination med andra komponenter och koden kan granskas tillsammans (Code Review och merge görs tillsammans)

Done - Kortet är testat och klart.

### Förhållningssätt:

Vi planerar och skapar webbsidans struktur tillsammans så att alla har bra koll på helheten t.ex routes, views, components, API funktioner och vilken data ska finnas i vuex. Vi skapar ett komponentträd diagram med whimsical.com som visuellt stöd. Länk finns på trello.

Vi kommer överens om en Base Styling för hela webbsidan. Base Styling placeras i App.vue

Vi jobbar med pull och inte push när det gäller val av uppgift.

Om man vill fortsätta jobba after hours diskuterar vi vilka uppgifter vi tänker göra på daily checkout för att undvika dubbelt arbete.

Om vi fastnar ber vi varandra om hjälp. Det är helt ok att säga att vi inte vet hur man gör något. 

Vi har en main branch och develop branch på Github. Vi skapar branches utifrån develop branch.

När vi börjar koda gör vi alltid en git pull först så att vi jobbar på den mest up-to-date kodversionen

Vi gör git merges tillsammans ifall det blir något strul och så att alla kan hämta den mest up-to-date kodversionen.

Döp den branch du jobbar på efter den feature du jobbar på. Pusha din branch till github.

Vi stänger av prettier/andra VS Code extensions som formatterar kod för att undvika ändringar i kodformatet.

### Git commands:
Pull: git pull origin branchname
Add: git add filename (git add . för att lägga till alla filer på en gång)
Commit: git commit -m “Ditt meddelande - beskriv vad du gjort så tydligt som möjligt”
Push to github: git push origin branchname
Create new branch: git branch branchname
Change branch: git checkout branchname
Create and change branch combined: git checkout -b branchname
Merge: (on develop branch) git merge branchname
Delete: git branch -d branchname
Status: git status

## VUEX

## Actions:

### Products
#### fetchProducts()
Hämtar alla produkter från API.fetchProducts ch sätter store.products
#### addToCart(payload)
Tar ett produktobjekt som parameter och committar det till cart.items
#### submitOrder()
Skickar state.cart till API.submitOrder och committar svaret (nytt orderobjekt) till SET_CURRENT_ORDER
#### setSearchPhrase(payload)
Sätter state.searchPhrase till payload

### User
#### registerUser(payload)
Tar ett userobjekt som payload och skickar till API.registerUser
Får true eller false tillbaka, dispatchar userObjektets email och password till logIn om true
#### logIn(payload)
Tar email och password som payload och skickar till API.authenticate.
FÅr true eller false tillbaka, committar all userinformation om true 
#### logOut()
Nollar all userinformation

## Instruktioner
Ni ska bygga en FrontEnd till en färdig BackEnd. Se `SINUS Webshop - REST API` nedan för mer information.

Inom gruppen har ni en uppsättning mockups från UI-kursen i höstas, välj en av dessa mockups att utgå ifrån.
Om ni inte kommer överens om vilken ni ska använda så får ni be läraren om en annan.

Skapa en trello board och bjud alla i gruppen, inkl läraren.

## SINUS Webshop

SINUS Webshop är en onlinebutik som säljer skateboards och tillbehör.

Webshoppen ska ha 3 olika lägen
* Anonym besökare
* Inloggad Kund
* Inloggad Admin (VG-krav)

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

# SINUS Webshop - REST API

## Getting Started

1. `cd backend`
2. Install dependencies `npm install`
3. Start the server `npm run start`

## EndPoint Specifikation

| Resurs | Metod | Detaljer | Request Body |
| ------ | ------ | ------ | ------ |
| /api/auth/ | POST | Authentiserar user med email & password. Returnerar en JWT-token som används vid varje anrop API:et i en Authorization-header. | {"email": "...", "password" : "..."} |
| /api/register/ | POST | Registrerar en användare. | Se User-modellen |
| /api/products/ | GET | Returnerar en lista på samtliga produkter. | ❌ | 
| /api/products/:id | GET | Returnerar en enstaka produkt. | ❌ |
| /api/products/ | POST | Skapar en ny produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | PATCH | Uppdaterar produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | DELETE | Tar bort en produkt med :id. Enbart tillgänglig för admins | ❌ |
| /api/orders | GET | Returnerar en lista på den användarens ordrar eller samtliga ordrar för admins. | ❌ |
| /api/orders | POST | Skapar en ny order | Se Order-modellen |
| /api/me | GET | Hämtar den inloggade användren | ❌ |
| /api/me | PATCH | Uppdaterar profilen för den inloggade användren | Se User-modellen |

### Datamodeller

#### Product

##### Request Body
```javascript
 {
  "title": 'Gretas Fury',
  "price": 999,
  "shortDesc": 'Unisex',
  "longDesc": 'Skate ipsum dolor sit amet...',
  "imgFile": 'skateboard-greta.png'
} 
```

##### Document Model
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
##### Request Body
```js
{
  "items": ["productId1", "productId1", "productId2"]
}
```

##### Document Model
```javascript
 {
  _id: 123,
  timeStamp: Date.now(), 
  status: 'inProcess',
  items: [ 
    {
      title: "Tricky",
      price: 799,
      imgFile: "skateboard-generic.png",
      _id: "9E6KXMIdRglW0wbL",
      amount: 2
    }, 
    {
      <etc>
    }, 
    ... 
  ],
  orderValue: 999
} 
```

#### User

##### Request Body
```js
{
  "email": 'greta.thunberg@example.se',
  "password": 'grillkorv123',
  "name": 'Johan Kivi',

  "address": {
    "street": 'Tokitokvägen 3',
    "zip": '123 45',
    "city": 'Tokberga'
  }
} 
```

##### Document Model

```javascript
{
  _id: '6b521d3f-3d15...' // generated server side
  email: 'johan.kivi@zocom.se',
  password: '$$$hashed password$$$', // hashed serverside
  name: 'Johan Kivi',
  role: 'admin', // or customer
  address: {
    street: 'Tokitokvägen 3',
      zip: '123 45',
      city: 'Tokberga'
  },
  orderHistory: [ <orderId1>, <orderId2>, ... ]
} 
```

## Bedömningskritierer

### Godkänt

* State management i Vuex
* Vue Router för navigation
* Demonstrera komponenter, props, emits, data, computed, events
* API-abstraktion till egen modul
* Tydlig feature breakdown i Trello
* Dokumenterat agilt arbetssätt i README
* Inlämnad utvärdering i slutet


### Väl godkänt
* {...godkänt}
* Admin-view för CRUD av produkter
