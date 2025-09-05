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
    en: 'Create private token (IERC20)',
    es: 'Crear token privado (IERC20)',
    pt: 'Criar token privado (IERC20)'
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