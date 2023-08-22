function stringLen (str){
    if(str.length > 0 && str.length <= 10) {
      return str.length;  
    }else{
        throw new Error('The string length must be more than 0 and less than or equal to 10')
    }
}

module.exports = stringLen;