# 寫嘢 - Seje
  An Hexo theme.

## Use
1. Open your Hexo flodder and Execute the following command：

```
git clone https://github.com/eatradish/Seje.git theme/Seje
```

2. Open your hexo `_config.yml`, set `theme` value as `Seje`:

```
theme: Seje
```

3. Use `hexo s` see if it works.

### If you use disqus
- Set your disqus_shortname in your `_config.yml` of `$BLOG/themes/Seje` :
  ```
  disqus_shortname: $YOUR_SHORTNAME
  ```

- `hexo g -d`

### Except vs. Content?
Does every post on your homepage need to show a summary or a whole post? You can modify it in `_config.yml`. The default is to display a full post. You can change it to this in your `$HEXOFLODDER/themes/Seje` to display the summary.

```
excerpt: true
```

### About favicon
Copy your `favicon.png` to `$BLOG/source` or `$BLOG/themes/Seje/source`

Now you can set the file name of favicon yourself, just modify the value of `favicon` in the theme` _config.yml`, and copy your file to `$BLOG/source` or `$BLOG/themes/Seje/source`

### Code Highlight
This code highlighting is implemented using [highlight.js](https://highlightjs.org/), If you want to turn on code highlighting, please add the `highlight` in `$BLOG/_config.yml`:

```
enable: true
hljs: true
```

### Podcast

saki.li now support podcast (thanks shikwasa! (https://github.com/jessuni/shikwas)), A case of using podcast on saki.li:

1. install hexo-generator-podcast in your blog foldder:

```
yarn add hexo-generator-podcast
```

2. Set your Podcast info in your `_config.yml`, like this:

```
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
image: /path/to/episode/image # same as above, but somehow itunes doesn't support episode image as it should do
length: 6989--IN_BYTES
type: audio/mpeg
duration: XX:YY:AA
author: AUTHOR
---
一个 Podcast 实例：
{% podplayer %}
```

### Bug
- Please use `git pull` regularly. Bug fixes are guaranteed.
- Issues / Pull requests are welcome
