const assert = require('assert');

describe('다음 큰 숫자', function () {
    function solution(num) {

        let isTrue = true;

        // num을 이진수로 바꿔준다.

        let firstNum = convertToBinaryNum(num) + "";
        let firstNumCount = countOneNum(firstNum);
        let nowNum = num;

        // num ++를 이진수로 바꾼다

        while (isTrue) {
            nowNum += 1;

            let secondNum = convertToBinaryNum(nowNum) + "";
            let secondNumCount = countOneNum(secondNum);

            // num과 num++의 1 갯수가 같은지 확인한다

            if (firstNumCount === secondNumCount) {
                isTrue = false;

                // 맞으면 num++를 return한다.
                return nowNum;
            }

            // 아니면 계속 돈다
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