const assert = require('assert');

describe('가장 큰 수', function () {
    function solution(num) {
        let answer = '';

        //앞자리수에 따라 정렬을 한다,


        //앞자리수가 같으면 뒷자리수를 본다 (0<X<=앞자리수보다 큰 값)



        //합친다.

        return 9534330;
    }


    function sortByCipher(num) {

        for(let i=0; i<num-1; i++){

            let index = i;
            let su = 100;

            for(let j=i+1; j<num; j++){
                if(num[index]/10 < num[j]/10 ){ // 앞자리 수 비교 (j가 더 클때)
                    num[index] = num[j];
                    index = j;
                }
                // else if(num[i]/10 === num[j]/10){ // 앞자리 수 비교(같을 때)
                //     while(){
                //         if(num[i]/su !== num[j]/su){
                //
                //         }
                //         su *= 10;
                //     }
                //     su = 10;
                // }
            }
            num[index] = num[i];

        }


        return num;
    }

    it('앞 자리수 정렬', function () {
        //assert.equal(solution([6, 10, 2]), "6210");
        assert.deepEqual(sortByCipher([3, 30, 34, 5, 9]), [9,5,34,3,30]);
    });

    it('맞음', function () {
        //assert.equal(solution([6, 10, 2]), "6210");
        assert.equal(solution([3, 30, 34, 5, 9]), "9534330");
    });

    it('테스트용', function () {
        //assert.equal(solution([6, 10, 2]), "6210");
        console.log(351561651%10);
    });


});
