function age(old){
    if(old <16) {
        console.log("You Can't drive.");
    }
    else if (old <= 17) {
        console.log("You can drive but not vote.");
    } else if (old <= 24) {
        console.log("You can vote but not rent a car.");
    } else {
        console.log("You can do pretty much anything.");
    }
}
age(17); 
