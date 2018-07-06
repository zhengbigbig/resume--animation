var result = `/* 
 * 面试官你好，我是XXX
 * 我将以动画的形式来介绍自己
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{margin:0;padding:0;box-sizing:border-box;transition:all 1s;}
html{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    padding:16px; 
    border:1ox solid #aaa;
    height:100%;
    overflow:hidden;
}
/*高亮起来*/
.token.property{
  color: #905;
}
.token.selector{
  color: #690;
}
.token.function{
  color: #DD4A68;
}
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
@keyframes breath{
  0% {box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.4);}
  100%{box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.75);}
}
/*我需要一张白纸来自我介绍*/
.codeStyle{
     border:10px solid transparent;
     position:fixed;
    left:0;
    width:50%;
    height:100%;

}
#paper  .content{
  display:block;
}
`
var code1 = `/* 于是我就可以在白纸上写字了，请看右边 */`


function writeCode(prior,code,fn) {
    var demCode = document.querySelector('#code')
    var n = 0
    var id = setInterval(()=>{
        n +=1
    demCode.innerHTML = Prism.highlight(prior + code.substring(0,n), Prism.languages.css, 'css');
    styleTag.innerHTML = prior + code.substring(0,n)
    demCode.scrollTop = demCode.scrollHeight
    if(n >= code.length){
        window.clearInterval(id)
        fn.call()
    }
},10)
}
var result2 = `
  #paper{
    position:fixed;
    right:0;
    width:50%;
    height:100vh;
    padding:16px;
    background:black;
    border:0.9px solid black;
  }
  #paper .content{
    background:white;
    width:100%;
    height:100%;
  }
  `
var code2 =`/*
 * 这就是我的会动的简历
 * 谢谢观看
 */`
function createMarkdown (fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var markdown = document.createElement('pre')
    markdown.className = 'content'
    markdown.id = 'markdown'
    paper.appendChild(markdown)
    document.body.appendChild(paper)
    fn.call()
}
writeCode('',result,()=>{
    createMarkdown(()=>{
    writeCode(result,result2,()=>{
       writeCode(result+result2,code1,()=>{
        writeMarkdown(()=>{
           writeCode(result+result2+code1,code2,()=>{

        })
        })
    })
    })
    })
})

var md = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`



function writeMarkdown(fn) {
    var markdown = document.querySelector('#paper > .content')
    var n = 0
    var id = setInterval(()=> {
        n += 1
    markdown.innerHTML = md.substring(0, n)
    markdown.scrollTop = markdown.scrollHeight
    if (n >= md.length) {
        window.clearInterval(id)
        fn.call()
    }
},10)
}

