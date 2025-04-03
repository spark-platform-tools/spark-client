<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
        <!-- Botão para mobile -->
        <button @click="isSidebarOpen = !isSidebarOpen"
            class="md:hidden fixed z-50 bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <!-- Overlay para mobile -->
        <div @click="isSidebarOpen = false" v-show="isSidebarOpen"
            class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"></div>

        <!-- Sidebar -->
        <div :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen, 'md:translate-x-0': true }"
            class="fixed md:relative z-40 w-64 bg-white dark:bg-gray-800 shadow-md overflow-y-auto transition-transform duration-300 ease-in-out transform h-full">
            <div class="p-6">
                <div class="flex items-center mb-8">
                    <a href="/">
                        <div
                            class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                            <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                    </a>
                    <h1 class="text-xl font-bold text-gray-800 dark:text-white">Documentação</h1>
                </div>

                <nav>
                    <div class="mb-6">
                        <h3
                            class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                            CATEGORIAS</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="#chat" @click="isSidebarOpen = false"
                                    class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                        </path>
                                    </svg>
                                    Chat
                                </a>
                            </li>
                            <li>
                                <a href="#messages" @click="isSidebarOpen = false"
                                    class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    Messages
                                </a>
                            </li>
                            <li>
                                <a href="#api-key" @click="isSidebarOpen = false"
                                    class="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
                                        </path>
                                    </svg>
                                    API Key
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <!-- Conteúdo principal -->
        <div class="flex-1 overflow-y-auto p-4 md:p-8">
            <section id="chat" class="mb-12">
                <div class="flex items-center mb-8">
                    <div
                        class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                            </path>
                        </svg>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white">Chat</h2>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
                    <div class="p-6">
                        <div
                            class="flex-shrink-0 bg-purple-500 rounded-md px-3 py-1 text-sm font-semibold text-white mr-3 mt-1 mb-3">
                            POST
                        </div>
                        <div class="flex items-start">
                            <div class="flex-1 min-w-0">
                                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Criar Chat</h3>
                                <p class="text-gray-600 dark:text-gray-300 mb-4">Cria um novo chat.</p>

                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <code
                                        class="text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">/api/chat</code>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Parâmetros:</h4>
                                <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">name</code> (string):
                                        Nome do chat (opcional)</li>
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">participants</code>
                                        (array): Lista de IDs dos participantes</li>
                                </ul>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Exemplo de Requisição:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>{
    "name": "Chat de Suporte",
    "participants": ["user1", "user2"]
}</code></pre>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Resposta de Sucesso:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>{
    "id": "chat_123",
    "name": "Chat de Suporte",
    "created_at": "2023-10-01T12:00:00Z"
}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
                    <div class="p-6">
                        <div
                            class="flex-shrink-0 bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white mr-3 mt-1 mb-3">
                            GET
                        </div>
                        <div class="flex items-start">

                            <div class="flex-1 min-w-0">
                                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Listar Chats</h3>
                                <p class="text-gray-600 dark:text-gray-300 mb-4">Lista todos os chats disponíveis.</p>

                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <code
                                        class="text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">/api/chat</code>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Resposta de Sucesso:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>[
    {
      "id": "chat_123",
      "name": "Chat de Suporte",
      "created_at": "2023-10-01T12:00:00Z"
    },
    {
      "id": "chat_456",
      "name": "Chat Geral",
      "created_at": "2023-10-02T10:30:00Z"
    }
]</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div class="p-6">
                        <div
                            class="flex-shrink-0 bg-red-500 rounded-md px-3 py-1 text-sm font-semibold text-white mr-3 mt-1 mb-3">
                            DELETE
                        </div>
                        <div class="flex items-start">
                            <div class="flex-1 min-w-0">
                                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Deletar Chat</h3>
                                <p class="text-gray-600 dark:text-gray-300 mb-4">Remove um chat específico.</p>

                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <code
                                        class="text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">/api/chat/:chat_id</code>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Parâmetros de URL:</h4>
                                <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">chat_id</code> (string):
                                        ID do chat a ser removido</li>
                                </ul>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Resposta de Sucesso:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>{
    "success": true,
    "message": "Chat deletado com sucesso"
}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="messages" class="mb-12">
                <div class="flex items-center mb-8">
                    <div
                        class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                            </path>
                        </svg>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white">Messages</h2>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
                    <div class="p-6">
                        <div
                            class="flex-shrink-0 bg-purple-500 rounded-md px-3 py-1 text-sm font-semibold text-white mr-3 mt-1 mb-3">
                            POST
                        </div>
                        <div class="flex items-start">
                            <div class="flex-1 min-w-0">
                                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Enviar Mensagem
                                </h3>
                                <p class="text-gray-600 dark:text-gray-300 mb-4">Envia uma mensagem para um chat
                                    específico.</p>

                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <code
                                        class="text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">/api/message</code>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Parâmetros:</h4>
                                <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">chat_id</code> (string):
                                        ID do chat</li>
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">sender_id</code>
                                        (string): ID do remetente</li>
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">content</code> (string):
                                        Conteúdo da mensagem</li>
                                </ul>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Exemplo de Requisição:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>{
    "chat_id": "chat_123",
    "sender_id": "user1",
    "content": "Olá, como posso ajudar?"
}</code></pre>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Resposta de Sucesso:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>{
    "id": "msg_789",
    "chat_id": "chat_123",
    "sender_id": "user1",
    "content": "Olá, como posso ajudar?",
    "sent_at": "2023-10-01T12:05:00Z"
}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div class="p-6">
                        <div
                            class="flex-shrink-0 bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white mr-3 mt-1 mb-3">
                            GET
                        </div>
                        <div class="flex items-start">
                            <div class="flex-1 min-w-0">
                                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Listar Mensagens
                                </h3>
                                <p class="text-gray-600 dark:text-gray-300 mb-4">Lista todas as mensagens de um chat
                                    específico.</p>

                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <code
                                        class="text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">/api/message/:chat_id</code>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Parâmetros de URL:</h4>
                                <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">chat_id</code> (string):
                                        ID do chat</li>
                                </ul>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Resposta de Sucesso:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>[
    {
      "id": "msg_789",
      "chat_id": "chat_123",
      "sender_id": "user1",
      "content": "Olá, como posso ajudar?",
      "sent_at": "2023-10-01T12:05:00Z"
    },
    {
      "id": "msg_790",
      "chat_id": "chat_123",
      "sender_id": "user2",
      "content": "Preciso de ajuda com meu pedido",
      "sent_at": "2023-10-01T12:06:00Z"
    }
]</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="api-key">
                <div class="flex items-center mb-8">
                    <div
                        class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
                            </path>
                        </svg>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white">API Key</h2>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
                    <div class="p-6">
                        <div
                            class="flex-shrink-0 bg-purple-500 rounded-md px-3 py-1 text-sm font-semibold text-white mr-3 mt-1 mb-3">
                            POST
                        </div>
                        <div class="flex items-start">
                            <div class="flex-1 min-w-0">
                                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Criar API Key</h3>
                                <p class="text-gray-600 dark:text-gray-300 mb-4">Gera uma nova chave de API para
                                    autenticação.</p>

                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <code
                                        class="text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">/api/key</code>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Parâmetros:</h4>
                                <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">name</code> (string):
                                        Nome descritivo para a chave</li>
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">permissions</code>
                                        (array): Lista de permissões (opcional)</li>
                                </ul>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Exemplo de Requisição:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>{
    "name": "Chave de Produção",
    "permissions": ["chat:create", "message:send"]
}</code></pre>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Resposta de Sucesso:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>{
    "key": "sk_live_1234567890abcdef",
    "name": "Chave de Produção",
    "created_at": "2023-10-01T12:00:00Z",
    "permissions": ["chat:create", "message:send"]
}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div class="p-6">
                        <div
                            class="flex-shrink-0 bg-red-500 rounded-md px-3 py-1 text-sm font-semibold text-white mr-3 mt-1 mb-3">
                            DELETE
                        </div>
                        <div class="flex items-start">
                            <div class="flex-1 min-w-0">
                                <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">Deletar API Key
                                </h3>
                                <p class="text-gray-600 dark:text-gray-300 mb-4">Revoga uma chave de API existente.</p>

                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 overflow-x-auto">
                                    <code
                                        class="text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">/api/key/:key_id</code>
                                </div>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Parâmetros de URL:</h4>
                                <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
                                    <li><code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">key_id</code> (string):
                                        ID da chave a ser removida</li>
                                </ul>

                                <h4 class="font-medium text-gray-800 dark:text-white mb-2">Resposta de Sucesso:</h4>
                                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-x-auto">
                                    <pre class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre"><code>{
    "success": true,
    "message": "Chave de API deletada com sucesso"
}</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSidebarOpen = ref(false)
</script>