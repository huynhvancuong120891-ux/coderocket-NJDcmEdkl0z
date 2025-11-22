import { Button } from './ui/button';
import { ArrowRight, Calculator } from 'lucide-react';
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#E8F5E9] via-[#F1F8E9] to-[#E8F5E9] py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-[#00A859] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Vay tiêu dùng tin chấp
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                Hạn mức lên đến
                <span className="block text-[#00A859] mt-2">100 triệu</span>
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-xl text-gray-700">Nhận ngay</span>
                <span className="text-3xl lg:text-4xl font-bold text-[#00A859]">100 ngàn đồng</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#00A859] text-white hover:bg-[#008F4C] px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                Đăng ký vay ngay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-[#00A859] text-[#00A859] hover:bg-[#00A859]/10 px-8 py-6 text-base font-semibold rounded-lg">
                <Calculator className="mr-2 w-5 h-5" />
                Tính khoản vay
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00A859] rounded-full"></div>
                <span>Giải ngân trong 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00A859] rounded-full"></div>
                <span>Thủ tục đơn giản</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763788658838-4aad15bc-6784-4716-9c65-45ace1eb2521-4.png" 
              alt="FE Credit - Vay tiền nhanh" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: 'ellipse(100% 100% at 50% 100%)'
      }}></div>
    </section>
  );
}