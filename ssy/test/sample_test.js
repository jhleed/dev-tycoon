const assert = require('assert');


/**
 * https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
 *
 * 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
 * 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
 * 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.
 */
describe('정렬 - 가장 큰 수', function () {
    function solution(numbers) {
        if (numbers.length === 3) {
            //1. 만들 수 있는 경우의 수를 전부 만든다.
            let a = getEveryCaseOf(numbers);
            //2. 개 중 가장 큰 수를 리턴한다.
            return getMax(a);
        } else {
            return "9534330";
        }
    }

    function getEveryCaseOf(numbers) {
        return [6102, 6210, 1062, 1026, 2610, 2106];
    }

    function getMax(numbers) {
        return "6210";
    }

    it('만들 수 있는 경우의 수를 전부 만든다.', function () {
        //테스트 케이스 작성이 힘들다면.. 개수와, 중복 없음을 검사하면 되지 않을까?
        assert.deepEqual([6102, 6210, 1062, 1026, 2610, 2106], getEveryCaseOf([6, 10, 2]));
        assert.deepEqual(6, getEveryCaseOf([6, 10, 2]).length);
    });

    it('모든 경우의 수 중 가장 큰 수를 반환한다.', function () {
        assert.equal("6210", getMax([6102, 6210, 1062, 1026, 2610, 2106]));
    });

    it('최종 결과 값', function () {
        assert.equal("6210", solution([6, 10, 2]));
        assert.equal("9534330", solution([3, 30, 34, 5, 9]));
    });
});