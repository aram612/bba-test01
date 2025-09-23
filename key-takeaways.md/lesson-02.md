## Tổng hợp kiến thức đã học tại buổi 2

### Git

<span id="git-la-gi"></span>
1. Git là gì?

    Git là 1 VCS nhưng được miễn phí và có nhiều tính năng vượt trội

2. Sự khác nhau của Git & GitHub

    - Git:

        - Là 1 phần mềm được cài trên máy
        - Là 1 commanline tool
        - Là công cụ quản lý phiên bản, đưa file vào repo
        - Có các tình năng của VCS
    
    - GitHub:
        
        - Là 1 dịch vụ Web với host trên website
        - Là công cụ có UI
        - Là nơi để upload repo Git
        - Có các tính năng của VCS và 1 số tính năng khác

3. Các trạng thái của Git

    - Có 3 trạng thái:

        - Working Directory: Nơi các file có sự thay đổi hoặc có file mới được thêm
        - Staging Area: Nơi ác file được đưa vào vùng chuẩn bị commit
        - Repository: Các commit

4. Các câu lệnh Git

    - git init: Khởi tạo 1 thư mục được quản lý bởi Git
    - git config user.name/email || git config --global user.name/email: Cấu hình username và email cho 1 repo hoặc toàn bộ repo
    - git add <`name file`> || git add . : Thực hiện thêm 1 file tuỳ chọn hoặc toàn bộ file/folder vào vùng staging
    - git status: Xem trạng thái file/folder 
    - git commit -m "`message`": commit repo với `message` là tin nhắn commit

5. Git Convention

    Thực hiện commit theo dạng: <`type`> <`short_description`>
    trong đó:

    - type:

        - chore: Sửa nhỏ lẻ
        - feat: tính năng mới
        - fix: sửa lỗi
    
    - short_description: mô tả ngắn gọn

### JavaScript basic
1. Cách chạy 1 chương trình JavaScript

    Sử dụng câu lệnh tại terminal: ``` node `name file.js` ```
    
    Nếu file nằm tại 1 folder khác với folder đang đứng ở terminal:

    ``` node `đường dẫn tới file` ```

    eg: node js-course\lesson-02\10-three-equal.js

2. Comment

    Để comment trong JS, sử dụng đấu //

    - comment 1 dòng: //
    - comment nhiều dòng: 
        
        ```
            // line 1

               line 2

            .........// 
        ```

        hoặc

        ```
            /* line 1
               line 2
               ......*/
        ```
    
3. Variable & Const

    Có 2 cách để khai báo biến trong JS:
    
    - var ```tên biến``` = ```value```
    - let ```tên biến``` = ```value```

    Để thay đổi giá trị (value) của biến: ```tên biến``` = ```value```

    eg: 
    ```
    var name =  "Hoang"
    name = "Hoang 2"
    ```

    Để khai báo 1 hằng số trong JS:
    
    - const ```tên hằng số``` = ```value```
    
    Để in giá trị của variable & const, sử dụng lệnh: 
    ```
    console.log(name variable/const)
    ```

    Sự khác nhau của var, let, const:

    - var: có scrope trong 1 function, cho phép gán lại và khai báo lại giá trị
    - let: có scope trong 1 block code ( {}: 1 block code ), cho phép gán lại nhưng không được khai báo lại giá trị
    - const: có scope tương tự let nhưng không thể gán lại hoặc khai báo lại

    => mặc định dùng ```const```, chỉ khi cần gán lại giá trị mới dùng ```let```. Không dùng ```var```

4. Data type

    Các loại data type trong JS:

    - number: kiểu số
    - string: kiểu chuỗi
    - boolean: true/false
    - undefined: chưa được gán giá trị
    - null: giá trị rỗng
    - symbol: giá trị duy nhất
    - bigint: số nguyên rất lớn
    
    eg: 
    ```
    const age = 25; // Số nguyên
    const price = 19.99; // Số thực
    const infinity = Infinity; // Vô hạn
    const notANumber = NaN; // Không phải là số

    const name = "John"; // Dùng nháy kép
    const message = 'Hello'; // Dùng nháy đơn
    const template = `Age: 10`; // Dùng ``

    const isActive = true; // Giá trị đúng
    const isComplete = false; // Giá trị sai
    ```

    Để biết 1 biến/hằng số có kiểu gì, sử dụng câu lệnh: `typeof`

    ```
    const isActive = true;
    const firstName = "Hoang";
    const age = 26;
    const price = 188.99;

    console.log(typeof isActive); // ->  boolean
    console.log(typeof firstName);// ->  string
    console.log(typeof age);// ->  number
    console.log(typeof price);// ->  number
    ```

5. Toán tử so sánh

    Toán tử so sánh dùng để so sánh 2 toán hạng => kết quả trả về sẽ là dạng boolean

    Các loại toán tử so sánh:
    
    - so sánh bằng: `==` hoặc `===`

        - `==`: Là so sánh sau khi chuyển đổi kiểu
        - `===`: Là so sánh giá trị và kiểu dữ liệu - không chuyển đổi kiểu
        => luôn dùng so sánh `===`
    - so sánh không bằng: `!=` hoặc `!==`
    - so sánh lớn hơn, nhỏ hơn: `>` `<` `>=` `<=`

6. Toán tử logical

    Toán tử logical dùng để kết hợp điều kiện
    Có 2 loại:
    - `&& (And)`: thoả mãn cả 2 vế thì trả về true, ngược lại false
    - `|| (Or)`: thoả mãn 1 trong 2 vế thì trả về true, cả 2 vế đều không thoả mãn trả về false

7. Unary (Toán tử 1 ngôi)

    Là toán tử chỉ cần một toán hạng để thực hiện

    - prefix: toán tử nằm ở phía trước -> tăng trước, trả về sau:
    
        - `++x`
        - `--x`
    
    - postfix: toán tử nằm ở phía sau -> trả về trước, tăng sau

        - `x++`
        - `x--`

8. Condition

    Dùng để kiểm tra logic trước khi chạy: Điều kiện đúng thì chạy A, sai thì chạy B (hoặc không có B)

    Sử dụng: 
    
    ```
    if (condition) {
        // code...
    }
    ```

    Có thể kết hợp nhiều condition

    ```
    if (condition 1 && condition 2) {
        //code....
    }
    ```

    ```
    if (condition 1 || condition 2) {
        //code...
    }
    ```

    ```
    if (condition 1) {
        if (condition 2){
            //code...
        }
    }

9. Loop

    Dùng để lặp lại 1 đoạn logic và thực hiện 1 action. Có thể lặp số lần chỉ định, hoặc vô hạn

    Cú pháp:
    ```
    for (condition khởi tạo; condition loop; update) {
        //code
    }

    trong đó:
    - condition khởi tạo: chạy 1 lần duy nhất khi vòng lặp start
    - condition loop: nếu đúng thì chạy tiếp, sai thì dừng
    - update: chạy vào mỗi cuối vòng lặp để thay đổi giá trị của biến đếm
    ```

    eg:
    ```
    for (let i = 0;i < 5; i++) {
        console.log("Xin chào!")
    }

    ```
