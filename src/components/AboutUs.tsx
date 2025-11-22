export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <div>
              <span className="text-[#00A859] font-semibold text-sm uppercase tracking-wide">Về chúng tôi</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
                FE CREDIT
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              FE CREDIT là công ty tài chính tiêu dùng hàng đầu tại Việt Nam, được thành lập từ năm 2015. Chúng tôi tự hào là đơn vị tiên phong trong việc cung cấp các giải pháp tài chính linh hoạt, hiện đại và phù hợp với nhu cầu của người Việt Nam.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Với hơn 10 triệu khách hàng trên toàn quốc, chúng tôi cam kết mang đến những sản phẩm và dịch vụ tài chính chất lượng cao, giúp khách hàng dễ dàng tiếp cận nguồn vốn để thực hiện ước mơ của mình.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#00A859] mb-2">10M+</div>
                <div className="text-gray-600 font-medium">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#00A859] mb-2">500+</div>
                <div className="text-gray-600 font-medium">Chi nhánh</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#00A859] mb-2">8+</div>
                <div className="text-gray-600 font-medium">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763782905109-4aad15bc-6784-4716-9c65-45ace1eb2521-1.png" 
                alt="Về FE Credit" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#00A859] rounded-3xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#00A859]/20 rounded-3xl -z-10"></div>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="bg-gradient-to-br from-[#E8F5E9] via-white to-[#F1F8E9] rounded-3xl p-10 lg:p-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-lg text-gray-600">
              Hàng triệu khách hàng đã tin tưởng và lựa chọn FE CREDIT
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Chị Nguyễn Thị Hương', location: 'TP. Hồ Chí Minh', text: 'Thủ tục vay đơn giản, nhanh chóng. Tôi đã nhận được khoản vay chỉ sau 24 giờ đăng ký. Dịch vụ khách hàng rất tận tình.' },
              { name: 'Anh Trần Văn Minh', location: 'Hà Nội', text: 'Lãi suất hợp lý, thanh toán linh hoạt. FE CREDIT đã giúp tôi mua được chiếc xe ô tô mơ ước.' },
              { name: 'Chị Lê Thu Hà', location: 'Đà Nẵng', text: 'App FE CREDIT rất tiện lợi, thanh toán khoản vay chỉ mất vài phút. Tôi rất hài lòng với dịch vụ.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-5 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}