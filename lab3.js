Array.prototype.move = function(from,to){
  this.splice(to,0, this.splice(from,1)[0] );
  return this;
};

const posibleText = (text) => {
  let textObj = text.split("");
  let results = textObj.reduce((prev, cur, index) => {
    let data = JSON.parse(JSON.stringify(textObj));
   // console.log(data)
    for (let col = 0; col <= data.length; col++ ){
      let newData = data.move(index, col);
      prev.push(newData.join(""))
    }
    return [...prev]
  }, [text]);

  return Array.from(new Set(results)).sort().join();
} 

console.log(posibleText('ABC'));
console.log(posibleText('112'));
console.log(posibleText('AB'));