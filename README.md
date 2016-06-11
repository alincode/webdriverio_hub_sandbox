# webdriverio hub sandbox

## Target
- test project init
- create config file
- set up test commend

### step 1
```
cd webdriverio_hub_sandbox
npm init -y
npm i webdriverio -D
node node_modules/webdriverio/bin/wdio
mkdir -p test/specs/
mkdir errorShots/
```

**vi package.json**
```
"scripts": {
  "test": "wdio wdio.conf.js"
},
```

## config

`export BASEURL=http://`
