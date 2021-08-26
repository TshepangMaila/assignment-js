/* 
Coder       : Themba Makamu (Kamzen)
Date        : 25 Aug 2021
Description : Club Matching Members

*/

const reader = require('./reader.js');

((r) => {

    let matcher = (male, female) => {

        //Try Catch Block To Validate If Input Names Are In Correct Format
        try{

            //Check If The Input Names Are Only Alphabetical Characters
            if(/^[a-zA-Z]+$/.test(male) && /^[a-zA-Z]+$/.test(female)){

                let matchSentence = `${male} matches ${female}`
                let res = "";
                const counted = [];

                for( let i = 0; i < matchSentence.length; i++){

                    if(!counted.includes(matchSentence[i]) || matchSentence[i] !== ""){

                        res += matchSentence.split(matchSentence[i]).length - 1;
                        counted[i] = matchSentence[i];

                    }
                    

                    // if(counted.includes(matchSentence[i]) || matchSentence[i] === " "){
                    //     continue;
                    // }else{
                    //     res += matchSentence.split(matchSentence[i]).length - 1;
                    //     counted[i] = matchSentence[i];
                    // }

                }

                console.log(calcPercentage(res));

            }else{

                //Throws A Error Message 
                throw "Only Alphabetical Characters Are Allowed On Names.";

            }

        }catch(err){

            console.log(err);

        }

    }

    let calcPercentage = (res) => {

        console.log(res);
    
        if(res.length === 1 || res.length === 2){
    
            return res;
    
        }else{
    
            // Calculate The Match Percentage
            let j = res.length -1;
            let sum = "";
    
            for(let i = 0; i < res.length/2; i++){
    
                if(i < res.length/2 && j > res.length/2){
    
                    sum += parseInt(res[i]) + parseInt(res[j]);
                    j--;
                    
                }else if(res.length % 2 ===1 && i === res.length/2){
    
                    sum += res[i + 1]; 
    
                }
    
            }
    
            res = sum;
            return calcPercentage(res);

        }
    
    }

    r.Streamer(players => {

        console.log(players.males)
        console.log(players.females)

        players.males.forEach(male => {

            players.females.forEach(female => {

                matcher(male, female)

            })

        })
    
    })

})(reader);

// let partnerOne = "Themba",partnerTwo = "Thabiso";
// ((partnerOne,partnerTwo)=>{
// })(partnerOne,partnerTwo);
// console.log(calcPercentage("1234567"));
