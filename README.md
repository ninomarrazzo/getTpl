# getTpl

Small script that provides a very simple HTML template for your javascript projects.

## Installation
On top of your javascript file :
```javascript
import getTpl from 'gettpl';
```

## Usage 
* The HTML template is in your HTML page (hidden) and contains variables to be replaced :
```html
<script id="my_template_id" type="text/template">
    <span>
        {{ foo }}
    </span>
    <p>
        {{ foo2 }}
    </p>
</script>
```

* In your javascript, call the template with its id and **variables will be replaced via an object**
```javascript
getTpl({ 
    foo:'bar', 
    foo2:'bar2' 
}, 'my_template_id'); 
```

Returns: 
```html
<span>
    bar
</span>
<p>
    bar2
</p>
```


