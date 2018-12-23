const assert = require('assert');

describe('홀수와 짝수', function () {
    function solution(num) {
        var answer = '';

        num % 2 == 0 ? answer = "Even" : answer = "Odd";

        return answer;
    }
    
    it('맞음', function () {
        assert.equal(solution(5), "Odd");
    });

});