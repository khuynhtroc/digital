// components/Newsletter.tsx
export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-16 mt-16">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin</h2>
        <p className="text-gray-700 mb-6">
          Nhận file và tài nguyên mới nhất trực tiếp qua email
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Nhập email của bạn"
            className="p-3 border rounded flex-1"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  );
}
