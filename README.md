# Viewer

Default Viewer for [oh-my-github](https://github.com/oh-my-github/oh-my-github), See [Demo](http://1ambda.github.io/oh-my-github)

Supported Browsers

- Chrome (Recommended)
- Safari
- Firefox
- IE 11+

## Usage

See [oh-my-github](https://github.com/oh-my-github/oh-my-github)

## Customization

1. Edit `app/src`

```
$ cd app
$ npm install
$ npm start -s
```

2. Build src and Run it on localhost

```
$ npm run build
$ npm run open:dist
```

## Register your customized viewer to NPM

Modify theses fields in `app/package.json`.
 
```json
{
  ...
  
  "name": "oh-my-github-viewer-default",
  "version": "0.0.1",
  "author": "1ambda",
  "description": "",
  "homepage": "https://github.com/oh-my-github/viewer#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/oh-my-github/viewer.git"
  },
  "bugs": {
    "url": "https://github.com/oh-my-github/viewer/issues"
  },
  
  ...
}
```

Then publish it to NPM (See Also, [Publishing NPM packages](https://docs.npmjs.com/getting-started/publishing-npm-packages))

```
$ cd app
$ npm publish
```

## Contributors

- [nyybb](https://github.com/nyybb)
- [NohSeho](https://github.com/NohSeho)

## Library

| **Description** | **Library** | **Github**|
|----------|------|------|
| Boilerplate | [react-slingshot](https://github.com/coryhouse/react-slingshot) | [Github](https://github.com/coryhouse/react-slingshot)  |
| UI Layout Library | [Materialize CSS](http://materializecss.com/) | [Github](https://github.com/Dogfalo/materialize) |
| UI Component Library | [Material UI](http://www.material-ui.com/) | [Github](https://github.com/callemall/material-ui) |

## License

Apache 2.0
