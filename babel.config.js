console.log('CONFIG')


export default {
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }]
  ],
  "plugins": [
    ["babel-plugin-inline-import", {
      "extensions": [
        ".graphql",
        ".cdc"
      ]
    }]
  ]
}
