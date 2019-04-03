const assert = require('assert');

describe('점수 내림차순으로 정렬하기', function () {
    function solution(arr) {

        let answer = [];

        // 국어, 수학, 영어 점수를 더해서 Sum 이라는 속성에 저장한다.
        arr.forEach(function (i) {
            //console.log(i.score.Korean);
            i.sum = Number(i.score.Korean) + Number(i.score.English) + Number(i.score.Math);
        });

        // 내림차순으로 정렬한다.
        arr.sort(function (a, b) { // 내림차순
            return b.sum - a.sum;
        });

        for(let j=0; j<arr.length-1; j++){
            if (arr[j].sum === arr[j + 1].sum) {
                if (arr[j].name > arr[j + 1].name) {
                    let temp;
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                } // if
            } // if
        };

        for(let a=0; a<arr.length; a++){
            answer[a] = arr[a].name;
        }

        return answer;
    }

    it('정답', function () {
        assert.deepEqual(solution(
            [
                {id: 1, name: 'Sally', score: {Korean: "06", Math: "09", English: "30"}},
                {id: 2, name: 'Tom', score: {Korean: "50", Math: "80", English: "90"}},
                {id: 3, name: 'Andy', score: {Korean: "99", Math: "50", English: "88"}},
                {id: 4, name: 'Erik', score: {Korean: "70", Math: "60", English: "90"}},
                {id: 5, name: 'Candy', score: {Korean: "22", Math: "09", English: "20"}}
            ]
            ,
        ), ["Andy", "Erik", "Tom", "Candy", "Sally"]);
    });


});