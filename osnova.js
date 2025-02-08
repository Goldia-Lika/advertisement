// // console.log(document)
// const BODY = document.querySelector('header')

// // BODY.style.backgroundColor = 'red'
// const colorArr=['red', 'green','blue']
// let counter=0


// const  ert = document.querySelector('#start')

// ert.addEventListener('click',()=>{
//     colorArr.forEach((item,index)=>{
//         setTimeout(()=>{ert.style.backgroundColor = item},index*1000)
        
//     })
    
// })


// реклама

const NEWS = document.querySelector('.news')
console.log(NEWS)

const newsArr = [
    {title:'ГОРЯЧИЙ ТУР! ПО СЛАВЯНСКОЙ ДЕРЕВНЕ',
        newsText2:`Погружение в мир славянских традиций`,
        newsText: ` Ночь в Славянском поселение, с деревенским обедом из печки!
        `,
        newsImg: "./imaget/деревушка для рекламы.png"
    },
]

newsArr.forEach((element)=>{
    NEWS.innerHTML += `<div class="img_reclam"><img src="${element.newsImg}"></div>
<div class="marquee"><marquee><p>${element.title}</p></marquee></div>
<div class="text_Tur"><h2>${element.newsText2}</h2>
<p>${element.newsText}</p>
</div>
</div>`
})


