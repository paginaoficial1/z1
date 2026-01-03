// scripts/config/config.js (Versão Limpa)

(function() {
    // Configurações extraídas do arquivo original
    const ADMIN_KEY = "stalkea123";
    const ADMIN_MODE_KEY = "_adminMode";

    // Verifica se tem ?admin=stalkea123 na URL para ativar modo admin
    var params = new URLSearchParams(window.location.search);
    if (params.get('admin') === ADMIN_KEY) {
        localStorage.setItem(ADMIN_MODE_KEY, 'true');
        sessionStorage.setItem(ADMIN_MODE_KEY, 'true');
        console.log("🔓 Modo Admin Ativado");
    }
    
    // Pixel e APIs
    window.pixelId = "684c9adcce957366a07f459b";
    window.INSTAGRAM_API_BASE_URL = "https://in-stalker.site/api";
    window.INSTAGRAM_API_SECRET_KEY = "2dd905e6bf66502c751c4915a83c3dc21ca16c44a8d311e832e4436a9d5ddb5c";
    window.MYSQL_API_BASE_URL = "/api";

    // Funções auxiliares mantidas para compatibilidade
    window._0xGetAdminKey = function() { return ADMIN_KEY; };
    window._0xGetAdminModeKey = function() { return ADMIN_MODE_KEY; };
})();
