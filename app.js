window.onload = function() {

    let randomNumber = Math.random()*10;
    document.getElementById('excuse').innerHTML = generateExcuse();
  console.log("My dog eat my homework");
};

let generateExcuse = function () {
        let who = ['The dog','My granma','His turtle','My bird'];
        let what = ['eat','pissed','crushed','broked'];
        let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

        let whoRandom = Math.floor(Math.random()*who.length);
        let whatRandom = Math.floor(Math.random()*what.length);
        let whenRandom = Math.floor(Math.random()*when.length);


        return who[whoRandom] + ' '+what[whoRandom] + ' ' + when[whenRandom];
};