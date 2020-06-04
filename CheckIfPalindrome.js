function check_palin(str){
    var remove = /[\W_]/g;
    var LowerCaseStr = str.toLowerCase().replace(remove, '');
    var reverseStr = LowerCaseStr.split('').reverse().join('');
    return reverseStr === LowerCaseStr;
}
// check if True or False
console.log(check_palin("A man, a plan, a canal. Panama"));
