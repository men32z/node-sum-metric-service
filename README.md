# Node Sum Metric Service
## Project Specifications:

This Project is a node sum metric service where you can make 2 http petitions. <br>

### POST
<b>Format:</b> /{key}/  <b>Body:</b> {"value": (number) }
<b>Example URL:</b> /active_visitors <b>Example Body:</b> {"value": 15 }

### GET
<b>Format:</b> /{key}/sum

## Local Install

```sh
git clone git@github.com:men32z/node-sum-metric-service.git
cd node-sum-metric-service
npm install
```

### Usage

```sh
node index.js
```

You could use [postman](https://www.postman.com/) to try the post/get petitions.

## Built With:

NodeJs, Express, Javascript.
