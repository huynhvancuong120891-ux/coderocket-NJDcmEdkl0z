import { Shield, Clock, Users, Award, Smartphone, Headphones } from 'lucide-react';
const features = [
  {
    icon: Shield,
    title: 'An toàn & Bảo mật',
    description: 'Thông tin khách hàng được bảo mật tuyệt đối theo tiêu chuẩn quốc tế',
  },
  {
    icon: Clock,
    title: 'Giải ngân nhanh',
    description: 'Phê duyệt trong 24h, giải ngân ngay sau khi được duyệt',
  },
  {
    icon: Users,
    title: '10+ triệu khách hàng',
    description: 'Được hơn 10 triệu khách hàng trên toàn quốc tin tưởng',
  },
  {
    icon: Award,
    title: 'Uy tín hàng đầu',
    description: 'Công ty tài chính tiêu dùng lớn nhất Việt Nam',
  },
  {
    icon: Smartphone,
    title: 'Tiện lợi trên app',
    description: 'Quản lý khoản vay, thanh toán dễ dàng qua ứng dụng',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ',
  },
];
export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vì sao chọn FE CREDIT?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến dịch vụ tài chính tốt nhất với nhiều ưu điểm vượt trội
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00A859]/10 to-[#00D066]/10 rounded-2xl mb-5">
                <feature.icon className="w-8 h-8 text-[#00A859]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Mobile App Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-white rounded-3xl p-10 lg:p-16 shadow-2xl mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00A859]/5 to-transparent rounded-3xl"></div>
            <img 
              src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763788657561-4aad15bc-6784-4716-9c65-45ace1eb2521-1.png" 
              alt="Ứng dụng FE CREDIT" 
              className="w-full max-w-sm mx-auto h-auto relative z-10 drop-shadow-2xl"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-[#00A859] font-semibold text-sm uppercase tracking-wide">Tải app ngay</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Ứng dụng FE CREDIT
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Quản lý khoản vay, thanh toán tiện lợi mọi lúc mọi nơi với ứng dụng FE CREDIT trên điện thoại
              </p>
            </div>
            <ul className="space-y-4">
              {[
                'Đăng ký vay online nhanh chóng',
                'Thanh toán khoản vay chỉ với vài thao tác',
                'Theo dõi lịch sử giao dịch chi tiết',
                'Nhận thông báo nhắc nhở thanh toán'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#00A859] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#00A859] text-white hover:bg-[#008F4C] px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                Tải ứng dụng ngay
              </button>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#00A859] to-[#00D066] rounded-3xl p-10 lg:p-16 text-white text-center shadow-2xl">
          <h3 className="text-3xl lg:text-5xl font-bold mb-6">
            Sẵn sàng bắt đầu với FE CREDIT?
          </h3>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để nhận tư vấn miễn phí từ chuyên gia của chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-white text-[#00A859] hover:bg-gray-50 px-10 py-5 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl text-lg">
              Đăng ký ngay
            </button>
            <button className="border-3 border-white text-white hover:bg-white/10 px-10 py-5 rounded-xl font-bold transition-all text-lg backdrop-blur-sm">
              Gọi 1900 6669
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}