
# css-swap-test

  Quickly swap css properties in/out to get correct calculations

  see this jquery [issue](http://bugs.jquery.com/ticket/13543)

## Installation

  Install with [component(1)](http://component.io):

    $ component install jb55/css-swap-test

## API

```javascript
var swap = require('css-swap-test');
swap(body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
  var hasBoxSizing = div.offsetWidth === 4;
});
```


## License

  MIT
