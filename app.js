/* 
Coder       : Themba Makamu (Kamzen)
Date        : 25 Aug 2021
Description : Club Matching Members

*/

let partnerOne = "Themba",partnerTwo = "Thabiso";

//Anonymous Function For Matching Algorithm
((partnerOne,partnerTwo)=>{

    //Try Catch Block To Validate If Input Names Are In Correct Format
    try{

        //Check If The Input Names Are Only Alphabetical Characters
        if(/^[a-zA-Z]+$/.test(partnerOne) && /^[a-zA-Z]+$/.test(partnerTwo)){

            let matchSentence = (partnerOne + " Matches " + partnerTwo).toLowerCase();
            let res = "";

            const counted = [];

            for( let i = 0; i < matchSentence.length; i++){
                

                if(counted.includes(matchSentence[i]) || matchSentence[i] === " "){

                    continue;

                }else{

                    res += matchSentence.split(matchSentence[i]).length - 1;
                    counted[i] = matchSentence[i];

                }

                // console.log(counted[i]);

                

            }

            // Calculate The Match Percentage
            let matchPercentage = 0;
            let j = res.length - 1;
            let sum = "";

            for(let i = 0; i < res.length/2; i++){

                sum += parseInt(res[i]) + parseInt(res[j - i]);

                if(res.length % 2 === 1 && i === res.length/2){

                    sum += res[i + 1];

                }

            }

            console.log(sum);

        }else{

            //Throws A Error Message 
            throw "Only Alphabetical Characters Are Allowed On Names.";

        }

    }catch(err){

        console.log(err);

    }


})(partnerOne,partnerTwo);
