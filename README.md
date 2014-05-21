# Jelect
A functional wrapper for a stylized select.

[View example](https://csssr.github.io/jelect/)

## Download
* [The compressed, production jquery.jelect.min.js v0.1.0](https://github.com/CSSSR/jelect/tree/master/jquery.jelect.min.js)
* [The uncompressed, development jquery.jelect.js v0.1.0](https://github.com/CSSSR/jelect/tree/master/jquery.jelect.js)


## Compatibility

Chrome, Safari, Firefox, Opera, IE9+, IOS4+, Android, Windows Phone.

## Usage

### JavaScript

Include jQuery and the Jelect script in right before your body closing tag.

```html
<script src="js/libs/jquery-2.1.1.min.js"></script>
<script src="js/jquery.jelect.min.js"></script>
```

### CSS

Customize with default or custom CSS classes.

See in [example](https://github.com/CSSSR/jelect/tree/master/src/stylus/jelect.styl).

### HTML

Use a specific class for your links and use the title attribute as caption.

```html
<div class="jelect" role="select">
    <input id="jelect" name="tool" value="0" data-text="imagemin" type="text" class="jelect-input">
    <div class="jelect-current" tabindex="0" role="button">imagemin</div>
    <ul class="jelect-options">
        <li class="jelect-option jelect-option_state_active" data-val='0' tabindex="0" role="option">imagemin</li>
        <li class="jelect-option" data-val='1' tabindex="0" role="option">stylus</li>
        <li class="jelect-option" data-val='2' tabindex="0" role="option">cssmin</li>
        <li class="jelect-option" data-val='3' tabindex="0" role="option">autoprefixer</li>
        <!-- ... -->
    </ul>
</div>
```

### Fire the plugin

Bind Jelect behaviour on every link with the `.jelect` class.

```javascript
$( '.jelect' ).jelect();
```

To get a current value bind `change` on an inner input element.

```javascript
$( '#jelect' ).on( 'change', function (e) {
    console.log( this.value + ' | ' + this.dataset.text );
});
```

### Default Options

Uses for custom CSS classes.

Key | Value | Description
--- | ---
wrapper | '.jelect' | A Jelect wrapper.
input | '.jelect-input' | An input type text.
current | '.jelect-current' | A caption for a current text.
optionsWrapper | '.jelect-options' | A dropdown wrapper.
option | '.jelect-option' | An option.
activeClass | 'jelect_state_active' | An active state of Jelect wrapper.
optionsWrapperActiveClass | 'jelect-options_state_active' | An active state of a dropdown wrapper.
optionActiveClass | 'jelect-option_state_active' | An active state of option.

## License

Released under the MIT license.
