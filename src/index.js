module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let open = [];
    let close = [];
    bracketsConfig.flat(bracketsConfig);
    for (let i = 0; i < bracketsConfig.length; i++) {
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
    }

    for (let i = 0; i < str.length; i++) {
        if (
            open.includes(str[i]) &&
            close.includes(str[i]) &&
            stack[stack.length - 1] == str[i]
        ) {
            stack.shift();
        } else if (open.includes(str[i])) {
            stack.push(str[i]);
        } else if (
            close.indexOf(str[i]) != -1 &&
            stack[stack.length - 1] == open[close.indexOf(str[i])]
        ) {
            stack.shift();
        } else {
            return false;
        }
    }

    return stack.length == 0 ? true : false;
};
