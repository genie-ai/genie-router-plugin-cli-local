This is a plugin for the [https://github.com/matueranet/genie-router](genie-router)
project. It can be used to send input and receive output in the terminal where genie-router is started.

# Setup

At the plugin location ($HOME/.genie-router), type:

    npm install --save @genie-ai/genie-router-plugin-cli-local

Enable the plugin in your genie-router configuration, by creating an entry with its name.

```json
{
  "plugins": {
    "cli-local": {}
  }
}
```
