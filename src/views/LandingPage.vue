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
          PLATAFORMA SPARK
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Transforme sua Aplicação com
          <span class="text-purple-600 dark:text-purple-400">Inteligência Artificial</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          O Spark é a plataforma ideal para quem deseja integrar Agentes de IA de forma simples e eficiente.
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
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Crie seu Agente de IA</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Personalize o comportamento e as respostas de seu agente ou use nossos agentes já prontos.
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
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Integre com facilidade</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Use endpoints prontos para conectar o agente ao seu sistema e use gerencie seus chats para as conversas
            entre IA e usuário.
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
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Acompanhe tudo pelo Dashboard</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Veja o histórico de requisições e analise estatísticas para otimizar a performance da sua IA.
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
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Documentação</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Nossa API possui uma documentação clara e detalhada, facilitando a integração rápida e eficiente ao seu
            sistema.
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

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Plano Gratuito -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <div class="mb-4">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Básico</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm">Para testes e pequenos projetos</p>
          </div>
          <div class="mb-6">
            <span class="text-3xl font-bold text-purple-600 dark:text-purple-400">R$0</span>
          </div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Até 3 agentes de IA
            </li>
            <li class="flex items-center text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Painel de consumo simples
            </li>
          </ul>
          <a href="/price">
            <button
              class="w-full py-2.5 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition">
              Usar Grátis
            </button>
          </a>
        </div>

        <!-- Plano Pago -->
        <div
          class="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-2 border-purple-300 dark:border-purple-600">
          <div class="mb-4">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white">Profissional</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm">Para desenvolvedores e empresas</p>
          </div>
          <div class="mb-6">
            <span class="text-3xl font-bold text-purple-600 dark:text-purple-400">R$9,99</span>
          </div>
          <ul class="space-y-3 mb-6">
            <li class="flex items-start text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Agentes de IA ilimitados</span>
            </li>
            <li class="flex items-start text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Requisições ilimitados</span>
            </li>
            <li class="flex items-start text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Suporte prioritário</span>
            </li>
            <li class="flex items-start text-gray-700 dark:text-gray-300">
              <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Gráficos de consumo avançados</span>
            </li>
          </ul>
          <a href="#">
            <button class="w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
              Comprar Agora
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="py-16 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">Por que escolher o Spark?</h2>
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
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Simplicidade e Eficiência</h3>
          <p class="text-gray-600 dark:text-gray-300">Nossa plataforma foi criada para ser fácil de usar, com uma API
            intuitiva e bem documentada.</p>
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
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Desempenho e Escalabilidade</h3>
          <p class="text-gray-600 dark:text-gray-300">Projetado para crescer junto com o seu negócio, garantindo
            velocidade e estabilidade.</p>
        </div>

        <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Planos Acessíveis</h3>
          <p class="text-gray-600 dark:text-gray-300">Oferecemos preços justos para que qualquer projeto, grande ou
            pequeno, possa aproveitar o Spark.</p>
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
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Suporte Dedicado</h3>
          <p class="text-gray-600 dark:text-gray-300">Nossa equipe está pronta para te ajudar em qualquer dúvida ou
            desafio.</p>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="p-6">
          <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">12K</div>
          <div class="text-gray-600 dark:text-gray-300">Requisições processadas</div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.9%</div>
          <div class="text-gray-600 dark:text-gray-300">Disponibilidade</div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">1s</div>
          <div class="text-gray-600 dark:text-gray-300">Tempo médio de resposta</div>
        </div>
        <div class="p-6">
          <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">∞</div>
          <div class="text-gray-600 dark:text-gray-300">Escalabilidade sem limites</div>
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
            <p class="text-gray-600 dark:text-gray-300 italic">"A Spark revolucionou meu fluxo de trabalho! A API é
              simples de integrar e extremamente eficiente. Agora, minhas automações rodam sem complicações!"</p>
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
            <p class="text-gray-600 dark:text-gray-300 italic">"Nunca vi um suporte tão rápido e eficaz! Sempre que
              precisei, a equipe da Spark esteve pronta para ajudar. Recomendo de olhos fechados!"</p>
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
            <p class="text-gray-600 dark:text-gray-300 italic">"A performance e estabilidade da Spark são incríveis! Meu
              projeto ganhou velocidade e confiabilidade, sem dor de cabeça."</p>
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
            Comece sua integração com Spark
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
