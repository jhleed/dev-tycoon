const assert = require('assert');

describe('나누어 떨어지는 수', function () {
    function solution(arr, divisor) {
        let answer = [];
        let index = 0;

        //배열을 다 돌면서 divisor과 나누어 나머지가 0이 되는 수를 answer 배열에 추가한다.

        for(let i=0; i<arr.length; i++){
            if(arr[i] % divisor === 0){
                answer[index] = arr[i];
                index++;
            }
        }

        if(index === 0){
            return [-1];
        }

        // 정렬한다.

        for(let i=0; i<answer.length-1; i++){

            let index = i;
            let temp = answer[i];

            for(let j=i+1; j<answer.length; j++){

                if(answer[index] > answer[j] ){
                    answer[index] = answer[j];
                    index = j;
                }

            }

            answer[index] = temp;

        }


        return answer;
    }


    it('맞음', function () {
        assert.deepEqual(solution([5, 9, 7, 10], 5), [5,10]);
        assert.deepEqual(solution([2, 36, 1, 3], 1), [1, 2, 3, 36]);
        assert.deepEqual(solution([3, 2, 6], 10), [-1]);
    });

});