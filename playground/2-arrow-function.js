const square1 = function(x){
    return x * x
}

//arrow function - multi line
const square2 = (x) =>
{
    if  ( x > 0 )
        return x * x;
    else
        return x;
    
}

//arrow function 2 - single line
const square3 = (x) => x * x

//methods

const event1 = {
    name: 'Fitness Conference',
    guestList: ['Arjun','Arul','Anand'],
    print(){
        //do not use arrow function as 'this' is not accessible in arrow functions
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name )
        })
    }
}

const event2 = {
    name: 'Arjun',
    print (){
        //do not use arrow function as 'this' is not accessible in arrow functions
        console.log(this.name)
    }
}

console.log(square1(3))
console.log(square2(4))
console.log(square3(5))
event1.print()
event2.print()