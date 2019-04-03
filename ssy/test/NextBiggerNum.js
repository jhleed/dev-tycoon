const assert = require('assert');

describe('다음 큰 숫자', function () {
    function solution(num) {

        // num을 이진수로 바꿔준다.
        let firstNum = convertToBinaryNum(num) + "";
        let firstNumCount = countOneNum(firstNum);

        let secondNum;
        let secondNumCount;

        // nowNum을 이진수로 바꾸고 1의 갯수를 센다
        while (true) {
            num++;

            secondNum = convertToBinaryNum(num) + "";
            secondNumCount = countOneNum(secondNum);

            // num과 nowNum의 1갯수가 같은지 확인한다
            if (firstNumCount === secondNumCount) { // 맞으면 num++를 return한다.
                return num;
            }
        }
    }

    function convertToBinaryNum(number) {
        return number.toString(2);
    }

    function countOneNum(numStr) {
        return numStr.match(/1/g).length;
    }


    it('이진수', function () {
        assert.equal(convertToBinaryNum(15), 1111);
        assert.equal(convertToBinaryNum(23), 10111);
    });

    it('1의 갯수 세기', function () {
        assert.equal(countOneNum("1111"), 4);
        assert.equal(countOneNum("10111"), 4);
        assert.equal(countOneNum("1001110"), 4);
    });

    it('정답', function () {
        assert.equal(solution(78), 83);
        assert.equal(solution(15), 23);
    });

});