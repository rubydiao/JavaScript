function getArea(length,width,height){
    let baseArea = length * width;
    let volume = 1/3 * baseArea * height;
    return volume;
}
console.log(getArea(2,2,3));
let area1 = getArea(5,6,5);
let area2 = getArea(1,2,3);
console.log('area1:'+area1+' '+'area2:'+area2);