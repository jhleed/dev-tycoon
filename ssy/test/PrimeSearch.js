const assert = require('assert');

describe('소수 개수 찾기', function () {
    function solution(num) {

        const START = 2; // 소수는 2부터 시작하기 때문에 start를 2로 지정

        let isPrime; // i%j===0 이면 소수이기 때문에 check를 1로 바꿔주어 sum+=1을 하지 않게 한다.
        let sum = 0;

        // 1. 이중 for문 만들기 (i : 2부터 num까지 반복 , j : 2부터 num까지 반복 )
        for ( let i = START; i <= num; i++) {
            isPrime = true;
            for (let j = START; j < i - 1; j++) {
                // 2. 만약(if) i%j == 0 이라면 소수가 아니므로 패스. j를 다 돌았는데 i%j==0인게 없으면 소수이므로 sum+=1
                if (i % j === 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                sum += 1;
            }
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