
//  Problem 1:
function totalFine( fare ) {    
    
 
 if (typeof fare !== "number"){
    
  return "Invalid" 
 }
         
else if(fare<=0){
    return "Invalid"
}
      

if(fare>0){  
    
const  penanty=fare+fare*0.2+30
         
 return penanty
 }

}


//   Problem 2 

function  onlyCharacter( str ) {


    if(typeof str !=="string") {
     return "Invalid" 

    }

    else     
    {

    let newstr=str.replaceAll(' ','')
    let result=newstr.toUpperCase()
   
     return result
  

}

}






// Problem 4 

function isSame(arr1, arr2) {

    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false)
        return 'Invalid'


    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {

        return true
    }
    else {

 return false
        

    }
}


// Problem 5 
function  resultReport(marks) {
    if(Array.isArray(marks)===false){

         return "Invalid"      
    }
    let finalScore=0;
    let  pass=0;
    let fail=0;
    let sum=0;
     if(marks.length===0){
       return { finalScore: 0 , pass: 0, fail: 0 }
    }
    for( let mark of marks ){
      sum=sum+mark

    if(mark>=40){
        pass=pass+1;       
    
    }
    else if(mark<40){
        fail=fail+1;       
    
    }    
    
      }
 
        finalScore=Math.round(sum/marks.length)
       

        const result=   {finalScore:finalScore,   pass:pass,fail:fail}    
       
        return result

}


   
