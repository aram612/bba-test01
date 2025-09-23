## Tổng hợp kiến thức đã học tại buổi 4

### Javascript

1. **Scope of variable (Phạm vi của biến)**

    - Phạm vi (scope) xác định nơi mà biến có thể truy cập. JavaScript có ba loại phạm vi:

        - **Toàn cục (global)**
        
                eg: 
                var globalVar = "Tôi là biến toàn cục";
                let globalLet = "Tôi cũng là biến toàn cục";
                function testFunction() {
                    console.log(globalVar); // Truy cập được
                    console.log(globalLet); // Truy cập được
                }
        
        - **Function scope (hàm)**
        
                eg:
                    function myFunction() {
                        var functionScoped = "Chỉ có thể truy cập trong hàm này";
                        let alsoFunctionScoped = "Tương tự";
                        console.log(functionScoped); // OK
                    }

                    console.log(functionScoped); // Error: functionScoped is not
                    defined
        
        - **Block scope (khối)**
        
                eg:
                    if (true) {
                        var varVariable = "var không có block scope";
                        let letVariable = "let có block scope";
                        const constVariable = "const cũng có block scope";
                    }
                    
                    console.log(varVariable); // OK - var không bị giới hạn bởi
                    block
                    console.log(letVariable); // Error: letVariable is not defined
                    console.log(constVariable); // Error: constVariable is not
                    defined
        
        - **Hoisting**: JavaScript di chuyển các khai báo biến lên đầu phạm vi của chúng trước khi thực thi code.

    
                eg:
                    console.log(x); // undefined (không phải error)
                    var x = 5;

                    // Tương đương với:
                    var x;
                    console.log(x); // undefined
                    x = 5;

                    // Với let và const:
                    console.log(y); // Error: Cannot access 'y' before initialization
                    let y = 5;

2. **break & continue**

    - `break`: Dùng để thoát hoàn toàn khỏi vòng lặp ngay lực tức. Nghĩa là khi có điều kiện thoả mãn, vòng lặp sẽ được dừng ngay lập tức
    
            eg:
            // Thoát khi tìm thấy giá trị
            for (let i = 0; i < 10; i++) {
                if (i === 5) {
                break; // Thoát vòng lặp khi i = 5
                }
                console.log(i);
            }
            // Output: 0, 1, 2, 3, 4
        
            ----------------------------------------

            const numbers = [1, 3, 8, 7, 9, 11];
            let firstEven = null;
            for (let num of numbers) {
            if (num % 2 === 0) {
                firstEven = num;
                break; // Dừng ngay khi tìm thấy
                }
            }
    

    - `contine`: Dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần tiếp theo. Ngược lại với break, nghĩa là khi thấy giá trị thoả mãn điều kiện => bỏ qua giá trị và toàn bộ các code sau đó để thực hiện tiếp vòng lặp với giá trị mới
    
            eg: 
            // Bỏ qua số chẵn
            for (let i = 0; i < 10; i++) {
                if (i % 2 === 0) {
                    continue; // Bỏ qua số chẵn
                }
                console.log(i);
            }
            // Output: 1, 3, 5, 7, 9

            ----------------------------------------
            
            // Ví dụ thực tế: Lọc dữ liệu
            const scores = [85, 92, 78, 95, 60, 88];
            console.log("Điểm >= 80:");
            for (let score of scores) {
                if (score < 80) {
                    continue; // Bỏ qua điểm < 80
                }
                console.log(score);
            }
            // Output: 85, 92, 95, 88

3. **Advanced condition**

    - Câu điều kiện `if...else`: Thực thi code khác nhau cho trường hợp true và false

            eg:
                let score = 75;
                if (score >= 60) {
                    console.log("Bạn đã qua môn");
                } else {
                    console.log("Bạn cần học lại");
                }

    - `if...else` cũng được dùng để kiểm tra nhiều điều kiện theo thứ tự

            eg: 
                let score = 85;

                if (score >= 90) {
                    console.log("Xuất sắc");
                } else if (score >= 80) {
                    console.log("Giỏi");
                } else if (score >= 70) {
                    console.log("Khá");
                } else if (score >= 60) {
                    console.log("Trung bình");
                } else {
                    console.log("Yếu");
                }

    - Câu điều kiện nâng cao: `ternary operator`: là 1 cách viết ngắn gọn của `if...else`. Cú pháp:
        
        ` let/const <variable> = (condition) <action for condition true> : <action for condition false>`

            eg: 
                let age = 20;
                let status = (age >= 18) ? "Người lớn" : "Trẻ em";
                console.log(status); // "Người lớn"

                // Có thể lồng nhau (nên cẩn thận với độ phức tạp)
                let score = 75;
                let grade = score >= 90 ? "A" :
                            score >= 80 ? "B" :
                            score >= 70 ? "C" :
                            score >= 60 ? "D" : "F";
   

4. **Advanced loop**

    - `for...in`: Dùng để duyệt qua các thuộc tính có thẻ đếm được của 1 Object, boa gồm cả thuộc tính kế thừa

                eg:
                    // Với Object
                    const person = {
                        name: "John",
                        age: 30,
                        city: "Hanoi"
                    };
                    for (let key in person) {
                        console.log(key + ": " + person[key]);
                    }
                    // Output:
                    // name: John
                    // age: 30
                    // city: Hanoi

                    --------------------------------------------

                    // Với Array (không khuyến khích)
                    const colors = ["red", "green", "blue"];
                    colors.customProperty = "rainbow";

                    for (let index in colors) {
                        console.log(index + ": " + colors[index]);
                    }
                    // Output:
                    // 0: red
                    // 1: green
                    // 2: blue
                    // customProperty: rainbow
            

    - `forEach` method: là 1 method của Array (Utils Array) để thực thi một hàm (function) cho mỗi phần tử. Không thể dùng `break` hoặc `continue`

                eg: 
                    const numbers = [1, 2, 3, 4, 5];

                    numbers.forEach(function(value) {
                        console.log(value);
                    });


### Ultis function

    Utils (Tiện ích): Là các hàm có sẵn của JS, giúp code trở nên nha hơn. 

1. **String Utils**

    - `String Utils`: Là các hàm xử lý chuỗi

        - **trim()**: Hàm được dùng để cắt khoảng space hai đầu
            
            - trimLeft(): Cắt bên trái
            - trimRight(): Cắt bên phải

            ```
            eg:
                let className = "  K18 PlayWright   ";
                console.log(className.trim()); 
                // Output: "K18 PlayWright
            ```
            
        - **toLowerCase()**: Hàm dùng để chuyển đổi chuỗi thành chữ thường

            ```
            eg:
                let className = "  K18 PlayWright   ";
                console.log(className.trim().toLowerCase());
                // Output: "k18 playwright"
            ```
        
         - **toUpperCase()**: Hàm dùng để chuyển đổi chuỗi thành chữ hoa

            ```
            eg:
                let className = "  K18 PlayWright   ";
                console.log(className.trim().toUpperCase());
                // Output: "K18 PLAYWRIGHT"
            ```
        
        - **includes(\<substr\>)**: Hàm kiểm tra chuỗi có bao gồm (chứa) chuỗi con \<substr\> không. Hàm sẽ trả về true/false

            ```
            eg:
                let className = "  K18 PlayWright   ";
                console.log(className.includes("K18"));
                // Output: true
            ```

        - **replace(\<chuỗi cần thay\>, \<chuỗi mới\>)**: Hàm dùng để thay thế một chuỗi tồn tại thành một chuỗi khác. Nếu chuỗi cần thay thế không tồn tại, giá trị được giữ nguyên.

            ```
            eg: 
                let className = "  K18 PlayWright   ";
                console.log(className.replace("PlayWright", "PW")); 
                // Output: "  K18 PW   "
            ```
        - **split(\<tách bởi gì\>)**: Hàm dùng để tách chuỗi tại giá trị "tách bởi gì"

            ```
            eg:
                let emails = "tanjiro@gmail.com, inotsuke@gmail.com, zenitsu@gmail.com";
                const arrEmails = emails.split("@");
                const arrEmails2 = emails.split(', ');
                console.log(arrEmails); 
                // Output: ['tanjiro', 'gmail.com, inotsuke', gmail.com, zenitsu', 'gmail.com']

                console.log(arrEmails2);
                // Output: ['tanjiro@gmail.com', 'inotsuke@gmail.com', 'zenitsu@gmail.com']
            ```

        - **substring(\<điểm_bắt_đầu\>, \<điểm_kết_thúc\>)**: Hàm dùng để lấy 1 chuỗi con từ điểm bắt đầu tới điểm kết thúc

            ```
            eg:
                    let className = "  K18 PlayWright   ";
                    console.log(className.trim().substring(0, 3));
                    // Output: K18

                    console.log(className.trim().substring(5));
                    // Output: layWright
            ```

        - **indexOf(\<chuỗi ký tự\>)**: Hàm dùng để tìm vị trí của chuỗi con

            ```
            eg:
                let myCity = "Thai Binh"
                console.log(myCity.indexOf("a"));
                // Output: 2
            ```

2. **Array Utils**

    - `Array Utils`: Là các hàm xử lý mảng

        - **map**: Hàm tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài

            ```
            eg_1:
                const numbers = [1, 2, 3, 4, 5];
                const doubled = numbers.map(num => num * 2);

                console.log(doubled); // [2, 4, 6, 8, 10]
                console.log(numbers); // [1, 2, 3, 4, 5] - mảng gốc không thay đổi

            eg_2:
                const students = ['An', 'Bình', 'Cường'];
                const studentList = students.map((name, index) => ({ 
                    id: index + 1, 
                    name: name,
                    code: `SV00${index + 1}`
                }));

                console.log(studentList);
                /* Output:
                   [
                    { id: 1, name: 'An', code: 'SV001' },
                    { id: 2, name: 'Bình', code: 'SV002' },
                    { id: 3, name: 'Cường', code: 'SV003' }
                   ]*/
            ```

        - **filter**: Hàm tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện trong hàm callback. Trả về mảng đã được lọc

            ```
            eg_1:
                const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                const evenNumbers = numbers.filter(num => num % 2 === 0);

                console.log(evenNumbers); // [2, 4, 6, 8, 10]

                // mảng gốc không đổi
                console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
                
            eg_2: 
                const products = [
                    { name: 'iPhone 15', price: 28000000, category: 'phone', inStock: true },
                    { name: 'Samsung S24', price: 22000000, category: 'phone', inStock: false },
                    { name: 'iPad Pro', price: 35000000, category: 'tablet', inStock: true },
                    { name: 'MacBook Air', price: 32000000, category: 'laptop', inStock: true },
                    { name: 'AirPods', price: 4000000, category: 'accessory', inStock: true }
                ];
                // Lọc sản phẩm còn hàng
                const availableProducts = products.filter(product => product.inStock);
                console.log(availableProducts); // 4 sản phẩm còn hàng

                // Lọc sản phẩm giá dưới 30 triệu
                const affordableProducts = products.filter(product => product.price < 30000000);

                // Lọc nhiều điều kiện: điện thoại còn hàng
                const availablePhones = products.filter(product => product.category === 'phone' && product.inStock);
                console.log(availablePhones); // [iPhone 15]
            ```

        - **find**: Hàm tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Trả về undefined nếu không tìm thấy

            ```
            eg_1:
                const numbers = [1, 5, 3, 8, 2, 10, 7];

                // Tìm số chẵn đầu tiên
                const firstEven = numbers.find(num => num % 2 === 0);
                console.log(firstEven); // 8 (không phải 2 hay 10)

                // Tìm số lớn hơn 6
                const greaterThanSix = numbers.find(num => num > 6);
                console.log(greaterThanSix); // 8 (dừng ngay khi tìm thấy)

                // Không tìm thấy
                const negative = numbers.find(num => num < 0);
                console.log(negative); // undefined

            eg_2:
                const users = [
                    { id: 101, name: 'An', role: 'admin', active: true },
                    { id: 102, name: 'Bình', role: 'user', active: false },
                    { id: 103, name: 'Cường', role: 'user', active: true },
                    { id: 104, name: 'Dũng', role: 'admin', active: true }
                ];

                // Tìm user theo ID
                const userId = 103;
                const user = users.find(user => user.id === userId);
                console.log(user); // { id: 103, name: 'Cường', role: 'user', active: true }

                // Tìm admin đầu tiên
                const firstAdmin = users.find(u => u.role === 'admin');
                console.log(firstAdmin); // { id: 101, name: 'An', ... }

                // Tìm user không active
                const inactiveUser = users.find(u => !u.active);
                console.log(inactiveUser); // { id: 102, name: 'Bình', ... }
            
            ```
        
        - **reduce**: Hàm duyệt qua mảng và tích lũy các phần tử thành một giá trị duy nhất (số, chuỗi, object...) dựa trên hàm callback
        
            ```
            eg_1:
                const numbers = [1, 2, 3, 4, 5];

                // Cách hoạt động từng bước
                const sum = numbers.reduce((accumulator, current) => {
                    console.log(`accumulator: ${accumulator}, current: ${current}`);
                    return accumulator + current;
                }, 0);

                // accumulator: 0, current: 1 -> return 1
                // accumulator: 1, current: 2 -> return 3
                // accumulator: 3, current: 3 -> return 6
                // accumulator: 6, current: 4 -> return 10
                // accumulator: 10, current: 5 -> return 15
            
            eg_2:
                const cart = [
                    { product: 'Laptop', price: 20000000, quantity: 1 },
                    { product: 'Mouse', price: 300000, quantity: 2 },
                    { product: 'Keyboard', price: 800000, quantity: 1 },
                    { product: 'Monitor', price: 5000000, quantity: 2 }
                ];
                
                // Tính tổng tiền giỏ hàng
                const totalAmount = cart.reduce((total, item) => {
                    return total + (item.price * item.quantity); 
                }, 0);

                console.log(`Tổng tiền: ${totalAmount.toLocaleString('vi-VN')}đ`);
                // Tổng tiền: 31.400.000đ

                // Tính tổng số lượng sản phẩm
                const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
                console.log(`Tổng số sản phẩm: ${totalItems}`); // 6
            ```
        
        - **some**: Hàm kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện hay không. Trả về true/false.

            ```
            eg_1:
                const numbers = [1, 3, 5, 7, 8, 9];

                // Kiểm tra có số chẵn không?
                const hasEven = numbers.some(num => num % 2 === 0);
                console.log(hasEven); // true (vì có số 8)

                // Kiểm tra có số > 10 không?
                const hasGreaterThan10 = numbers.some(num => num > 10);
                console.log(hasGreaterThan10); // false
                
                // Dừng ngay khi tìm thấy
                const hasEvenWithLog = numbers.some(num => {
                    console.log(`Checking: ${num}`);
                    return num % 2 === 0;
                });
                // Checking: 1
                // Checking: 3
                // Checking: 5
                // Checking: 7
                // Checking: 8
                // => Dừng, không kiểm tra 9
            
            eg_2:
                const user = {
                    name: 'Nguyễn Văn A',
                    roles: ['user', 'editor']
                };
                const adminRoles = ['admin', 'superadmin'];
                const editorRoles = ['editor', 'admin'];

                // Kiểm tra user có quyền editor không?
                const canEdit = user.roles.some(role => editorRoles.includes(role));
                console.log(canEdit); // true (có role 'editor')

                // Kiểm tra user có phải admin không?
                const isAdmin = user.roles.some(role => adminRoles.includes(role));
                console.log(isAdmin); // false

                // Hàm kiểm tra quyền tổng quát
                function hasPermission(userRoles, requiredRoles) {
                    return userRoles.some(role => requiredRoles.includes(role));
                }
                console.log(hasPermission(user.roles, ['viewer', 'editor'])); // true
            ```

        - **every**: Hàm kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều kiện hay không. Trả về true/false.
        mảng thỏa mãn điều kiện hay không. Trả về true/false.

            ```
            eg_1:
                const numbers = [2, 4, 6, 8, 10];

                // Kiểm tra tất cả là số chẵn?
                const allEven = numbers.every(num => num % 2 === 0);
                console.log(allEven); // true

                // Kiểm tra tất cả > 0?
                const allPositive = numbers.every(num => num > 0);
                console.log(allPositive); // true

                // Kiểm tra tất cả > 5?
                const allGreaterThan5 = numbers.every(num => num > 5);
                console.log(allGreaterThan5); // false (2 và 4 không > 5)

                // Dừng ngay khi gặp false
                const checkWithLog = numbers.every(num => {
                    console.log(`Checking: ${num}`);
                    return num < 5;
                });
                // Checking: 2
                // Checking: 4
                // Checking: 6
                // => Dừng tại 6, không kiểm tra 8, 10
                console.log(checkWithLog); // false

            eg_2:
                const orderItems = [
                    { product: 'iPhone 15', quantity: 1, inStock: 5, price: 25000000 },
                    { product: 'AirPods', quantity: 2, inStock: 10, price: 4000000 },
                    { product: 'Case', quantity: 1, inStock: 20, price: 500000 }
                ];

                // Tất cả sản phẩm còn đủ hàng?
                const allAvailable = orderItems.every(item => item.inStock >= item.quantity);
                console.log(allAvailable); // true

                // Tất cả sản phẩm có giá hợp lệ?
                const allValidPrices = orderItems.every(item => item.price > 0);
                console.log(allValidPrices); // true

                // Kiểm tra giới hạn số lượng (max 10 mỗi sản phẩm)
                const withinQuantityLimit = orderItems.every(item => item.quantity <= 10);
                console.log(withinQuantityLimit); // true

                // Tổng hợp validation
                function canPlaceOrder(items) {
                    return items.every(item =>
                        item.inStock >= item.quantity &&
                        item.price > 0 &&
                        item.quantity > 0 &&
                        item.quantity <= 10
                    );
                }
            ```

        - **sort**:Hàm sắp xếp các phần tử trong mảng theo thứ tự (mặc định là alphabet/tăng dần). Thay đổi mảng gốc.

            ```
            eg_1:
                // Sort chuỗi
                const fruits = ['banana', 'apple', 'orange', 'grape'];
                fruits.sort();
                console.log(fruits); // ['apple', 'banana', 'grape', 'orange']

            eg_2:
                // BUG phổ biến: sort số KHÔNG đúng theo mặc định!

                const numbers = [10, 5, 40, 25, 1000, 1];
                numbers.sort();
                console.log(numbers); // [1, 10, 1000, 25, 40, 5] - SAI!
                // Vì sort mặc định chuyển thành string: "10" < "5"

                // CÁCH ĐÚNG: dùng compare function
                const numbers2 = [10, 5, 40, 25, 1000, 1];
                numbers2.sort((a, b) => a - b); // tăng dần
                console.log(numbers2); // [1, 5, 10, 25, 40, 1000] - ĐÚNG!

                // Giảm dần
                const numbers3 = [10, 5, 40, 25, 1000, 1];
                numbers3.sort((a, b) => b - a);
                console.log(numbers3); // [1000, 40, 25, 10, 5, 1]
            ```
        
        - **push**: Hàm thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng gốc và trả về độ dài mới.

            ```
            eg:
                const fruits = ['apple', 'banana'];
                const newLength = fruits.push('orange');

                console.log(fruits); // ['apple', 'banana', 'orange']
                console.log(newLength); // 3 (độ dài mới)

                // Push nhiều phần tử cùng lúc
                fruits.push('grape', 'mango');
                console.log(fruits); // ['apple', 'banana', 'orange', 'grape', 'mango']
            ```

        - **pop**: Hàm xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc và làm giảm độ dài.

            ```
            eg:
                const fruits = ['apple', 'banana', 'orange', 'grape'];
                const lastFruit = fruits.pop();

                console.log(lastFruit); // 'grape' - phần tử bị xóa
                console.log(fruits); // ['apple', 'banana', 'orange'] - mảng đã thay đổi

                // Pop từ mảng rỗng
                const empty = [];
                const result = empty.pop();
                console.log(result); // undefined
                console.log(empty); // []
            ```
        
        - **shift**: Hàm xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc và làm giảm độ dài

            ```
            eg:
                const fruits = ['apple', 'banana', 'orange', 'grape'];
                const firstFruit = fruits.shift();

                console.log(firstFruit); // 'apple' - phần tử bị
                xóa
                console.log(fruits); // ['banana', 'orange', 'grape'] - mảng đã thay đổi

                // Shift từ mảng rỗng
                const empty = [];
                const result = empty.shift();
                console.log(result); // undefined
                console.log(empty); // []
            ```
        
        - **unshift**: Hàm thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi mảng gốc và trả về độ dài mới của mảng.

            ```
            eg:
                const fruits = ['banana', 'orange'];
                const newLength = fruits.unshift('apple');

                console.log(fruits); // ['apple', 'banana', 'orange']
                console.log(newLength); // 3 (độ dài mới)

                // Unshift nhiều phần tử cùng lúc
                fruits.unshift('grape', 'mango');
                console.log(fruits); // ['grape', 'mango', 'apple', 'banana', 'orange']
            ```