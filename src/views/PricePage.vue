<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue'
import FooterLayout from '../components/layout/FooterLayout.vue'
</script>

<template>
    <AppHeader />
    <div class="w-full bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Planos Spark
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Escolha o plano ideal para suas necessidades de IA
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
                            <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Até 3 agentes de IA
                        </li>
                        <li class="flex items-center text-gray-700 dark:text-gray-300">
                            <svg class="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            Painel de consumo simples
                        </li>
                    </ul>
                    <button
                        class="w-full py-2.5 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition">
                        Usar Grátis
                    </button>
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
                            <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Agentes de IA ilimitados</span>
                        </li>
                        <li class="flex items-start text-gray-700 dark:text-gray-300">
                            <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Requisições ilimitados</span>
                        </li>
                        <li class="flex items-start text-gray-700 dark:text-gray-300">
                            <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Suporte prioritário</span>
                        </li>
                        <li class="flex items-start text-gray-700 dark:text-gray-300">
                            <svg class="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Gráficos de consumo avançados</span>
                        </li>
                    </ul>
                    <button
                        class="w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
                        Comprar Agora
                    </button>
                </div>
            </div>
        </div>
    </div>
    <FooterLayout />
</template>