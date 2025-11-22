import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763782905539-4aad15bc-6784-4716-9c65-45ace1eb2521-2.png"
              alt="FE CREDIT"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400">
              Công ty tài chính tiêu dùng hàng đầu Việt Nam
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00A859] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00A859] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00A859] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sản phẩm</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Vay tiền mặt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Thẻ tín dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vay mua nhà</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vay mua xe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trả góp điện thoại</a></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hướng dẫn vay</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tải ứng dụng</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Hotline: 1900 6669</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>info@fecredit.com.vn</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Tầng 18, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, Quận 1, TP.HCM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FE CREDIT. Bản quyền thuộc về Công ty Tài chính TNHH MTV Ngân hàng TMCP Ngoại thương Việt Nam.</p>
        </div>
      </div>
    </footer>
  );
}