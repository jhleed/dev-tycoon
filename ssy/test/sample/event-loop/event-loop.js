describe("event-loop", function () {
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
            test2();
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
        console.log("second");
    });

    /*it("test3", function () {
        var months = ['March', 'Jan', 'Feb', 'Dec'];
        months.sort();
        console.log(months);
        var array1 = [1, 30, 4, 21];
        array1.sort();
        console.log(array1);
    })*/


});