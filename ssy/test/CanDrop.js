const assert = require('assert');

describe('나누어 떨어지는 수', function () {
    function solution(arr, divisor) {
        let answer = [];
        let index = 0;

        let min; // 정렬할 때 쓸 값

        //1. 배열을 다 돌면서 divisor과 나누어 나머지가 0이 되는 수를 answer 배열에 추가한다.

        for(let i=0; i<arr.length; i++){
            if(arr[i] % divisor === 0){ // arr의 i값과 divisor를 나눈 나머지가 0이면 딱 떨어지는 수이므로
                answer[index] = arr[i]; // answer에 추가해준다.
                index++;
            }
        }

        if(index === 0){ // 인덱스가 0이면(아무것도 없으면) 정렬할 필요가 없기 때문에 -1를 return 해준다.
            return [-1];
        }

        // 2. 값이 작은 순서대로정렬한다. (선택정렬)

        for(let i=0; i<answer.length-1; i++){
            index = i;
            min = answer[i];
            for(let j=i+1; j<answer.length; j++){
                if(min > answer[j] ){
                    min = answer[j];
                    index = j;
                }
            }
            answer[index] = answer[i];
            answer[i] = min;
        }

        return answer;
    }


    it('맞음', function () {
        assert.deepEqual(solution([5, 9, 7, 10], 5), [5,10]);
        assert.deepEqual(solution([2, 36, 1, 3], 1), [1, 2, 3, 36]);
        assert.deepEqual(solution([3, 2, 6], 10), [-1]);
        assert.deepEqual(solution([1, 7, 8, 7], 7), [7, 7]);
        assert.deepEqual(solution([10, 100, 3, 2, 52, 10, 8], 2), [2,8,10,10,52,100]);
    });

});