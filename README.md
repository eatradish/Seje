# 寫嘢 - Seje
寫嘢（Se2'Je5）, A beatutiful Hexo Theme

[简体中文](./README_zh.md)

## Install
1. Open your Hexo flodder and Execute the following command：

```bash
git submodule add https://github.com/eatradish/Seje.git themes/Seje
```

2. Open your hexo `_config.yml`, set `theme` value as `Seje`:

```yaml
theme: Seje
```

3. Using `hexo s` see if it works.

## Configure
Edit config in `theme_config` of `_config.yml` :

```yaml
theme_config:
  # Always use dark mode
  always_darkmode: true
```

### If you using disqus
1. Set your disqus_shortname in your `theme_config` of `_config.yml` :
  ```yaml
  theme_config:
    disqus_shortname: $YOUR_SHORTNAME
  ```

2. Using `hexo s` see if it works.

### Excerpt vs. Content?
Homepage will show full content of every post in default. You can set this to show the summary:

```yaml
excerpt: true
```

### Favicon
Copy your `favicon.png` to `source`.

You can also set the file name of favicon yourself:
```yaml
favicon: foobar.png
```

### Code Highlight
This code highlighting is implemented using [highlight.js](https://highlightjs.org/), If you want to turn on code highlighting, please add the `highlight` in `_config.yml` of your Hexo:

```yaml
highlight:
  enable: true
  hljs: true
```

### Podcast

Seje support podcast feature (thanks [shikwasa](https://github.com/jessuni/shikwasa)!), A case of using podcast on Seje:

1. install hexo-generator-podcast in your Hexo foldder:

```bash
yarn add hexo-generator-podcast
```

2. Set your Podcast info in your Hexo `_config.yml`, like this:

```yaml
podcast:
    type: rss2
    path: podcast.xml
    limit: 20
    hub:
    url: https://URL/to/static/resources
    description: 
    language: zh-CN
    copyright: "COPYRIGHT"
    owner: ITUNES-OWNER
    email: ITUNES-EMAIL
    category: CATEGORY

theme_config:
  podcast: true
```

3. `hexo new "podcast-test"` and add the following example to the markdown file created:

```
---
title: podcast test
date: 2020-06-19 16:23:38
tags:
subtitle: SUBTITLE
category: podcast # must be exactly `podcast`
media: /path/to/media # placed under //URL/to/static/resources/path/to/media
image: /path/to/episode/image # same as above, but somehow iTunes doesn't support episode image as it should do
length: 6989--IN_BYTES
type: audio/mpeg
duration: XX:YY:AA
author: AUTHOR
---
A instance of Podcast:
{% podplayer %}
```

### Vertical Display
```yaml
vertical: true
```

### Dark Mode
- Disable auto dark mode
  ```yaml
  darkmode: false
  ```
- Always use dark mode
  ```yaml
  always_darkmode: true
  ```

### License
This will display "CC BY-SA 4.0" at the foot of page:
```yaml
license: CC BY-SA 4.0
```

### Mirror Service of Font
Use mirror of Google Fonts ([fonts.loli.net](fonts.loli.net) in this example) to speed up loading:
```yaml
font_mirror: fonts.loli.net
```

### Custom Font
Same as CSS syntax. Use `'` to include the font name with space, use `,` to split multiple fonts:
```yaml
custom_font: 'Droid Sans Mono', monospaced
```

### Display date in Chinese
Enabled in default, date will be displayed as "二〇二一年十一月八日". Date will be display like "2021/11/08" after disabled.
```yaml
to_chinese_date: false
```

## Bug
- Please use `git pull` regularly. Bug fixes are guaranteed.
- Issues / Pull requests are welcome
