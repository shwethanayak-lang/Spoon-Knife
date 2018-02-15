class player  {};
Object.defineProperty(player, 
    'firstName', {
  value: "Virat",
  writable: true,
  enumerable: true,
  configurable: true
});

//Enumerable: During iteration, properties can be visible

// Configurable:

Object.defineProperty(player, 'lastName', {
  value: "Kohli",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(player, 'fullName', {
    value: function(){
        return this.firstName+" "+this.lastName
    },
    writable: true,
    enumerable: true,
    configurable: true
  });
  

player.firstName="Virushka"
console.log(player.fullName());

for(let i in player){
    console.log(player[i]);
}