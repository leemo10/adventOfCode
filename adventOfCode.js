var directions = ["R5", "R4", "R2", "L3", "R1", "R1", "L4", "L5", "R3", "L1", "L1", "R4", "L2", "R1", "R4", "R4", "L2", "L2", "R4", "L4", "R1", "R3", "L3", "L1", "L2", "R1", "R5", "L5", "L1", "L1", "R3", "R5", "L1", "R4", "L5", "R5", "R1", "L185", "R4", "L1", "R51", "R3", "L2", "R78", "R1", "L4", "R188", "R1", "L5", "R5", "R2", "R3", "L5", "R3", "R4", "L1", "R2", "R2", "L4", "L4", "L5", "R5", "R4", "L4", "R2", "L5", "R2", "L1", "L4", "R4", "L4", "R2", "L3", "L4", "R2", "L3", "R3", "R2", "L2", "L3", "R4", "R3", "R1", "L4", "L2", "L5", "R4", "R4", "L1", "R1", "L5", "L1", "R3", "R1", "L2", "R1", "R1", "R3", "L4", "L1", "L3", "R2", "R4", "R2", "L2", "R1", "L5", "R3", "L3", "R3", "L1", "R4", "L3", "L3", "R4", "L2", "L1", "L3", "R2", "R3", "L2", "L1", "R4", "L3", "L5", "L2", "L4", "R1", "L4", "L4", "R3", "R5", "L4", "L1", "L1", "R4", "L2", "R5", "R1", "R1", "R2", "R1", "R5", "L1", "L3", "L5", "R2"];
//var directions = ['R8', 'R4', "R4","R8"];
var currentDirection = "North";
var directionToTravel = "";
var blocksTravelled = 0;
var cordCalculation = 0;
var xCordsCalc = 0;
var yCordsCalc = 0;
var i;
var x1 = 0;
var y1 = 0;

for (i = 0; i < directions.length; i++) {
        var arrayNumber = parseInt(directions[i].replace(/^[a-zA-Z]+/,''),10);
        var arrayDirection = directions[i].charAt(0);

        if (currentDirection =='North' && arrayDirection == 'R'){
                        directionToTravel = "East";
                                x1 = x1 + arrayNumber;
                               
        } else if (currentDirection =='North' && arrayDirection =='L'){
                        directionToTravel = "West";
                                x1 = x1 - arrayNumber;
                                
        } else if (currentDirection == 'East' && arrayDirection == 'R'){
                        directionToTravel = 'South';
                                y1 = y1 - arrayNumber;
          
        }else if (currentDirection == 'East' && arrayDirection == 'L'){
                        directionToTravel = 'North';
                                y1 = y1 + arrayNumber;
                        
        } else if (currentDirection == 'South' && arrayDirection == 'R'){
                        directionToTravel = 'West';
                                x1 = x1 - arrayNumber;
                        
        } else if (currentDirection == 'South' && arrayDirection == 'L'){
                        directionToTravel = 'East';
                                x1 = x1 + arrayNumber;
                       
        } else if (currentDirection =='West' && arrayDirection == 'R'){
                        directionToTravel = 'North';
                                y1 = y1 + arrayNumber;
                       
        } else if (currentDirection == 'West' && arrayDirection == 'L'){
                        directionToTravel = 'South';
                        y1 = y1 - arrayNumber;
                     }


        CordsCalc = Math.abs(x1) + Math.abs(y1); 
           
        console.log("Total Blocks Travelled " + CordsCalc);  

        currentDirection = directionToTravel;



        var visited = ("" +x1+" "+y1+ " Blocks Travelled "+ CordsCalc);
        console.log(visited);

        var duplicateVisit = [];
        var duplicateVal = "";
        duplicateVisit.push(visited);
          
        for(i = 0; i<duplicateVisit.length; i++){  
        if(duplicateVisit[i]==visited){
            console.log("****************Duplicate************");
            console.log(duplicateVisit[i]);
        }
    }

        
        
}

