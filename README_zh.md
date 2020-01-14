# saki.li
一个「白纸黑字」的 Hexo 主题，[效果](https://eatradish.github.io) 以及 [Github](https://github.com/eatradish/saki.li)

## 使用
1. `git clone https://github.com/eatradish/saki.li.git $BLOG/themes/`
   `$BLOG` 是你的 Hexo 博客文件夹目录

2. 修改你的 `_config.yml`，把你的 `theme` 值修改为 `saki.li`

3. `yarn add hexo-excerpt` 添加 Hexo 显示概要插件

4. `hexo g -d` // 生成并上传

### 如果你使用 Disqus 评论
1. 在你的 `$BLOG/themes/saki.li` 目录下的 `_config.yml` 设置你的 `disqus_shortname` :

```
disqus_shortname: $YOUR_SHORTNAME
```

2. `hexo g -d`

### 概要 VS 全文？
您的主页的的每一个 post 需要显示概要还是一整篇 post 呢？可以在 `_config.yml` 修改它，默认是显示一整篇的 post，你可以在你的 `$HEXOFLODDER/themes/saki.li` 下的 `_config.yml` 添加这一行，就能只显示概要了：

```
excerpt: true
```

### 关于 logo 字体
Logo 字体使用了 `Noto Serif` 400 ，你可以在 `source/css/_partial/post.styl` 的 `blog-title .logo` 下的 `font-family` 改成其他的值，个人比较推荐搭配 Google Fonts 使用，把 Google Fonts 要粘贴的 Html 代码粘贴在 `layout/_partial/head.ejs` 即可

### 关于图标
把你的 `favicon.ico` 复制到 `$BLOG/source` 或 `$BLOG/themes/saki.li/source` 即可

### 代码高亮
此主题使用 [highlight](https://highlightjs.org/) 实现代码高亮，如果你要打开代码高亮，请在 `$BLOG/_config.yml` 的 `highlight` 添加：

```
enable: true
hljs: true
```

### Bug

- 请定期使用 `git pull` 来修复可能含有的 Bug
- 欢迎提 Issue / Pull requests
