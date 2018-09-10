**Web Fronetend Application**
-----------------------------

Application designed to interface into a [Flask API](https://bitbucket.org/tomody/flawsk/src/default/) to allow for web based graphing of data.

- Very simple applications of both javascript http requests and the javascript graphing library [C3](https://c3js.org/) a simplified [D3](https://d3js.org/) derivative.

- Should work out of the box. Libraries are imported over the web so a connection to the internet is required. However thet can also be 'curl'-ed if need be.

Switching between local and AWS
-------------------------------

To change from requesting the data from the server hosted on AWS to getting data from a local server simply switch the commented urls out with the ones currently within use.

- The AWS server will be hosted till the end of September 2018, and then I'll terminate it.
