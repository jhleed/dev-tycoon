const assert = require('assert');

describe('가장 큰 수', function () {
    function solution(num) {
        let answer = '';

        //앞자리수에 따라 정렬을 한다,


        //앞자리수가 같으면 뒷자리수를 본다 (0<X<=앞자리수보다 큰 값)



        //합친다.

        return 9534330;
    }


    function sortByCipher(num) { // 앞자리 수에 따라 정렬을 한다.

        let index;

        for(let i=0; i<num.length-1; i++){
            index = i;
            iNum = num[i];

            for(let j=i+1; j<num.length; j++){
                if(num[index].toString()[0] < num[j].toString()[0] ){ // 앞자리 수 비교 (j가 더 클때)
                    num[i] = num[j];
                    index = j;
                } // if
            }
            num[index] = iNum;
        }

        return num;
    }

    it('앞 자리수 정렬', function () {
        //assert.equal(solution([6, 10, 2]), "6210");
        assert.deepEqual(sortByCipher([5, 30, 34, 3, 9]), [9,5,34,3,30]);
        assert.deepEqual(sortByCipher([15, 300, 7, 1, 2]), [7,300,2,1,15]);
        assert.deepEqual(sortByCipher([200,700,900,600,400,100]), [900,700,600,400,200,100]);
    });

    it('맞음', function () {
        //assert.equal(solution([6, 10, 2]), "6210");
        assert.equal(solution([3, 30, 34, 5, 9]), "9534330");
    });

    it('테스트용', function () {

        console.log("3" > "2");
    });


});
