const assert = require('assert');

describe('소수 개수 찾기', function () {
    function solution(num) {

        var i, j, sum = 0, ch;

        // 1. 이중 for문 만들기 (i : 2부터 num까지 반복 , j : 2부터 num까지 반복 )
        for (i = 2; i <= num; i++) {
            ch = 0;
            for (j = 2; j < i-1; j++) {
                // 2. 만약(if) i%j == 0 이라면 소수가 아니므로 패스. j를 다 돌았는데 i%j==0인게 없으면 소수이므로 sum+=1
                if (i % j == 0) {
                    ch = 1;
                }
            }
            if (ch === 0) {
                sum += 1;
            }
            ch = 0;
        }

        return sum;


    }

    it('맞음', function () {
        assert.equal(solution(10), 4);
        assert.equal(solution(5), 3);
        assert.equal(solution(7), 4);
        assert.equal(solution(8), 4);
    });


});