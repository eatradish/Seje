# saki.li
一个「白纸黑字」的 Hexo 主题，[效果](https://eatradish.github.io) 以及 [Github](https://github.com/eatradish/saki.li)

## 使用
- `git clone https://github.com/eatradish/saki.li.git $HEXO_FLODDER/themes/` 
  `$HEXO_FLODDER` 是你的 Hexo 博客文件夹目录
- 修改你的 `_config.yml`，把你的 `theme` 值修改为 `saki.li`
- `yarn add hexo-excerpt` // 添加 Hexo 显示概要插件
- `hexo g -d` // 生成并上传

### 如果你使用 RSS
- `yarn add hexo-generator-feed` //添加订阅插件
- `edit $HEXO_FLODDE/themes/saki.li/_config.yml` and add `RSS: /atom.xml` ` //添加 RSS 导航
- `hexo g -d`

### 如果你使用 Disqus 评论
- 在你的 hexo 目录下的 `_config.yml` 设置你的 `disqus_shortname` :
  ```
  disqus_shortname: $YOUR_SHORTNAME
  ```

- `hexo g -d`

### 概要 VS 全文？
您的主页的的每一个 post 需要显示概要还是一整篇 post 呢？可以在 `_config.yml` 修改它，默认是显示一整篇的 post，你可以在你的 `$HEXOFLODDER` 下的 `_config.yml` 添加这一行，就能只显示概要了：

```
excerpt: true
```

### Bug

- 代码块行号无法关闭 (详细 https://github.com/hexojs/hexo/issues/3884)

请定期使用 `git pull` 来修复可能含有的 Bug
