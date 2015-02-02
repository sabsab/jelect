# Jelect
![Jelect](app/images/jelect.png)<br>
A functional wrapper for a stylized select.

[View example](https://csssr.github.io/jelect/)

## Download
* [The compressed, production jquery.jelect.min.js v1.0.0](https://raw.githubusercontent.com/CSSSR/jelect/master/jquery.jelect.min.js)
* [The uncompressed, development jquery.jelect.js v1.0.0](https://raw.githubusercontent.com/CSSSR/jelect/master/jquery.jelect.js)


## Compatibility

Chrome, Safari, Firefox, Opera, IE9+, IOS4+, Android, Windows Phone.

## Usage

### JavaScript

Include jQuery and the Jelect script in right before your body closing tag.

```html
<script src="/path/to/libs/jquery-2.1.3.min.js"></script>
<script src="/path/to/jquery.jelect.min.js"></script>
```

### CSS

Customize with default or custom CSS classes.

See in [example](https://github.com/CSSSR/jelect/tree/master/src/stylus/jelect.styl).

### HTML

Use a specific class for your options and use the title attribute as caption.

```html
<div id="jelectTool1" role="combobox" class="jelect js-jelect">
	<input id="jelectToolInput" value="0" data-text="gulp" type="text" class="jelect-input js-jelect-input">
	<div tabindex="1" role="button" class="jelect-current js-jelect-current">gulp</div>
	<div role="list-box" class="jelect-options js-jelect-options">
		<div class="jelect-scroller js-jelect-scroller">
			<div data-val="0" tabindex="1" role="option" class="jelect-option js-jelect-option jelect-option_state_active">gulp</div>
			<div data-val="1" tabindex="1" role="option" class="jelect-option js-jelect-option">browser-sync</div>
			<div data-val="2" tabindex="1" role="option" class="jelect-option js-jelect-option">del</div>
			<div data-val="3" tabindex="1" role="option" class="jelect-option js-jelect-option">gulp-autoprefixer</div>
			<!-- ... -->
		</div>
		<div class="jelect-track">
			<div class="jelect-scrollbar js-jelect-scrollbar"></div>
		</div>
	</div>
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
--- | --- | ---
`wrapper` | `'.jelect'` | A Jelect wrapper.
`input` | `'.jelect-input'` | An input type text.
`current` | `'.jelect-current'` | A caption for a current text.
`optionsWrapper` | `'.jelect-options'` | A dropdown wrapper.
`option` | `'.jelect-option'` | An option.
`activeClass` | `'jelect_state_active'` | An active state of Jelect wrapper.
`optionsWrapperActiveClass` | `'jelect-options_state_active'` | An active state of a dropdown wrapper.
`optionActiveClass` | `'jelect-option_state_active'` | An active state of option.

## License

Released under the MIT license.
