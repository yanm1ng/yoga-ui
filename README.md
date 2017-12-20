# yoga-ui

![](https://travis-ci.org/yanm1ng/yoga-ui.svg?branch=develop)

> A Vue.js 2.0 UI Component for Mobile

## Develop

```bash
  git clone https://github.com/yanm1ng/yoga-ui yoga-ui && cd yoga-ui
  npm install # install dependencies
  npm run dev
```
Open your bowser and visit [localhost:8080](http://localhost:8080)

## Install

```bash
  npm install yoga-ui --save
```

## Usage

1. Global
```javascript
import yogaUI from 'yoga-ui'
import { ToastPlugin, ConfirmPlugin, AlertPlugin } from 'yoga-ui/plugins'

// install components
Vue.use(yogaUI)
// install plugins
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
```

2. Components
```javascript
<script>
import {
  XButton
} from 'yoga-ui/src/components'

export default {
  components: {
    XButton
  }
}
</script>
```

## Test && Lint

```bash
npm run test # run unit test
npm run lint # run eslint
```

## Components

[See](https://github.com/yanm1ng/yoga-ui/tree/master/src/components)

## LICENSE

MIT
