**Web Fronetend Application**
-----------------------------

Application designed to interface into a [Flask API](https://github.com/podit/flawsk) to allow for web based graphing of data.

- Very simple applications of both javascript http requests and the javascript graphing library [C3](https://c3js.org/) a simplified [D3](https://d3js.org/) derivative.

- Should work out of the box. Libraries are imported over the web so a connection to the internet is required. However they can also be 'curl'-ed if need be.

The main web frontend is contained within frontend.html and chart.js, with the rest being additional features developed separately from the main frontend

Switching between local and AWS
-------------------------------

To change from requesting the data from the server hosted on AWS to getting data from a local server simply switch the commented urls out with the ones currently within use.

- The AWS server will be hosted till the end of September 2018, and then I'll terminate it.

Additional files
-----------------
zcan.html

- Contains a Canldestick plot for the finanial data using [TechanJS](http://techanjs.org/) (a fincncial graphing JS library) with D3v4 (with the current version being v5). Whilst the two D3 versions seem to be compatible I cannot say with confidence. And TechanJS at least for the moment appears to be unsupported. However this is the stronger solution for making candlestick plots in my opinion.
    - A zoom function is also implemented in this example, allowing for even large datasets to be analyzed accurately (although an extremely large dataset likely will not run smootly)

gcan.html

- Contains a candlestic plot created with [Google Charts](https://developers.google.com/chart/) - A much more simplistic plotting library, although it is less versiatile than D3
