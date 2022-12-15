//정규식 
/*
const str = `
010-1234-5678
the1234@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
//생성자 방식
const regexp = new RegExp('the','gi')  //플래그 gi 대소문자 구분하지 않음
console.log(str.match(regexp))

//리터럴 방식
const regexp0 = /the/gi
console.log(str.match(regexp0))

const regexp1 = /fox/gi
console.log(regexp1.test(str))

const regexp2 = /brian/gi
console.log(regexp2.test(str))

const regexp3 = /fox/gi
console.log(str.replace(regexp3, 'brian'))
console.log(str)


let str1 = `
010-1111-1111
the1234@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
const regexp4 = /fox/gi
str1 = str1.replace(regexp4,'Charlie')
console.log(str1)
*/



//플래그 & 패턴(표현) /g , /gi ,  /gim
const str = `
010-1234-5678
the1234@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
http
habp
habcp
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과_백수산이 마르고 닳도록
.` //(1)
//기능 있는 특수기호(. 등...)는 앞에 \ 붙여 문자로 인식되도록 하여 검색
// $표시 = $표시 앞의 숫자 문자 기호 등으로 데이터 마지막에 끝남
// .$/g (gloabl) 데이터 전체의 마지막이.)으로 끝남
// .$/gm (global multi line) 데이터 전체 각각의 줄의 마지막이 (.)으로 끝남
//   /gim global ignore calse multiline 대소문자 무시 추가
console.log(str.match(/\.$/g))   // (1)
console.log(str.match(/\.$/gm))  // dog뒤의 .
console.log(str.match(/^t/gm))   //^첫 번째
console.log(str.match(/^t/gim))  

console.log(str.match(/http/g))  
console.log(str.match(/h..p/g))  
console.log(str.match(/fox|dog/g))  
console.log(str.match(/https/g))

console.log(str.match(/d/g))    
console.log(str.match(/d{2}/g))    
console.log(str.match(/d{2,}/g))    
console.log(str.match(/d{2,3}/g))    
console.log(str.match(/\w{2,3}/g))    //  \w 모든 숫자와 알파벳  
console.log(str.match(/\b\w{2,3}\b/g))  // \b 경계를 만들어 2-3글자만 찾음

console.log(str.match(/[fox]/g))  
console.log(str.match(/[0-9]/g))  
console.log(str.match(/[0-9]{1,}/g))  
console.log(str.match(/[가-힣]{1,}/g))  

console.log(str.match(/\w/g))  
console.log(str.match(/\b/g))  
console.log(str.match(/\bf\w{1,}\b/g))  // f로 시작하는 하나 이상의 단어
console.log(str.match(/\d{1,}/g))  
console.log(str.match(/\s/g))  

const h = `   the hello world   `
console.log(h.match(/\s/g))  
console.log(h.replace(/\s/g, ''))  

console.log(str.match(/.{1,}(?=@)/g))  // @앞 이메일 아이디 추출
console.log(str.match(/(?<=@).{1,}/g))  // . 임의의 문자 마침표


