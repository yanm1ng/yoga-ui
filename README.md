# yoga-ui

![](https://travis-ci.org/yanm1ng/yoga-ui.svg?branch=develop)

> A Vue.js 2.0 UI Component for Mobile

## Demo

```bash
  git clone https://github.com/yanm1ng/yoga-ui yoga-ui && cd yoga-ui
  npm i
  npm run dev
```

## Install

1. Global
```javascript
import yogaUI from 'yoga-ui'
import { ToastPlugin, ConfirmPlugin, AlertPlugin } from 'yoga-ui/plugins'

// use components
Vue.use(yogaUI)
// use plugins
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
```

2. Component
```javascript
import {
  XButton
} from 'yoga-ui/src/components'

export default {
  components: {
    XButton
  }
}
```

## Test && Lint

```bash
npm run test // run unit test
npm run lint // run eslint
```

## Components

[See](https://github.com/yanm1ng/yoga-ui/tree/master/src/components)

## LICENSE

MIT
