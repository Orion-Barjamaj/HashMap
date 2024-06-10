let array = new Array(16);

class HashMap{

  hash(key) {
    let hashCode = 0;    
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  } 

  set(key, value){
    let hashCode = this.hash(key);

    const hashElement = {
      key: hashCode,
      value: value
    }

    for(let i = 0; i < array.length; i++){
      if(array[i] != undefined){
        if(array[i].key === hashElement.key){
          array[i] = hashElement;
          break;
        }
      }else {
        array[i] = hashElement;
        break;
      }
    }  
  }

  get(key){
    let hashCode = this.hash(key);
    let value = '';
    let found = false;
    array.forEach(element => {
      if(element.key === hashCode){
        value = element.value;
        found = true;
      }
      else {
        found = false;
      }
    });
    return found ? value : 'Key not found';
  }

  has(key){
    let hashCode = this.hash(key);
    let found = false;
    array.forEach(element => {
      if(hashCode === element.key){
        found = true;
      } else {
        found = false;
      }
    });

    return found ? true : false;
  }

  remove(key) {
    let hashCode = this.hash(key);
    for (let i = 0; i < array.length; i++) {
      if (array[i].key === hashCode) {
        array.splice(i, 1); 
        return true; 
      }
    }
    console.log(array);
    return false;
  }
  
  length(){
    let length = 0;
    array.forEach(element => {
      length++;
    });
    return length;
  }

  clear(){
    array = new Array(16);
    return array;
  }

  keys(){
    let keyArray = [];
    array.forEach(element => {
      keyArray.push(element.key);
    });
    return keyArray;
  }

  values(){
    let valueArray = [];
    array.forEach(element => {
      valueArray.push(element.key);
    });
    return valueArray;
  }

  entries(){
    return array;
  }
}

//creates new hashmap
const hashmap = new HashMap();
//sets a key and a value
hashmap.set('Carlos', 'This is Carlos');
hashmap.set('Carlos', 'This is new Carlos');
hashmap.set('Jose', 'This is Jose');
hashmap.set('Ben', 'This is Ben');
//gets a value based on the given key
hashmap.get('Ben');
hashmap.get('Jimmy');
//checks if the array has the given key
hashmap.has('Ben');
hashmap.has('Carter');
//removes an element if it matches the key
hashmap.remove('Ben');
//returns the number of stored keys
hashmap.length();
//removes all elements on the array
hashmap.clear();
//returns an array containing all the keys inside the hash map
hashmap.keys();
//returns an array containing all the values
hashmap.values();
//returns an array that contains each key, value pair
hashmap.entries();