![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# stencil-voice2text

st-voice2text is a web component built with [Stencil](https://stenciljs.com/) that allows you to use the [Web Speech API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API).

## Getting Started

To try this component:

```bash
git clone git@github.com:Fdom92/stencil-voice2text.git
cd my-app
git remote rm origin
```

and run:

```bash
npm install
npm start
```

## Using this component

### Script tag

- Put `<script src='https://unpkg.com/stencil-voice2text@0.0.2/dist/voice2text.js'></script>` in the head of your index.html
- Then you can use the element `<st-voice2text>` anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install stencil-voice2text --save`
- Put a script tag similar to this `<script src='node_modules/stencil-voice2text/dist/voice2text.js></script>` in the head of your index.html
- Then you can use the element `<st-voice2text>` anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install stencil-voice2text --save`
- Add `{ name: 'stencil-voice2text' }` to your [collections](https://github.com/ionic-team/stencil-starter/blob/master/stencil.config.js#L5)
- Then you can use the element `<st-voice2text>` anywhere in your template, JSX, html etc

### Make it works

To make this component works, you should pass an input (or ion-input if you are working with ionic) because at the moment an empty component and add a default input is not working.

Here is an example with an input:

```html
<st-voice2text continuous={true}>
    <input type="text"></input>
</st-voice2text>
```

Here is an example with an ion-input:

> I assume you have imported ionic collection

```html
<st-voice2text continuous={true}>
    <ion-input></ion-input>
</st-voice2text>
```

## Parameters

#### continuous

The default value for continuous is false, meaning that when the user stops talking, speech recognition will end.

```html
<st-voice2text continuous={true}>
    <input type="text"></input>
</st-voice2text>
```

#### lang

The default value for lang is `en-US`, meaning that the component will recognize english if no one is passed as attribute.

```html
<st-voice2text lang="es-ES">
    <input type="text"></input>
</st-voice2text>
```

## Customize

You can customize it with this css classes:

#### inactive

This class is used to show or hide the button that is not used. If you start recording, the start button will have the inactive class.