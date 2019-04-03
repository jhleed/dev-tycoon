const assert = require('assert');


describe("event-loop", function () {
/*
    it("test1", function () {
        function foo(b) {
            var a = 10;
            return a + b;
        }

        function bar(x) {
            var y = 2;
            return foo(x + y);
        }

        console.log(bar(1));
    });


    it("test2", function () {
        console.log("\n");

        function test1() {
            console.log("test1\n");
            test2();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ();
        }

        function test2() {
            setTimeout(function () {
                console.log("test2\n");
            }, 0);
            test3();
        }

        function test3() {
            console.log("test3\n");
        }

        test1();
    });

    it("test3", function () {
        setTimeout(function () {
            console.log("first");
        }, 0);

        for(let i=0; i<100000; i++){}

        //function 2
        console.log("second");
    });
*/

    it("test4", function () {
        let arr = [2,4,2,1,44,22,77,44,11];
        assert.deepEqual([],arr.sort(function (a, b) {

            // a랑 b를 숫자로 바꿔줌
            let a1 = Number(a);
            let b1 = Number(b);

            // a = a.valueOf(); // Number
            // b = b.valueOf();

            // a<b => -1 리턴
            if(a1<b1){
                return -1;
            }

            // a>b => 1 리턴
            if(a1>b1){
                return 1;
            }

            // 같으면 0 리턴!
            return 0;

        }));
    });



    /*items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // 이름이 같을 경우
  return 0;
});*/

});