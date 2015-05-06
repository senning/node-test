#Run the app
```
node app.js
```


#Run Grunt to compile with webpack
```
grunt dev
```

#What to look for
* React components (/views/*.jsx) are rendered as HTML by node
* Code in React components (/views/mainbutton.jsx) gets run on the component
* app.js in the root controls the server, views/client.js is compiled by webpack in to /views/assets/app.js
* Annotations in the Gruntfile walk through it