const assert = require('assert');

describe('Palindrome 판별', function () {
    function solution(word) {
        let middle = parseInt(word.length / 2);
        let front = word.substring(0, middle);
        let back;

        // 짝수와 홀수를 판별해서 자르는 값을 나눔
        if (word.length % 2 !== 0) {
            back = word.substring(middle + 1, word.length);
        }
        else{
            back = word.substring(middle, word.length);
        }
        // front와 뒤집어진 back을 비교함
        if (front === back.split("").reverse().join("")) {
            return "Palindrome";
        }
        return "Not Palindrome";
    }


    it('짝수일 때 - Palindrome', function () {
        assert.equal(solution('mammam'), "Palindrome");
        assert.equal(solution('mm'), "Palindrome");
        assert.equal(solution('qwerttrewq'), "Palindrome");
    });

    it('짝수일 때 - Not Palindrome', function () {
        assert.equal(solution('mamabmam'), "Not Palindrome");
        assert.equal(solution('ab'), "Not Palindrome");
        assert.equal(solution('iwantkfc'), "Not Palindrome");
    });

    it('홀수일 때 - Palindrome', function () {
        assert.equal(solution('madam'), "Palindrome");
        assert.equal(solution('리효리'), "Palindrome");
        assert.equal(solution('nursesrun'), "Palindrome");
    });

    it('홀수일 때 - Not Palindrome', function () {
        assert.equal(solution('안녕하세요'), "Not Palindrome");
        assert.equal(solution('사과입니다'), "Not Palindrome");
    });

});