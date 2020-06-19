# Seje - 寫嘢
寫嘢(se2'je5), An Hexo theme.

## Use
- `git clone https://github.com/eatradish/saki.li.git $HEXO_FLODDER/themes/saki.li`
  `$HEXO_FLODDER` is your hexo flodder

- Modify your `_config.yml` and change your `theme` value to `saki.li`

- `hexo g -d`

### If you use disqus
- Set your disqus_shortname in your `_config.yml` of `$BLOG/themes/saki.li` :
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

### Podcast

saki.li now support podcast (thanks shikwasa (https://github.com/jessuni/shikwas)!), A case of using podcast on saki.li:

```
hexo new "podcast test"
```

Add the following example to the markdown file created:

```
---
title: podcast test
date: 2020-06-19 16:23:38
tags:
---
一个 Podcast 实例：
{% raw %}
    <div class="element-of-your-choice">
        <!-- this is where the player will be injected -->
    </div>
    <script>
        const player = new Shikwasa({
            container: () => document.querySelector('.element-of-your-choice'),
            audio: {
                    title: 'Hello World!',
                    artist: 'Shikwasa FM',
                    cover: '/favicon.png',
                    src: '/mp3/1.mp3',
            },
        });
    </script>
{% endraw %}
```

### Bug
- Please use `git pull` regularly. Bug fixes are guaranteed.
- Issues / Pull requests are welcome
