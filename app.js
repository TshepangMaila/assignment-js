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

            }

            console.log(calcPercentage(res));

        }else{

            //Throws A Error Message 
            throw "Only Alphabetical Characters Are Allowed On Names.";

        }

    }catch(err){

        console.log(err);

    }


})(partnerOne,partnerTwo);

function calcPercentage(res){

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
console.log(calcPercentage("1234567"));
