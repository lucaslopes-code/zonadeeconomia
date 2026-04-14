import Image from "next/image";

export default function Home() {
  const whatsappLink = "https://chat.whatsapp.com/FnQ5WhQquuAFsNtynRvZ1u";

  return (
    <div className="min-h-screen">
      {/* Hero Section - Fundo Rosa */}
      <header className="bg-[#F9098A]">
        <div className="max-w-4xl mx-auto px-4 py-10 sm:py-16 text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/imagens/logo.png"
              alt="Zona de Economia"
              width={350}
              height={100}
              className="drop-shadow-2xl w-auto h-auto max-w-[250px] sm:max-w-[350px]"
              priority
            />
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-2">
            Encontre as Melhores Ofertas e Achados Online!
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Se você adora fazer compras online e está sempre em busca de produtos
            incríveis com descontos imperdíveis, este grupo é para você! Aqui você
            vai encontrar várias promoções de roupas, acessórios, itens para o lar,
            para os filhos e muito mais!
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              Roupas
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              Acessórios
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              Casa
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              Kids
            </span>
          </div>

          <a
            href={whatsappLink}
            className="btn-pulse inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            ENTRAR NO GRUPO!
          </a>

          <p className="mt-4 text-white/70 text-xs sm:text-sm">
            Todas as lojas super confiáveis
          </p>
        </div>
      </header>

      {/* Benefits Section - Fundo Cinza Claro */}
      <section className="bg-[#FAFAFA] py-12 sm:py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Conteúdo - Aparece primeiro no mobile */}
            <div className="text-center md:text-left order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center md:text-left">
                <span className="text-black">O que você vai encontrar</span><br />
                <span className="text-[#F9098A]">no grupo?</span>
              </h2>

              {/* Checklist */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left max-w-md mx-auto md:mx-0">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base sm:text-lg text-gray-700">Promoções exclusivas e descontos de até 70% OFF</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base sm:text-lg text-gray-700">Cupons de desconto que funcionam de verdade</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base sm:text-lg text-gray-700">Achados com os melhores preços do Mercado Livre, Shopee e Amazon</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base sm:text-lg text-gray-700">Só produtos de vendedores confiáveis, com garantia e entrega rápida</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-md mx-auto md:mx-0">
                Chega de cair em furada ou perder horas procurando promoção. Entre agora no grupo e receba os melhores achados direto no seu WhatsApp!
              </p>

              <div className="flex justify-center">
                <a
                  href={whatsappLink}
                  className="btn-pulse inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  QUERO PARTICIPAR!
                </a>
              </div>
            </div>

            {/* Mockup Celular - Aparece depois no mobile */}
            <div className="flex justify-center order-2">
              <Image
                src="/imagens/mockup celular.png"
                alt="Mockup do grupo no celular"
                width={400}
                height={800}
                className="drop-shadow-2xl w-full max-w-none sm:max-w-[400px] md:max-w-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section - Fundo Rosa */}
      <section className="bg-[#F9098A] py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
            O que dizem nossos membros
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F9098A] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">Ana Paula</p>
                  <div className="flex text-yellow-400 text-sm">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                &ldquo;Consegui mais de 50% de desconto em roupas para meus filhos! O grupo é incrível, sempre tem promoções imperdíveis.&rdquo;
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F9098A] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  M
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">Mariana Silva</p>
                  <div className="flex text-yellow-400 text-sm">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                &ldquo;Melhor grupo de ofertas que já entrei! Economizei muito na decoração da minha casa. Super recomendo!&rdquo;
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F9098A] rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  R
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm sm:text-base">Rafael Costa</p>
                  <div className="flex text-yellow-400 text-sm">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                &ldquo;Obrigado pelas dicas! Comprei vários acessórios com preços absurdos de bons. Todas as lojas são oficiais e confiáveis mesmo!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Fundo Cinza */}
      <section className="bg-[#FAFAFA] py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6">
            Não perca mais tempo procurando!
          </h2>
          <p className="text-black/70 text-base sm:text-lg mb-6 sm:mb-8 px-2">
            Entre agora para o nosso grupo e fique por dentro das melhores promoções da internet.
          </p>
          <a
            href={whatsappLink}
            className="btn-pulse inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            ENTRAR NO GRUPO!
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] py-6 sm:py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-black/60 text-xs sm:text-sm">
            ©2026 Zona de Economia - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
