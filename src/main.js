const $siteList = $('.siteList')
const $lastLi = $('.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject||[{logo:'A',url:'https://www.acfun.cn',logoType:'text'},
{logo:`<svg class="icon" aria-hidden="true">
<use xlink:href="#icon-bilibili"></use>
</svg>`,url:'https://www.bilibili.com',logoType:'image'}
]
const simplifyUrl = (url)=>{
    return url.replace('https://','').replace('http://','').replace('www.','').replace(/\/.*/,'')
}
const render = ()=>{
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node,index)=>{
    const $newLi = $(`<li>
        <div class="site">
        <div class="logo">${node.logo}</div>
        <div class="link">${simplifyUrl(node.url)}</div>
        <div class="close"><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-close"></use>
        </svg></div>
        </div>
        </li>`).insertBefore($lastLi)
        $newLi.on('click',()=>{
            window.open(node.url)
        })
        $newLi.on('click','.close',(e)=>{
            e.stopPropagation()
            hashMap.splice(index,1)
            render()
        })
    })
}

render()
$(".addButton")
.on('click',()=>{
   let url = window.prompt('请输入你想要添加的网址：')
   if(url.indexOf('http')!== 0){
       url = 'https://'+url
   }
   hashMap.push({logo:simplifyUrl(url)[0].toUpperCase(),url:url,logoType:'text'})

render()
})
window.onbeforeunload =()=>{
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x',string)
}
$(document).on('keypress',(e)=>{
    const key = e.key // const {key} = e
    for(let i = 0;i<hashMap.length;i++){
        if(hashMap[i].logo.toLowerCase()=== key){
            window.open(hashMap[i].url)
        }
    }
})