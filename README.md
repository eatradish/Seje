# saki.li
A boring Hexo theme

## Use
- `git clone https://github.com/eatradish/saki.li.git $HEXO_FLODDER/themes/saki.li` 
  `$HEXO_FLODDER` is your hexo flodder
- edit _config.yml
    ```
    theme: saki.li
    ```

- `yarn add hexo-excerpt`
- `hexo g -d`

### If you use RSS
- `yarn add hexo-generator-feed`
- `edit $HEXO_FLODDE/themes/saki.li/_config.yml` and add `RSS: /atom.xml` `
- `hexo g -d`

### If you use disqus
- Set your disqus_shortname in your hexo `_config.yml` :
  ```
  disqus_shortname: $YOUR_SHORTNAME
  ```

- `hexo g -d`

### except VS Content?
Does every post on your homepage need to show a summary or a whole post? You can modify it in _config.yml. The default is to display a full post. You can change it to this in your `$HEXOFLODDER` to display the summary.

```
excerpt: true
```

### Bug
- [ ] Code block line number cannot close (look https://github.com/hexojs/hexo/issues/3884)

Please use git pull regularly. Bug fixes are guaranteed.
