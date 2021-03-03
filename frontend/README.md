# frontend

## Api

### GET

#### Products

```javascript

{
      axios.get("http://localhost:5000/api/products").then(response => {
        this.results = response.data
        return this.results
      });
 }

```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
