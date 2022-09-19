// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
  return url.replace(/(h{1}t{2}p{1}s{0,1}:{0,1}\/{2}w{0,3}?\.{0,1})/, "").replace(/(w{3}\.{0,1})*/, "").match(/[\w\-]*/)[0]
}


console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com" ));

console.log(domainName("https://www.p4yco6a1i80jh2u.it/users" ));
console.log(domainName("https://www.hyphen-site" ));
console.log(domainName("https://www.wolf" ));
console.log(domainName("www.xakep.ru" ));
console.log(domainName("https://wolf" ));

// function domainName(url){
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }