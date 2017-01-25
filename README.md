# hayes

nothing to see here.

```javascript
import hayes from 'hayes'

const at = hayes.commandSet(`./sim800.json`).syntax(`basic`)
// .commandSet(path || json || js)

at.CSCS(`IRA`).build()
```
