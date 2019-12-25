# saki.li
A boring Hexo theme

## Use
- `git clone https://github.com/eatradish/saki.li.git $HEXO_FLODDER/themes/saki.li` 
  `$HEXO_FLODDER` is your hexo flodder
- Modify your `_config.yml` and change your `theme` value to `saki.li`
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

### Except VS Content?
Does every post on your homepage need to show a summary or a whole post? You can modify it in `_config.yml`. The default is to display a full post. You can change it to this in your `$HEXOFLODDER/themes/saki.li` to display the summary.

```
excerpt: true
```

### Center layout
That is to try to center, you can set `always_mobile_layout` to` true` in the theme `_config.yml` and try it?

### About logo fonts

The logo font uses `Noto Serif` 400 italics. You can change the font-family under blog-title.logo in `source/css/_partial/post.styl` to other values. I personally recommend using it with Google Fonts and pasting Google Fonts. Html code can be pasted in `layout/_partial/ head.ejs`

### Bug
- Please use `git pull` regularly. Bug fixes are guaranteed.
- Issues / Pull requests are welcome
