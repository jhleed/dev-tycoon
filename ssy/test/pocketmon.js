const assert = require('assert');

describe('폰켓몬', function () {
    function solution(word) {



    }


    it('2종류를 가질 수 있을 때', function () {
        assert.equal(solution([3,1,2,3]), 2);
        assert.equal(solution([1,2,3,4]), 2);
        assert.equal(solution([1,1,1,1]), 1);
    });

    it('3종류를 가질 수 있을 때', function () {
        assert.equal(solution([1,2,3,4,5,6]), 3);
        assert.equal(solution([2,2,3,3,4,4]), 3);
        assert.equal(solution([6,6,6,7,7,7]), 4);
    });


});