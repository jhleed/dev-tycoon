const assert = require('assert');

describe('폰켓몬', function () {
    function solution(arr) {

        //arr.length / 2를 해서 변수 'max'에 집어 넣는다.
        let max = arr.length/2;

        //중복제거 함수를 쓴다(구글링하기)
        let uniqueArr = arr.reduce(( a, b ) => {
            if( a.indexOf(b) < 0 ) a.push(b) ;
            return a ;
        }, []) ;

        //중복 제거한 length가 max보다 크면 max를 return 해주고, 작으면 length를 return 해준다.
        if(uniqueArr.length>max){
            return max;
        }
        else{
            return uniqueArr.length;
        }

    }


    it('2종류를 가질 수 있을 때', function () {
        assert.equal(solution([3,1,2,3]), 2);
        assert.equal(solution([1,2,3,4]), 2);
        assert.equal(solution([1,1,1,1]), 1);
    });

    it('3종류를 가질 수 있을 때', function () {
        assert.equal(solution([1,2,3,4,5,6]), 3);
        assert.equal(solution([2,2,3,3,4,4]), 3);
        assert.equal(solution([6,6,6,7,7,7]), 2);
    });


});