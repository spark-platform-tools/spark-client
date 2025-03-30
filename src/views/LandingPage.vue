<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue'
import FooterLayout from '../components/layout/FooterLayout.vue'
</script>

<template>
  <AppHeader />
  <div class="w-full bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span
          class="inline-block px-3 py-1 text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50 rounded-full mb-4">
          NOSSA PLATAFORMA
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Tudo o que você precisa para
          <span class="text-purple-600 dark:text-purple-400">dominar</span> a tecnologia
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Uma experiência completa com cursos, desafios, comunidade e suporte para acelerar sua
          evolução.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
              </path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Conteúdo Avançado</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Aprenda com as melhores tecnologias e metodologias do mercado, direto ao ponto e do
            jeito certo.
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
              </path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Comunidade Ativa</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Tire dúvidas, compartilhe projetos e conecte-se com milhares de devs ambiciosos como
            você.
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
              </path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Certificado</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Ao concluir os desafios, receba um certificado reconhecido no mercado para comprovar seu
            conhecimento.
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122">
              </path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Projetos Práticos</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Aprenda na prática construindo projetos reais que vão direto para seu portfólio.
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Acesso Vitalício</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Uma vez adquirido, o conteúdo é seu para sempre, com atualizações constantes.
          </p>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Suporte Personalizado
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Nossa equipe está disponível para te ajudar a superar qualquer obstáculo na sua jornada.
          </p>
        </div>
      </div>

      <div class="text-center mt-20">
        <a href="#pricing"
          class="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl">
          Começar Agora
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="py-12 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">Nossos Planos</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Escolha o plano perfeito para suas necessidades. Todos os planos incluem um período de teste gratuito.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-purple-100 dark:border-purple-900/50 transition-all hover:shadow-purple-200 dark:hover:shadow-purple-900/30">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Básico</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">Ideal para indivíduos e pequenos projetos</p>

            <div class="mb-6">
              <span class="text-4xl font-bold text-purple-600 dark:text-purple-400">R$29</span>
              <span class="text-gray-500 dark:text-gray-400">/mês</span>
            </div>

            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Até 3 projetos
              </li>
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Suporte por email
              </li>
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                5GB de armazenamento
              </li>
            </ul>

            <button
              class="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
              Começar teste grátis
            </button>
          </div>
        </div>

        <div
          class="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-purple-300 dark:border-purple-600 transform hover:scale-[1.02] transition-all">
          <div class="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Profissional</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">Perfeito para equipes pequenas e médias</p>

            <div class="mb-6">
              <span class="text-4xl font-bold text-purple-600 dark:text-purple-400">R$79</span>
              <span class="text-gray-500 dark:text-gray-400">/mês</span>
            </div>

            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Projetos ilimitados
              </li>
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Suporte prioritário
              </li>
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                50GB de armazenamento
              </li>
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Relatórios avançados
              </li>
            </ul>

            <button
              class="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
              Começar teste grátis
            </button>
          </div>
        </div>

        <div
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-purple-100 dark:border-purple-900/50 transition-all hover:shadow-purple-200 dark:hover:shadow-purple-900/30">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Empresarial</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">Para grandes empresas e organizações</p>

            <div class="mb-6">
              <span class="text-4xl font-bold text-purple-600 dark:text-purple-400">R$199</span>
              <span class="text-gray-500 dark:text-gray-400">/mês</span>
            </div>

            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Projetos ilimitados
              </li>
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Suporte 24/7
              </li>
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Armazenamento ilimitado
              </li>
              <li class="flex items-center text-gray-700 dark:text-gray-300">
                <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Integrações personalizadas
              </li>
            </ul>

            <button
              class="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
              Fale com nossa equipe
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 text-gray-500 dark:text-gray-400 text-sm">
        <p>Todos os planos incluem 14 dias de teste gratuito. Não é necessário cartão de crédito.</p>
      </div>
    </div>
  </div>

  <div class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">Por que escolher nosso produto?</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Descubra como nossa solução pode transformar sua produtividade e resultados
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Performance excepcional</h3>
          <p class="text-gray-600 dark:text-gray-300">Tecnologia otimizada que oferece velocidade e eficiência
            incomparáveis para suas operações.</p>
        </div>

        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Segurança de dados</h3>
          <p class="text-gray-600 dark:text-gray-300">Proteção avançada com criptografia de ponta a ponta e backups
            automáticos.</p>
        </div>

        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Nuvem integrada</h3>
          <p class="text-gray-600 dark:text-gray-300">Acesse seus projetos de qualquer lugar, em qualquer dispositivo,
            com sincronização em tempo real.</p>
        </div>

        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Suporte 24/7</h3>
          <p class="text-gray-600 dark:text-gray-300">Nossa equipe está disponível a qualquer momento para resolver suas
            dúvidas e problemas.</p>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="p-6">
          <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">+10K</div>
          <div class="text-gray-600 dark:text-gray-300">Clientes satisfeitos</div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.9%</div>
          <div class="text-gray-600 dark:text-gray-300">Disponibilidade</div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
          <div class="text-gray-600 dark:text-gray-300">Suporte ativo</div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">+50</div>
          <div class="text-gray-600 dark:text-gray-300">Integrações</div>
        </div>
      </div>

      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">O que nossos clientes dizem
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-4">
                JD</div>
              <div>
                <h4 class="font-medium text-gray-800 dark:text-white">Joana Dias</h4>
                <div class="flex text-yellow-400 mt-1">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 italic">"Transformou completamente nossa produtividade. A equipe
              não consegue mais trabalhar sem essa ferramenta!"</p>
          </div>

          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-4">
                MC</div>
              <div>
                <h4 class="font-medium text-gray-800 dark:text-white">Marcos Costa</h4>
                <div class="flex text-yellow-400 mt-1">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 italic">"O suporte é excepcional e a plataforma superou todas
              nossas expectativas. Vale cada centavo investido."</p>
          </div>

          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold mr-4">
                AP</div>
              <div>
                <h4 class="font-medium text-gray-800 dark:text-white">Ana Paula</h4>
                <div class="flex text-yellow-400 mt-1">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 italic">"Migramos toda nossa equipe e o retorno foi imediato. A
              curva de aprendizado é mínima e os resultados máximos."</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">Veja como funciona</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Assista ao nosso vídeo explicativo e descubra como nossa solução pode transformar seu trabalho
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="max-w-4xl mx-auto p-4">
          <div class="aspect-w-16 aspect-h-9">
            <iframe width="560" height="315" class="w-full h-130 object-cover rounded-lg"
              src="https://www.youtube.com/embed/gcNfQ5KEpCA?si=Pea-rVylEhPWDNKp" allowfullscreen></iframe>
          </div>
        </div>

        <div class="text-center mt-8">
          <a href="/signup"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
            Comece seu teste gratuito
            <svg class="ml-3 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <FooterLayout />
</template>
