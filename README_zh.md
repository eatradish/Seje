# Seje - 寫嘢
一个「白纸黑字」的 Hexo 主题，[效果](https://eatradish.github.io) 以及 [Github](https://github.com/eatradish/saki.li)

## 使用
1. 进入 Hexo 目录，并执行如下命令：

```bash
git submodule add https://github.com/eatradish/Seje.git themes/Seje
```

2. 打开 Hexo 目录下的 `_config.yml`，并将 `theme` 的值设为 `Seje`：

```yaml
theme: Seje
```

3. 执行 `hexo s` 查看效果。

## 配置
在 Hexo 目录下的 `_config.yml` 中的 `theme_config` 修改配置，例如：

```yaml
theme_config:
  # 在菜单中显示归档、关于、RSS 和会员计划
  menu:
    Home: /
    Archives: /archives
    About: /about
    RSS: /rss
    Member: /member
```

所有配置项请参阅[Seje 下的 _config.yml 文件](./_config.yml)。

### 如果你使用 Disqus 评论
1. 在你的 `_config.yml` 配置文件下的 `theme_config` 设置你的 `disqus_shortname` :
  ```yaml
  disqus_shortname: $YOUR_SHORTNAME
  ```

2. 执行 `hexo s` 查看效果。

### 概要 VS 全文？
默认情况下，主页上会显示每篇文章的全文，修改此项可显示文章概要：

```yaml
excerpt: true
```

### 关于图标
把你的 `favicon.png` 复制到 `source` 即可。

你也可以自己设置 favicon 的文件名，如：
```yaml
favicon: foobar.png
```

### 代码高亮
此主题使用 [highlight](https://highlightjs.org/) 实现代码高亮，如果你要打开代码高亮，请在 Hexo 目录下 `_config.yml` 的 `highlight` 添加：

```
enable: true
hljs: true
```

### 播客

Seje 支持播客功能（多亏了 [shikwasa](https://github.com/jessuni/shikwasa)！），下为 Seje 中使用播客的范例：

1. 在 Hexo 目录中安装 hexo-generator-podcast：

```bash
yarn add hexo-generator-podcast
```

2. 在 Hexo 目录的 `_config.yml` 中设置播客信息，如下：

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
  # ...
  podcast: true
```

3. 执行 `hexo new "podcast-test"` 并将以下内容添加到新增的 Markdown 文件中：

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

### 竖排显示
```yaml
vertical: true
```

### 深色模式
- 禁用自动深色模式
  ```yaml
  darkmode: false
  ```
- 始终使用深色模式
  ```yaml
  always_darkmode: true
  ```

### 许可协议
以下配置会在页脚显示「本站文章使用 CC BY-SA 4.0 许可。」：
```yaml
license: 本站文章使用 CC BY-SA 4.0 许可。
```

### 字体镜像
使用Google Fonts的镜像（[fonts.loli.net](fonts.loli.net)），加快国内加载速度：
```yaml
font_mirror: fonts.loli.net
```

### 自定义字体
与 CSS 语法一致，使用单引号「'」括起带有空格的字体名，使用「,」分隔多个字体：
```yaml
custom_font: 'Droid Sans Mono', monospaced
```

### 用中文表示时间
默认启用，时间将显示为「二〇二一年十一月八日」；禁用后，时间将显示为「2021/11/08」。
```yaml
to_chinese_date: false
```

## Bug

- 请定期使用 `git pull` 来修复可能含有的 Bug
- 欢迎提 Issue / Pull requests
