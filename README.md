# u-ico
Universal Icon using different icon fonts

## ussage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nuxodin/u-ico@1.0.0/fonts.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nuxodin/u-ico@1.0.0/u-ico.css">

<u-ico style="--u-ico-font:'RemixOutlined'">twitter</u-ico>

```
## theming / custom css properties
`--u-ico-font:'LigatureSymbols'` Defines the font used for the icons  
`--u-ico-color:red` The default is currentColor  
`--u-ico-size:1.5rem` the font-size of the icon  

## font sets
fonts.css has the following predefined font-families.
As fonts only load if they are used, its not as huge as it sounds.  
At the moment there are this font-sets:  

https://material.io/resources/icons/
- font-family: 'Material Icons';
- font-family: 'Material Icons Outlined';
- font-family: 'Material Icons Round';
- font-family: 'Material Icons Sharp';
- font-family: 'Material Icons Two Tone';

https://remixicon.com/  
- font-family: 'RemixOutlined';
- font-family: 'RemixFilled';

http://kudakurage.com/ligature_symbols/  
- font-family: 'LigatureSymbols';

## custom icon font
Just ad this to your CSS:

```css
@font-face {
    font-family: 'my icon font';
    font-style: normal;
    font-weight: 400;
    src: url(my-icon-font.woff2) format('woff2');
}
html {
    -u-ico-font:'my icon font';
}
```

## optional javascript (beta)
If you add the javascript, the icon falls back to its text if it could not load.
And adds a warning to the console.

```html
<script type=module src="https://cdn.jsdelivr.net/gh/nuxodin/u-ico@1.0.0/main.js"></script>
```
