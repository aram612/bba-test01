## Tổng hợp kiến thức đã học tại buổi 3

### Git

1. Các câu lệnh Git

    - git commit --amend: Chỉnh sửa commit gần nhất
    - git commit --amend -m"<message>": Chỉnh sửa commit gần nhất với message mong muốn
    - git restore --staged <file>: gỡ file chỉ định ra khỏi vùng staging area
    - git reset HEAD~`n`: move commit gần nhất khỏi vùng repository, các thay đổi vẫn được giữ nguyên ở vùng working directory và không nằm trong vùng staging
    - git pull origin main: lấy code từ server về => luôn luôn pull code trước khi thay đổi hoặc tạo nhánh mới để tránh conflict
    - git config --global init.defaultBranch main: Đặt nhánh mặc định là nhánh main
    - git branch: Xem danh sách các nhánh đang tồn tại trong repo
    - git branch `tên_branch`: Tạo nhánh mới tại repo đang làm việc
    - git checkout `tên_branch`: Chuyển sang nhánh được chỉ định
    - git checkout -b `tên_branch`: Vừa tạo vừa chuyển sang nhánh vừa tạo
    - git branch -D `tên_branch`: Xoá branch mong muốn (Không phải branch đang dùng, nếu là branch đang dùng sẽ báo lỗi)
    - file `.gitignore`: Dùng để loại bỏ các file không cần git theo dõi

2. Kiến thức bổ sung

    Khi sử dụng `git log`, ta có thể thay danh sách các commit chứa các revision (hoặc commit hash). Để truy cập revision mong muốn để theo dõi flow code commited, thực hiện:
    
    `git checkout <revision mong muốn>`

### JavaScript
1. Convention

    Khi thực hiện tạo file/variable/class mới, cần đặt tên file/variable/class theo quy chuẩn. Các quy chuẩn khi đặt tên:
    
    - kebab-case: tên file
    ```
        eg: lesson-2, exercise-1.txt
    ```
    - camelCase: tên biến
    ```
        eg: myName, myAddr
    ```
    - PascalCase: tên class
    ```
        eg: Student, Subject
    ```

2. Console.log

    `console.log` được dùng để in text hoặc giá trị của biến ra màn hình. Có 3 cách dùng `console.log`

    - Dùng dấu `''`: 
    ```
        eg: console.log('Watashi wa Tanjiro desu')
            console.log('Toi la: ', <tên_biến>')
            console.log('Toi la: ' + <tên biến>')
    ```
    - Dùng dấu `""`: console.log("Watashi wa Zenitsu desu')
    ```
        eg: console.log("Watashi wa Tanjiro desu")
            console.log("Toi la: ', <tên_biến>")
            console.log("Toi la: ' + <tên biến>")
    ```
    - Dùng dấu ` `` `: console.log(\`Watashi wa Inotsuke desu\`)
    ```
        eg: console.log(`"Watashi wa Tanjiro desu`)
            console.log(`Toi la: ', <tên_biến>`)
            console.log(`Toi la: ' + <tên biến>`)
            console.log(`Toi la: ${tên biến}`)
    ```

3. Object

    Object là đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng 1 biến hoặc hằng số. Cách khai báo Object:
    ```
    let/const <name_object> = {
        <attribute>: <value>
        ....
        }
    ```
    ```
        eg: const student = {
                name: "Hoang",
                role: "student",
                age: 27,
            }

            const myClass = {
                name: "Hoang",
                role: "student",
                age: 27,
                class: {
                    name: "K18",
                    subject: "Fullstack Automation Playwright TS"
                }
            }
    ```

    Cách truy cập thuộc tính và lấy giá trị tương ứng của thuộc tính: 
    
    - cách 1: `name_object`.`name_attribute`
    - cách 2: `name_object`[`"name_attribute"`]

    ```
        eg: Với object "student" ở ví dụ trên, để truy cập và lấy giá trị của thuộc tính name:
            - student.name
            - student["name"]
    ```

    Cách xoá phần tử khỏi object:

    `delete <name_object>.<name_attribute>`

    ```
        eg:
            let employee = {
                name: 'Le Van C',
                age: 30,
                department: 'HR'
            };

            delete employee.age;
            console.log(employee);
            
            => {name: 'Le Van C', department: 'HR'}
    ```
    
    Cách cập nhật giá trị cho thuộc tính chỉ định:
    `<name_object>.<name_attribute> = <new value>`

    Cách thêm thuộc tính mới cho object:
    `<name_object>["<new_attribute"] = <valure>`

    **Lưu ý**: Nếu khai báo Object là `const` thì việc thay đổi object đã khai báo bằng 1 object mới là không được phép.

        ```
            eg:
                const student = {“name”: “alex”, “age”: 20}
                student = {“name”: “Nagi”, “age”: 18} => lỗi
        ```

4. Array

    Mảng là một kiểu dữ liệu đặc biệt dùng để lưu trữ danh sách nhiều giá trị (giá trị là nhiều kiểu giá trị) trong cùng một biến/hằng số. Cách khai báo mảng:

    `const/let <name_arr> = [<list các gia trị cách nhau bởi dấu phẩy>]`

    Cách truy xuất giá trị trong mảng:

    `<name_arr>.[<index_cần_lấy_giá_trị>]`

    Cách thêm phần tử vào trong mảng:

    `<name_arr>.push(<giá trị cần thêm>)`


5. Function

    Function(Hàm) là đoạn code được đặt tên và bao hàm trong 1 block code {}, hàm được dùng để thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể. Hàm có thể là hàm trả về hoặc hàm không trả về

    - Hàm không trả về:
    ```
        eg:
            function <nameFunction>() {
                    // code
            }
    ```
    - Hàm có trả về
    ```
        eg:
            function <nameFunction>() {
                    // code
                    return ...;
            }
    ```

