import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763782905539-4aad15bc-6784-4716-9c65-45ace1eb2521-2.png"
                alt="FE CREDIT"
                className="h-12 w-auto"
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#products" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors flex items-center gap-1">
                Sản phẩm <ChevronDown className="w-4 h-4" />
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors">
                Về chúng tôi
              </a>
              <a href="#support" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors">
                Hỗ trợ
              </a>
              <a href="#news" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors">
                Tin tức
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors">
                Liên hệ
              </a>
            </div>
            <Button className="bg-[#00A859] hover:bg-[#008F4C] text-white px-6">
              Đăng ký ngay
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-4">
              <a href="#products" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors">
                Sản phẩm
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors">
                Về chúng tôi
              </a>
              <a href="#support" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors">
                Hỗ trợ
              </a>
              <a href="#news" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors">
                Tin tức
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#00A859] font-medium transition-colors">
                Liên hệ
              </a>
              <Button className="bg-[#00A859] hover:bg-[#008F4C] text-white w-full">
                Đăng ký ngay
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}