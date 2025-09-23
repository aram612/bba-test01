## Tổng hợp kiến thức đã học tại buổi 1

### Playwright, NVM & NodeJs

1. Playwright là gì

    - Là một framework ● Tiền thân là Puppeteer, được Microsoft tài trợ và phát triển lên 
    - Trang chính thức: `https://playwright.dev/`
    - Ưu điểm:

        - Cross-browser: Chạy được trên nhiều trình duyệt
        - Cross-platform: Hỗ trợ chạy trên đa nền tảng hệ điều hành
        - Auto-wait: Playwright có tính năng tự động chờ cho element trước khi thực hiện action => Giúp test ổn định hơn, tránh lỗi flaky
        - Web-first assertions: Assertion thông minh, chờ đến khi điều kiện thật sự đúng.
        - Tracing: Mode lưu lại toàn bộ quá trình test => dễ debug test fail

2. Tại sao chọn playwright

    - Cú pháp đơn giản, hiện đại
    - Dễ học, dễ tiếp cận

3. NVM & NodeJs

    - NVM = Node Version Manager: Là trình quản lý các phiên bản NodeJs
    - NodeJs là công cụ để chạy code
    - Lựa chọn NVM và NodeJs vì: NodeJs được cài trực tiếp vào máy thông qua NVM, dễ chuyển đổi nhiều phiên bản NodeJs thông qua NVM

### Git

1. SSH Key

    - SSH Key là cặp khoá: `id_rsa` và `id_rsa.pub`
    
        - `id_rsa`: là key private => cần được giữ bí mật
        - `id_rsa.pub`: là key public => có thể gửi cho người khác

    - SSH Key giúp xác thực đăng nhập dễ dàng hơn
    - Câu lệnh tạo SSH Key: `ssh-keygen -t rsa -b 4096 -C "your_email@examplec om"`

    **Lưu ý**: Nếu trên máy tính đã từng tồn tại SSH Key => cần lưu SSH Key ra một nơi khác rồi mới ghi đè SSH Key mới

2. Create Repo & connnect SSH Key
    
    - Để kết nối với GitHub thông qua SSH Key, thực hiện:
        
        - B1: lấy nội dung ssh key: tại cmd, gõ: `cat ~/.ssh/id_rsa.pub`
        - B2: Truy cập: https://github.com/settings/ssh/new
        - B3: Thêm SSH Key đã lấy tại B1
        - B4: Click `Add SSH Key`
