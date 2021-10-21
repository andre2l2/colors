# Color Efect

![demo](./img/demo.gif)

I decided to create this repository for help you to understand some concepts in JavaScript, and CSS, that in my opinion are very importent and useful.

English is not my native language, so sorry for grammatical errors. But you can help-me?!

I have a idea of created this efect _color_ that see in web site called [coolors](https://coolors.co/palettes/trending). This web site have many color palets, that I use on my projects, recommend it.

## Let's Started

Create a file html, css and javascript, do not fotget import the _JS_ and _CSS_ inside of html. In html we will create a teg div with **ID coolors**, where we will inject the colors

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

We need stylize the _teg_ _div_ thet us created. For this select _teg_ **#colors** and we define a width and height, a padding and a background. Now we will stylize the _divs_ is where each color is, for this we will get each one, and well be injected fell _JavaScript_ and defined a standard with height/width and we change the cursor. Notice thet if you do in your page, it not will change. Becouse we don't inject the _divs_ with colors.

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
  transition: 0.2s;
}
```

We go create a static variable where stay all colors. In event you want to change the colors you can make it. The link of the color stay [here](https://coolors.co/palettes/trending).

```javascript
const allColors = ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"];
```

We need get a _div_ in html, for this I well use _querySelector()_ a internal fuction in JS, and assgn to a variable called _$coolors_. One good pratice is, when you get a teg in HTML you use **$** ahead of variable, but this help a read your code.

```javascript
const $coolors = document.querySelector("#coolors");
```

The most important in my opinion, is thet added more colors in array, your code won't break. Now for each loop in colors.

```javascript
allColors.forEach(() => {
  $coolors.innerHTML += "<div></div>";
});
```

Unfortunately if you will not see noting. But if oppen the _devTools_ in you browser favorite, "I hope it will be Firefox". So you see five _divs_ in you html. interesting isn't it?!

<p align="center"> 
    <img src="./img/devTools.png">
</p>

Now we well colorize all _divs_ "that's when your mind explodes", How I can get all _div_ in html without using _querySelector()_?! Is easy, you can use a _querySelectoraAll()_ this function saved all divs in a array. Now we will use _forEach()_ for inland in a array.

```javascript
// Get all divs inside dev#coolors and return a array with each.
const $allDivColors = document.querySelectorAll("#coolors div");

$allDivColors.forEach((element, index) => {
  // Now we will set color in any divs
  element.style.backgroundColor = `${allColors[index]}`;

  // Here I added event mouse move
  element.addEventListener("mousemove", () => {
    element.style.width = "200%";
  });

  // Here added event mouse out
  element.addEventListener("mouseout", () => {
    element.style.width = "100%";
  });
});
```

if you save and see in your browser, it's work 100% or 99%? I don't know. But now going refectory all code, all developer love it.

<p align="center"> 
    <img src="./img/meme.gif">
</p>

First we going to create two functions, one for create rendering screen and another to colorize, for example:

```javascript
(() => {
  function render() {}

  function color() {}
})();
```

What's it () => {} in code? Is a function auto executed in javascirpt. Now we going put all code inside functions render() and color.

```javascript
    (() => {
    const allColors = [
        '#606c38', 
        '#283618',
        '#fefae0',
        '#dda15e',
        '#bc6c25'
    ];

    function render() {
        const $coolors = document.querySelector('#coolors');

        allColors.forEach(() => {
            $coolors.innerHTML += '<div></div>';
        })
    }

    function color() {
        const $allDivColors = document.querySelectorAll('#coolors div');

        $allDivColors.forEach((element, index) => {
            element.style.backgroundColor = `${allColors[index]}`;
            element.addEventListener('mousemove', () => {
                element.style.width = '200%';
            })
            element.addEventListener('mouseout', () => {
                element.style.width = '100%';
            })
        })
    }

    // Called functions
    render();
    color();
})();
```
Now you can to get more, it's a super power rigth? It's cool! But I finish here.

### How you can help me?

- If you find erros in English, and you can help me? My English is not so bad.