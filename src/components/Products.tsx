import { CreditCard, Home, Car, Wallet, Smartphone, Receipt, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
const products = [
  {
    icon: Wallet,
    title: 'Vay tiền mặt',
    description: 'Hạn mức lên đến 100 triệu, giải ngân trong 24h, lãi suất ưu đãi',
    color: 'bg-[#00A859]',
  },
  {
    icon: CreditCard,
    title: 'Thẻ tín dụng',
    description: 'Mua sắm trả góp 0%, hoàn tiền đến 10%, miễn phí năm đầu',
    color: 'bg-[#E30613]',
  },
  {
    icon: Home,
    title: 'Vay mua nhà',
    description: 'Tài trợ đến 85% giá trị nhà, lãi suất từ 6.5%/năm, thời hạn 25 năm',
    color: 'bg-blue-600',
  },
  {
    icon: Car,
    title: 'Vay mua xe',
    description: 'Tài trợ 80% giá trị xe, phê duyệt nhanh, thủ tục đơn giản',
    color: 'bg-orange-600',
  },
  {
    icon: Smartphone,
    title: 'Trả góp điện thoại',
    description: 'Trả góp 0% lãi suất, duyệt nhanh qua app, nhận hàng ngay',
    color: 'bg-purple-600',
  },
  {
    icon: Receipt,
    title: 'Thanh toán hóa đơn',
    description: 'Thanh toán điện, nước, internet tiện lợi qua app FE CREDIT',
    color: 'bg-teal-600',
  },
];
const creditCardFeatures = [
  {
    icon: 'https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763788915893-4aad15bc-6784-4716-9c65-45ace1eb2521-0.png',
    title: 'Hạn mức lên đến',
    value: '60 000 000 ₫',
  },
  {
    icon: 'https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763788916511-4aad15bc-6784-4716-9c65-45ace1eb2521-1.png',
    title: 'Miễn phí thường niên',
    value: '',
  },
  {
    icon: 'https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763788917137-4aad15bc-6784-4716-9c65-45ace1eb2521-2.png',
    title: 'Chỉ tiêu trước trả sau đến',
    value: '45 ngày',
  },
  {
    icon: 'https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763788917457-4aad15bc-6784-4716-9c65-45ace1eb2521-3.png',
    title: 'Trả góp linh hoạt',
    value: '',
  },
];
export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Products Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sản phẩm & Dịch vụ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Giải pháp tài chính đa dạng, phù hợp với mọi nhu cầu của bạn
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-[#00A859] p-0 hover:underline font-semibold group">
                  Tìm hiểu thêm
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Credit Card Highlight Section */}
        <div className="bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] rounded-3xl p-8 lg:p-16 mb-20 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763788918112-4aad15bc-6784-4716-9c65-45ace1eb2521-4.png"
                alt="Thẻ tín dụng JCB Simplified Plus"
                className="w-full max-w-md mx-auto h-auto drop-shadow-2xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <span className="text-[#00A859] font-semibold text-sm uppercase tracking-wide">Đăng ký thẻ tin dụng</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  THẺ TÍN DỤNG<br />JCB SIMPLIFIED PLUS
                </h3>
                <p className="text-lg text-gray-600">
                  Tính năng nổi bật
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {creditCardFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="mb-3">
                      <img 
                        src={feature.icon} 
                        alt={feature.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <p className="text-xs text-gray-600 mb-1 leading-tight">{feature.title}</p>
                    {feature.value && (
                      <p className="text-sm font-bold text-[#00A859]">{feature.value}</p>
                    )}
                  </div>
                ))}
              </div>
              <Button className="bg-[#00A859] text-white hover:bg-[#008F4C] px-10 py-6 text-lg font-bold w-full rounded-xl shadow-lg hover:shadow-xl transition-all uppercase">
                Đăng ký ngay
              </Button>
            </div>
          </div>
        </div>
        {/* Process Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Quy trình đăng ký<br />đơn giản
              </h3>
              <p className="text-lg text-gray-600">
                Chỉ cần 3 bước để hoàn tất đăng ký vay
              </p>
            </div>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Đăng ký online', desc: 'Điền thông tin và tải tài liệu qua app hoặc website' },
                { step: '2', title: 'Phê duyệt nhanh', desc: 'Nhận kết quả trong vòng 24 giờ làm việc' },
                { step: '3', title: 'Giải ngân nhanh', desc: 'Nhận tiền ngay sau khi được phê duyệt' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00A859] to-[#00D066] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#00A859] font-bold text-lg">Bước {item.step}</span>
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-32 h-32 text-[#00A859]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                  <circle cx="8" cy="10" r="1.5"/>
                  <circle cx="12" cy="10" r="1.5"/>
                  <circle cx="16" cy="10" r="1.5"/>
                </svg>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#00A859] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#00A859] rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}