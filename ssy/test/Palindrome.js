const assert = require('assert');

describe('Palindrome 판별', function () {
    function solution(word) {

        // 홀수와 짝수를 판별한다.

        if (word.length % 2 !== 0) {

            let middle = parseInt(word.length / 2);

            // 0번째 ~ (word.length()/2)-1번째를 front에,  (word.length()/2)+1 ~ word.length()를 back에 넣는다.
            // 홀수일 때에는 middle+1, 짝수일 때에는 middle
            let front = word.substring(0, middle);
            let back = word.substring(middle + 1, word.length);

            // back을 reverse한다 (문자열 뒤집기? -> 이건 검색해보기)
            back = back.split("").reverse().join("");

            // front === back이면 Palindrome, 아니면 Not Palindrome


            if (front === back) {
                return "Palindrome";
            }
            return "Not Palindrome"

        }


        // word/2

        let middle = word.length / 2;

        // front = 0~middle-1
        // back = middle~length

        let front = word.substring(0, middle);
        let back = word.substring(middle, word.length);
        // front === back reverse ?

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