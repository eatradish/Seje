# saki.li
A boring Hexo theme

## Use
- `git clone https://github.com/eatradish/saki.li.git $HEXO_FLODDER/themes/saki.li`
  `$HEXO_FLODDER` is your hexo flodder

- Modify your `_config.yml` and change your `theme` value to `saki.li`

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

### About logo fonts
The logo font uses `Noto Serif` 400 italics. You can change the font-family under blog-title.logo in `source/css/_partial/post.styl` to other values. I personally recommend using it with Google Fonts and pasting Google Fonts. Html code can be pasted in `layout/_partial/ head.ejs`

### About favicon
Copy your `favicon.png` to `$BLOG/source` or `$BLOG/themes/saki.li/source`

Now you can set the file name of favicon yourself, just modify the value of `favicon` in the theme` _config.yml`, and copy your file to `$BLOG/source` or `$BLOG/themes/saki.li/source`

### Code Highlight
This code highlighting is implemented using [highlight.js](https://highlightjs.org/), If you want to turn on code highlighting, please add the `highlight` in `$BLOG/_config.yml`:

```
enable: true
hljs: true
```

### Bug
- Please use `git pull` regularly. Bug fixes are guaranteed.
- Issues / Pull requests are welcome
