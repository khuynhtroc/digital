export default function Sidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold mb-3">Tìm kiếm</h4>
        <input type="text" placeholder="Nhập từ khóa..." className="w-full border p-2 rounded" />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold mb-3">Danh mục</h4>
        <ul className="space-y-2 text-blue-600">
          <li>SEO</li>
          <li>Marketing</li>
          <li>Technology</li>
        </ul>
      </div>
    </div>
  );
}
