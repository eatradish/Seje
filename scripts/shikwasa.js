hexo.extend.tag.register('podplayer', function(args){
    return `
    <div class="podcast"></div>\
    <script>\
        const player = new Shikwasa({
            container: () => document.querySelector('.podcast'),\
            audio: {\
                title: '${this.subtitle}',\
                artist: '${this.author}',\
                cover: '${this.image}',\
                src: '${this.media}',\
            },\
            fixed: {\
                type: 'static',\
            },\
        });\
    </script>`
});