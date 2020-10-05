
//Code for feet To mile 
function feetToMile(feet){

     // 1 Feet = 0.000189394 Mail or 1 Mail = 5280 Feet
     var mile = feet*0.000189394; //we can use also "feet/5280";

    if(feet<=0){
        // if Feet value is zero or negative.
        return "Input cannot be zero or negative, Please insert a valid number."
    }
    
    else{
       
        return (mile.toFixed(4)) + " Mail.";
    }
}
var TotalMile = feetToMile(20000);
console.log(TotalMile);
//If input = 20000
// So Output will be  3.7879 Mail.


    
//Code for wood Calculator
function woodCalculator(chair, table , bed){
    var WoodRequiredForChair = 1; //cubic-feet 
    var WoodRequiredForTable = 3; //cubic-feet 
    var WoodRequiredForBed = 5;   //cubic-feet 

    
    var Total = (WoodRequiredForChair * chair) + (WoodRequiredForTable * table) + (WoodRequiredForBed * bed);

    if(Total<=0){// if Total value is zero or negative.
        
        return "Input cannot be zero or negative, Please insert a valid number."
        }
  
    return Total + " cubic-feet.";
}
const TotalWoodRequired = woodCalculator(6,1,2);
console.log(TotalWoodRequired);
//If input = 6,1,2
// So Output will be 19 cubic-feet.


//Code for brickCalculator
function brickCalculator(Floor){
    if(Floor<=0){//if input value is 0 or negative number.
        return "Input cannot be zero or negative, Please insert a valid number.";
    }
    
    else if(Floor<=10){
        
        var BrickNeedFirstTenFloor = Floor * 1000 * 15 // 1000 Pcs Brick need Per squire Feet & 15 = Floor Hight;
        return BrickNeedFirstTenFloor + " Pcs.";
    }
    
    else if(Floor>10 && Floor<=20){
     
        var BrickNeedFirstTenFloor = 15000*10;// 15000 pcs brick need for each Floor & 10 = Floor Qyt;
        var BrickNeedElevenToTwentyFloor = (Floor-10) * 12 * 1000; // 1000 = Brick Qty Per squire Feet & 12 = Floor Hight;
        var TotalBrickNeedElevenToTwentyFloor = BrickNeedFirstTenFloor + BrickNeedElevenToTwentyFloor;
        return TotalBrickNeedElevenToTwentyFloor + " Pcs.";
    }
    
    else{
        var BrickNeedFirstTwentyFloor = 15000*10 + 10*12000;//15000 pcs brick need for each Floor till 10th, 12000 pcs brick need for each Floor from 11 to 20  & 10 = Floor Qyt;
        var BrickNeedAbove20PerFloor = (Floor-20) * 10 * 1000; //1000 Pcs Brick need Per squire Feet & 10 = Floor Hight;
        var TotlaBrickNeedAbove20PerFloor = BrickNeedFirstTwentyFloor + BrickNeedAbove20PerFloor;
        return TotlaBrickNeedAbove20PerFloor + " Pcs.";
    }
}
const TotalBrick = brickCalculator(21);
console.log(TotalBrick);
//If input : 1/11/21
// So Output will be :  15000 Pcs./162000 Pcs./280000 Pcs.


//Code for Tiny Friend
function tinyFriend(names){
    var nameLength = names[0];
    if(nameLength.length ==  ""){ //if names is empty [""]
        return "Please insert a name."
    }
    for(i=0; i<names.length; i++){
        var frindsName = names[i];
        if(frindsName.length<nameLength.length){
            nameLength = frindsName;
        }
    }
    return nameLength;
}
const names = ["Karim","Rahim", "Jodoi", "Modu"]; 
console.log(tinyFriend(names))
//If input : "Karim","Rahim", "Jodoi", "Modu"
// So Output will be :  "Modu"




# assignment
