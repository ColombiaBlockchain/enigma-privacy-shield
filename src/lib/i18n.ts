export type Language = 'en' | 'es' | 'pt';

export interface Translation {
  en: string;
  es: string;
  pt: string;
}

export const translations: Record<string, Translation> = {
  // App general
  app_title: {
    en: 'Enigma by AvalPay',
    es: 'Enigma by AvalPay',
    pt: 'Enigma por AvalPay'
  },
  
  // CTAs
  cta_get_started: {
    en: 'Get started',
    es: 'Comenzar',
    pt: 'Começar'
  },
  cta_watch_video: {
    en: 'Watch video',
    es: 'Ver video',
    pt: 'Ver vídeo'
  },
  cta_docs: {
    en: 'Documentation',
    es: 'Documentación',
    pt: 'Documentação'
  },
  
  // Wallet
  connect_wallet: {
    en: 'Connect wallet',
    es: 'Conectar billetera',
    pt: 'Conectar carteira'
  },
  provider_core: {
    en: 'Core (Avalanche)',
    es: 'Core (Avalanche)',
    pt: 'Core (Avalanche)'
  },
  provider_metamask: {
    en: 'MetaMask',
    es: 'MetaMask',
    pt: 'MetaMask'
  },
  provider_wc: {
    en: 'WalletConnect',
    es: 'WalletConnect',
    pt: 'WalletConnect'
  },
  provider_ledger: {
    en: 'Ledger (simulated)',
    es: 'Ledger (simulado)',
    pt: 'Ledger (simulado)'
  },
  provider_scripto: {
    en: 'Scripto (demo)',
    es: 'Scripto (demo)',
    pt: 'Scripto (demo)'
  },
  
  // Onboarding
  onboarding_title: {
    en: 'What do you want to do?',
    es: '¿Qué deseas hacer?',
    pt: 'O que você deseja fazer?'
  },
  onb_create: {
    en: 'Create private token (eERC20)',
    es: 'Crear token privado (eERC20)',
    pt: 'Criar token privado (eERC20)'
  },
  onb_migrate: {
    en: 'Migrate to private token',
    es: 'Migrar a token privado',
    pt: 'Migrar para token privado'
  },
  onb_transfer: {
    en: 'Transfer privately',
    es: 'Transferir privadamente',
    pt: 'Transferir privadamente'
  },
  
  // Create token
  create_title: {
    en: 'Create token — Basic info',
    es: 'Crear token — Datos básicos',
    pt: 'Criar token — Dados básicos'
  },
  field_token_name: {
    en: 'Token name',
    es: 'Nombre del token',
    pt: 'Nome do token'
  },
  field_symbol: {
    en: 'Symbol',
    es: 'Símbolo',
    pt: 'Símbolo'
  },
  field_initial_supply: {
    en: 'Initial supply',
    es: 'Cantidad inicial',
    pt: 'Quantidade inicial'
  },
  
  // Privacy
  privacy_default: {
    en: 'Default privacy',
    es: 'Privacidad por defecto',
    pt: 'Privacidade padrão'
  },
  privacy_total: {
    en: 'Total (hide sender/receiver/amount)',
    es: 'Total (oculta emisor/receptor/monto)',
    pt: 'Total (oculta remetente/destinatário/valor)'
  },
  privacy_partial: {
    en: 'Partial (hide sender/receiver; show range)',
    es: 'Parcial (oculta emisor/receptor; muestra rango)',
    pt: 'Parcial (oculta remetente/destinatário; mostra faixa)'
  },
  
  // View keys
  vk_title: {
    en: 'View keys',
    es: 'Llaves de visualización',
    pt: 'Chaves de visualização'
  },
  vk_generate: {
    en: 'Generate key',
    es: 'Generar llave',
    pt: 'Gerar chave'
  },
  
  // Actions
  deploy: {
    en: 'Deploy',
    es: 'Desplegar',
    pt: 'Implantar'
  },
  migrate: {
    en: 'Migrate',
    es: 'Migrar',
    pt: 'Migrar'
  },
  transfer: {
    en: 'Transfer',
    es: 'Transferir',
    pt: 'Transferir'
  },
  recipient: {
    en: 'Recipient',
    es: 'Destinatario',
    pt: 'Destinatário'
  },
  amount: {
    en: 'Amount',
    es: 'Monto',
    pt: 'Valor'
  },
  memo: {
    en: 'Memo (optional)',
    es: 'Memo (opcional)',
    pt: 'Memo (opcional)'
  },
  simulate: {
    en: 'Simulate',
    es: 'Simular',
    pt: 'Simular'
  },
  send: {
    en: 'Send',
    es: 'Enviar',
    pt: 'Enviar'
  },
  
  // Auditor
  auditor: {
    en: 'Auditor',
    es: 'Auditor',
    pt: 'Auditor'
  },
  assign_auditor: {
    en: 'Assign auditor',
    es: 'Asignar auditor',
    pt: 'Atribuir auditor'
  },
  auditor_request: {
    en: 'Request audit',
    es: 'Solicitar auditoría',
    pt: 'Solicitar auditoria'
  },
  
  // General actions
  save: {
    en: 'Save',
    es: 'Guardar',
    pt: 'Salvar'
  },
  cancel: {
    en: 'Cancel',
    es: 'Cancelar',
    pt: 'Cancelar'
  },
  next: {
    en: 'Next',
    es: 'Siguiente',
    pt: 'Próximo'
  },
  back: {
    en: 'Back',
    es: 'Atrás',
    pt: 'Voltar'
  },
  
  // Toast messages
  success_deploy: {
    en: 'Token created successfully',
    es: 'Token creado con éxito',
    pt: 'Token criado com sucesso'
  },
  success_transfer: {
    en: 'Transfer sent',
    es: 'Transferencia enviada',
    pt: 'Transferência enviada'
  },
  error_generic: {
    en: 'An error occurred',
    es: 'Ocurrió un error',
    pt: 'Ocorreu um erro'
  },
  
  // Legal
  terms: {
    en: 'Terms of use',
    es: 'Términos de uso',
    pt: 'Termos de uso'
  },
  privacy: {
    en: 'Privacy policy',
    es: 'Política de privacidad',
    pt: 'Política de privacidade'
  },
  cookies: {
    en: 'Cookies policy',
    es: 'Política de cookies',
    pt: 'Política de cookies'
  },
  
  // Navigation
  nav_dashboard: {
    en: 'Dashboard',
    es: 'Panel',
    pt: 'Painel'
  },
  nav_pricing: {
    en: 'Pricing',
    es: 'Precios',
    pt: 'Preços'
  },
  nav_about: {
    en: 'About',
    es: 'Acerca de',
    pt: 'Sobre'
  },
  nav_help: {
    en: 'Help',
    es: 'Ayuda',
    pt: 'Ajuda'
  },
  
  // Wallet
  disconnect_wallet: {
    en: 'Disconnect',
    es: 'Desconectar',
    pt: 'Desconectar'
  },
  wallet_connected: {
    en: 'Connected',
    es: 'Conectado',
    pt: 'Conectado'
  },
  
  // Cookies consent
  cookies_title: {
    en: 'Cookie Preferences',
    es: 'Preferencias de Cookies',
    pt: 'Preferências de Cookies'
  },
  cookies_message: {
    en: 'We use cookies to enhance your experience. Accept to continue or customize your preferences.',
    es: 'Usamos cookies para mejorar tu experiencia. Acepta para continuar o personaliza tus preferencias.',
    pt: 'Usamos cookies para melhorar sua experiência. Aceite para continuar ou personalize suas preferências.'
  },
  cookies_accept_all: {
    en: 'Accept All',
    es: 'Aceptar Todo',
    pt: 'Aceitar Tudo'
  },
  cookies_necessary_only: {
    en: 'Necessary Only',
    es: 'Solo Necesarias',
    pt: 'Apenas Necessários'
  },
  
  // Tour
  tour_start: {
    en: 'Start Tour',
    es: 'Iniciar Tour',
    pt: 'Iniciar Tour'
  },
  tour_skip: {
    en: 'Skip Tour',
    es: 'Omitir Tour',
    pt: 'Pular Tour'
  },
  tour_next: {
    en: 'Next',
    es: 'Siguiente',
    pt: 'Próximo'
  },
  tour_previous: {
    en: 'Previous',
    es: 'Anterior',
    pt: 'Anterior'
  },
  tour_finish: {
    en: 'Finish',
    es: 'Finalizar',
    pt: 'Finalizar'
  },
  
  // About page
  about_title: {
    en: 'About Enigma',
    es: 'Acerca de Enigma',
    pt: 'Sobre Enigma'
  },
  about_subtitle: {
    en: 'Privacy-first tokens for the future of finance',
    es: 'Tokens con privacidad para el futuro de las finanzas',
    pt: 'Tokens com privacidade para o futuro das finanças'
  },
  team_title: {
    en: 'Our Team',
    es: 'Nuestro Equipo',
    pt: 'Nossa Equipe'
  },
  roadmap_title: {
    en: 'Roadmap',
    es: 'Hoja de Ruta',
    pt: 'Roadmap'
  },
  
  // Manage Keys
  manage_keys_title: {
    en: 'Manage View Keys',
    es: 'Gestionar Claves de Vista',
    pt: 'Gerenciar Chaves de Visualização'
  },
  key_name: {
    en: 'Key Name',
    es: 'Nombre de Clave',
    pt: 'Nome da Chave'
  },
  key_type: {
    en: 'Type',
    es: 'Tipo',
    pt: 'Tipo'
  },
  key_created: {
    en: 'Created',
    es: 'Creado',
    pt: 'Criado'
  },
  key_actions: {
    en: 'Actions',
    es: 'Acciones',
    pt: 'Ações'
  },
  generate_key: {
    en: 'Generate Key',
    es: 'Generar Clave',
    pt: 'Gerar Chave'
  },
  revoke_key: {
    en: 'Revoke',
    es: 'Revocar',
    pt: 'Revogar'
  },
  copy_key: {
    en: 'Copy',
    es: 'Copiar',
    pt: 'Copiar'
  },
  export_key: {
    en: 'Export',
    es: 'Exportar',
    pt: 'Exportar'
  },
  
  // Auditor request
  become_auditor: {
    en: 'Become Auditor',
    es: 'Convertirse en Auditor',
    pt: 'Tornar-se Auditor'
  },
  auditor_request_title: {
    en: 'Auditor Access Request',
    es: 'Solicitud de Acceso de Auditor',
    pt: 'Solicitação de Acesso de Auditor'
  },
  requester_wallet: {
    en: 'Your Wallet Address',
    es: 'Dirección de tu Billetera',
    pt: 'Endereço da sua Carteira'
  },
  org_name: {
    en: 'Organization Name',
    es: 'Nombre de la Organización',
    pt: 'Nome da Organização'
  },
  request_note: {
    en: 'Note (Optional)',
    es: 'Nota (Opcional)',
    pt: 'Nota (Opcional)'
  },
  target_token: {
    en: 'Target Token (Optional)',
    es: 'Token Objetivo (Opcional)',
    pt: 'Token Alvo (Opcional)'
  },
  submit_request: {
    en: 'Submit Request',
    es: 'Enviar Solicitud',
    pt: 'Enviar Solicitação'
  },
  request_sent: {
    en: 'Request sent successfully',
    es: 'Solicitud enviada con éxito',
    pt: 'Solicitação enviada com sucesso'
  },
  
  // Error pages
  page_not_found: {
    en: 'Page Not Found',
    es: 'Página No Encontrada',
    pt: 'Página Não Encontrada'
  },
  server_error: {
    en: 'Server Error',
    es: 'Error del Servidor',
    pt: 'Erro do Servidor'
  },
  maintenance_mode: {
    en: 'Maintenance Mode',
    es: 'Modo de Mantenimiento',
    pt: 'Modo de Manutenção'
  },
  back_to_dashboard: {
    en: 'Back to Dashboard',
    es: 'Volver al Panel',
    pt: 'Voltar ao Painel'
  },
  back_to_home: {
    en: 'Back to Home',
    es: 'Volver al Inicio',
    pt: 'Voltar ao Início'
  }
};

export function useTranslation(lang: Language = 'en') {
  return {
    t: (key: string): string => {
      const translation = translations[key];
      if (!translation) {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
      return translation[lang] || translation.en || key;
    },
    lang,
  };
}