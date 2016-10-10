# getTpl

getTpl provide a very simple HTML template

It will read a `<script id="mytpl" type="text/template"><span>{{ foo }}</span></script>`

Then parsing via `getTpl('mytpl', {foo:'bar'})`

Return: `<span>bar</span>`