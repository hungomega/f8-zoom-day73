# Day 73 – Next.js App Router

## Giới thiệu

Dự án thực hành Next.js nhằm tìm hiểu cơ chế routing, Layout, Dynamic Routes, Client Components và cách lấy dữ liệu từ URL bằng `params` và `searchParams`.

## Công nghệ sử dụng

- **Next.js 16** – React Framework.
- **React 19** – Xây dựng giao diện.
- **JavaScript (JSX)** – Ngôn ngữ lập trình.
- **Tailwind CSS 4** – Styling giao diện.
- **ESLint** – Kiểm tra chất lượng code.

## Các kiến thức đã thực hành

### 1. Static Routing

- Tạo các trang bằng thư mục và file `page.jsx`.
- Xây dựng các trang Home, About, Products, Contact.
- Hiểu cơ chế routing tự động của Next.js App Router.

### 2. Layout và Navigation

- Sử dụng `layout.jsx` để xây dựng giao diện dùng chung.
- Sử dụng `children` để render nội dung trang.
- Sử dụng `Link` từ `next/link` để điều hướng giữa các trang mà không tải lại toàn bộ trang.

### 3. Dynamic Routing

- Sử dụng Dynamic Segment `[id]`.
- Nhận tham số URL thông qua `params`.
- Sử dụng `async/await` để lấy dữ liệu từ params trong Next.js 15+.

Ví dụ:

```text
/products/123
/products/456
```

### 4. Client Components

- Phân biệt Server Component và Client Component.
- Sử dụng directive `"use client"`.
- Sử dụng React Hook `useState` để quản lý state.
- Xử lý sự kiện `onClick`.
- Xây dựng Counter với chức năng tăng và giảm giá trị.

### 5. Search Params

- Nhận query string thông qua `searchParams`.
- Sử dụng `async/await` để lấy dữ liệu.
- Xử lý giá trị mặc định khi query parameter không tồn tại.

Ví dụ:

```text
/products?page=2
/products?page=5
```

### 6. URL Parameters

Phân biệt hai cách lấy dữ liệu từ URL:

| params              | searchParams          |
| ------------------- | --------------------- |
| Lấy Dynamic Segment | Lấy Query String      |
| `/products/123`     | `/products?page=2`    |
| Lấy ID sản phẩm     | Lấy số trang hiện tại |

## Cấu trúc dự án

```text
src/
└── app/
    ├── _components/
    │   ├── Nav.jsx
    │   └── Counter.jsx
    │
    ├── about/
    │   └── page.jsx
    │
    ├── contact/
    │   └── page.jsx
    │
    ├── home/
    │   └── page.jsx
    │
    ├── products/
    │   ├── [id]/
    │   │   └── page.jsx
    │   ├── [...slug]/
    │   │   └── page.jsx
    │   ├── best-seller/
    │   │   └── page.jsx
    │   └── page.jsx
    │
    ├── posts/
    │   └── [...slug]/
    │       └── page.jsx
    │
    ├── globals.css
    ├── layout.jsx
    └── page.jsx
```

## Cài đặt và chạy dự án

Clone repository:

```bash
git clone <repository-url>
```

Di chuyển vào thư mục dự án:

```bash
cd day73
```

Cài đặt dependencies:

```bash
npm install
```

Chạy development server:

```bash
npm run dev
```

Truy cập:

```text
http://localhost:3000
```

## Mục tiêu học tập

- Nắm vững cấu trúc Next.js App Router.
- Hiểu cách tổ chức routing và Layout.
- Biết cách xử lý Dynamic Routes và Query Parameters.
- Phân biệt Server Components và Client Components.
- Làm nền tảng để tiếp tục học Data Fetching, API Routes và xây dựng ứng dụng Fullstack với Next.js.

---

**Learning Next.js – Day 73**
