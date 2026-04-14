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
              className="drop-shadow-2xl w-auto h-auto max-w-[350px]"
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Encontre as Melhores Ofertas e Achados Online!
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Se você adora fazer compras online e está sempre em busca de produtos
            incríveis com descontos imperdíveis, este grupo é para você! Aqui você
            vai encontrar várias promoções de roupas, acessórios, itens para o lar,
            para os filhos e muito mais!
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              Roupas
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              Acessórios
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              Casa
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              Kids
            </span>
          </div>

          <a
            href={whatsappLink}
            className="btn-pulse inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            ENTRAR NO GRUPO!
          </a>

          <p className="mt-4 text-white/70 text-sm">
            Todas as lojas super confiáveis
          </p>
        </div>
      </header>

      {/* Benefits Section - Fundo Cinza Claro */}
      <section className="bg-[#FAFAFA] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Mockup Celular */}
            <div className="flex justify-center">
              <Image
                src="/imagens/mockup celular.png"
                alt="Mockup do grupo no celular"
                width={400}
                height={800}
                className="drop-shadow-2xl"
              />
            </div>

            {/* Conteúdo */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                <span className="text-black">O que você vai encontrar</span><br />
                <span className="text-[#F9098A]">no grupo?</span>
              </h2>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700">Promoções exclusivas e descontos de até 70% OFF</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700">Cupons de desconto que funcionam de verdade</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700">Achados com os melhores preços do Mercado Livre, Shopee e Amazon</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700">Só produtos de vendedores confiáveis, com garantia e entrega rápida</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Chega de cair em furada ou perder horas procurando promoção. Entre agora no grupo e receba os melhores achados direto no seu WhatsApp!
              </p>

              <a
                href={whatsappLink}
                className="btn-pulse inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                QUERO PARTICIPAR!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section - Fundo Rosa */}
      <section className="bg-[#F9098A] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-white mb-12">
            O que dizem nossos membros
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F9098A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-800">Ana Paula</p>
                  <div className="flex text-yellow-400">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;Consegui mais de 50% de desconto em roupas para meus filhos! O grupo é incrível, sempre tem promoções imperdíveis.&rdquo;
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F9098A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div>
                  <p className="font-bold text-gray-800">Mariana Silva</p>
                  <div className="flex text-yellow-400">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;Melhor grupo de ofertas que já entrei! Economizei muito na decoração da minha casa. Super recomendo!&rdquo;
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F9098A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div>
                  <p className="font-bold text-gray-800">Rafael Costa</p>
                  <div className="flex text-yellow-400">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                &ldquo;Obrigado pelas dicas! Comprei vários acessórios com preços absurdos de bons. Todas as lojas são oficiais e confiáveis mesmo!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Fundo Cinza */}
      <section className="bg-[#FAFAFA] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Não perca mais tempo procurando!
          </h2>
          <p className="text-black/70 text-lg mb-8">
            Entre agora para o nosso grupo e fique por dentro das melhores promoções da internet.
          </p>
          <a
            href={whatsappLink}
            className="btn-pulse inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:from-green-600 hover:to-green-800 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            ENTRAR NO GRUPO!
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-black/60">
            ©2026 Zona de Economia - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
