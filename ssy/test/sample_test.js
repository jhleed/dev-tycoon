const expect = require('chai').expect;
const assert = require('assert');

describe('my test suite', function () {
    it('chai 사용', function () {
        // expect(true).to.eql(true);
        assert.notEqual(true, false)
    });


    it('assert 사용', function () {
        assert.notEqual(true, false)
    });
});


describe("샘플 케이스", function () {
    it('setImmediate 테스트', function () {
        // assert.notEqual(true, false)
        console.log('before immediate');
        setImmediate(function (arg) {
            console.log(`executing immediate: ${arg}`);
        }, 'so immediate');
        console.log('after immediate');
    });

    it('비동기 테스트 성공', function (done) {
        // this.timeout(5000); 타임아웃 시간 제한 늘리기, 기본 2초로 설정
        setTimeout(function () {
            assert.notEqual(true, false);
            done()
        }, 1000);
    });
});