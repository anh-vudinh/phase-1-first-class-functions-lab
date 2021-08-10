const returnFirstTwoDrivers = (function(drivers){
    return drivers.slice(0,2);
})

const returnLastTwoDrivers = (function(drivers){
    return drivers.slice(-2);
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fareMultiplier){
    return function(){
        const fareQuintupler = fareMultiplier*fareMultiplier;
        return fareQuintupler;
    };
}


const neVar1 = createFareMultiplier();

function fareDoubler(neVar1){
    return neVar1*2;   
}

function fareTripler(neVar1){
    return neVar1*3;
}



function selectDifferentDrivers(drivers, paramF){
    if(paramF == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else if(paramF ==returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    }
}