# Collor Efect

![demo](./img/demo.gif)

I decided to create this repository for help you to understand some concepts in JavaScript, and CSS, that in my opinion are very importent and useful.

English is not my native language, so sorry for grammatical errors. But you can help-me?!

I have a idea of created this efect _collor_ that see in web site called [coolors](https://coolors.co/palettes/trending). This web site have many collor palets, that I use on my projects, recommend it.

## Let's Started

Create a file html, css and javascript, do not fotget import the _JS_ and _CSS_ inside of html. In html we will create a teg div with __ID coolors__, where we will inject the colors

```html
  <body>
      <div id="coolors"></div>
  </body>
```

Now in file CSS, we will remove some behavior of browser, with _margin_ and _padding_. At the html, we will center everything and put a background color whitesmoke.

```css
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        height: 100vh; 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: whitesmoke;
    }
```

We need stylize the _teg_ _div_ thet us created. For this select _teg_ __#collors__ and we define a width and height, a padding and a background. Now we will stylize the _divs_ is where each color is, for this we will get each one, and well be injected fell _JavaScript_ and defined a standard with height/width and we change the cursor. Notice thet if you do in your page, it not will change. Becouse we don't inject the _divs_ with colors.

```css
    #coolors {
        width: 400px;
        height: 200px;
        padding: 5px; 
        background-color: rgb(41, 41, 41);
        display: flex;
    }

    #coolors div {
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: .2s; 
    }
```


