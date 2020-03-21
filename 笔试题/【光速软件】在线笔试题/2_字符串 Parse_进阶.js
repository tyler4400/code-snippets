/**
 * 不好意思，因为时间原因本题没有写出来. 只列了一个思路
 * 之前写过计算器，和写计算器应该差不多。我下去再看看相关代码吧
 * @param str
 */
function myParse(str){
    const strArr = str.replace(' ', '').split('');

    const obj = {};
    let temp = [];
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === '<') {
            //some codes...

            temp = [];
        }
        if(strArr[i] === ','){
            //some codes...

            temp = [];
        }
        if(strArr[i] === '>'){
            //some codes...

            temp = [];
        }
        temp.push(strArr[i]);
    }

    return obj;
}
