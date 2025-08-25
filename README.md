# 📱 To-Do List App

Um aplicativo de lista de tarefas moderno e responsivo desenvolvido com React Native, Expo e Redux Toolkit, oferecendo uma experiência fluida de gerenciamento de tarefas com persistência de dados local.

## ✨ Funcionalidades

- ➕ **Adicionar Tarefas**: Criação rápida de novas tarefas
- ✅ **Marcar como Concluída**: Toggle para marcar/desmarcar tarefas
- ✏️ **Editar Tarefas**: Edição inline do texto das tarefas
- 🗑️ **Remover Tarefas**: Exclusão de tarefas individuais
- 💾 **Persistência Local**: Dados salvos automaticamente com AsyncStorage
- 👤 **Multi-usuário**: Suporte para múltiplos usuários com dados separados
- 📱 **Design Responsivo**: Interface adaptada para diferentes tamanhos de tela
- 🎨 **UI Moderna**: Interface limpa com gradientes e animações suaves

## 🛠 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo SDK ~53.0** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática para JavaScript
- **Redux Toolkit** - Gerenciamento de estado global
- **React Navigation** - Navegação entre telas
- **AsyncStorage** - Persistência de dados local
- **Styled Components** - Estilização com CSS-in-JS
- **Lucide React Native** - Biblioteca de ícones
- **Jest** - Framework de testes unitários

## 🚀 Configuração do Ambiente

### Pré-requisitos

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** ou **yarn**
- **Expo CLI** global
- **EAS CLI** (para build de produção)

### 1. Instalação do Expo CLI e EAS CLI

```bash
# Instalar Expo CLI globalmente
npm install -g @expo/cli

# Instalar EAS CLI globalmente
npm install -g eas-cli

# Verificar instalações
expo --version
eas --version
```

### 2. Clone do Repositório

```bash
git clone https://github.com/FelJohnny/to-do-list.git
cd to-do-list
```

### 3. Instalação das Dependências

```bash
# Instalar dependências principais
npm install

# OU usando yarn
yarn install
```

### 4. Configuração do Ambiente de Desenvolvimento

```bash
# Instalar dependências de desenvolvimento (se necessário)
npm install --save-dev

# Verificar se todas as dependências estão instaladas
npm list --depth=0
```

## 🏃‍♂️ Execução

### Desenvolvimento Local

#### 1. Iniciar o Servidor de Desenvolvimento

```bash
# Método preferido - com dev client
npm run start

# OU método alternativo
npx expo start --dev-client

# Para tunnel (útil para testes em dispositivos remotos)
npx expo start --tunnel
```

#### 2. Executar no Dispositivo/Emulador

**Para Android:**

```bash
# Executar em emulador/dispositivo Android
npm run android
# OU
npx expo run:android
```

**Para iOS (apenas macOS):**

```bash
# Executar em simulador iOS
npm run ios
# OU
npx expo run:ios
```

**Para Web:**

```bash
# Executar versão web
npm run web
# OU
npx expo start --web
```

### Usando o App Expo Go (Desenvolvimento Rápido)

1. Instale o **Expo Go** no seu dispositivo móvel
2. Execute `npx expo start`
3. Escaneie o QR Code que aparece no terminal/browser

## 🧪 Testes

### Configuração dos Testes

O projeto utiliza **Jest** com configurações específicas para React Native e TypeScript.

### Executar Testes

```bash
# Executar todos os testes
npm test

# Executar testes específicos
npm test todoSlice.test.js

# Executar testes em modo watch
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
```

### Estrutura de Testes

```
__tests__/
└── todoSlice.test.js       # Testes unitários do Redux slice
```

**Cobertura de Testes:**

- ✅ Actions do Redux (addTodo, removeTodo, toggleTodo, editTodo)
- ✅ Reducers e estado inicial
- ✅ Ações assíncronas (AsyncStorage)

## 📦 Build e Deploy

### Build de Desenvolvimento

```bash
# Build local para desenvolvimento
npx expo export

# Build com plataforma específica
npx expo export --platform ios
npx expo export --platform android
```

### Build de Produção com EAS

#### 1. Configuração Inicial do EAS

```bash
# Login no Expo (necessário conta Expo)
eas login

# Configurar projeto EAS
eas build:configure
```

#### 2. Build para Android

```bash
# Build APK para testes
eas build --platform android --profile preview

# Build AAB para Google Play Store
eas build --platform android --profile production
```

#### 3. Build para iOS

```bash
# Build para simulador (desenvolvimento)
eas build --platform ios --profile development

# Build para App Store
eas build --platform ios --profile production
```

#### 4. Build para Ambas as Plataformas

```bash
# Build simultâneo para Android e iOS
eas build --platform all --profile production
```

### Configuração do eas.json

O arquivo `eas.json` já está configurado com perfis:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

## 🏗 Arquitetura e Design

### Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── screens/            # Telas da aplicação
├── store/              # Configuração Redux
│   ├── index.ts        # Store principal
│   └── todoSlice.ts    # Slice das tarefas
├── types/              # Definições TypeScript
├── utils/              # Funções utilitárias
└── navigation/         # Configuração de navegação
```

### Padrões Arquiteturais

**1. Redux Toolkit Pattern**

- Gerenciamento de estado centralizado
- Actions, reducers e selectors organizados
- Ações assíncronas com createAsyncThunk

**2. Container/Presentation Pattern**

- Separação entre lógica e apresentação
- Componentes reutilizáveis e testáveis

**3. TypeScript First**

- Tipagem forte em toda aplicação
- Interfaces bem definidas
- Detecção de erros em tempo de desenvolvimento

### Responsabilidades

- **Redux Store**: Gerenciamento de estado global
- **Components**: Apresentação e interação do usuário
- **Services**: Integração com APIs e AsyncStorage
- **Utils**: Funções auxiliares e utilitárias
- **Types**: Definições de tipos TypeScript

## 🔧 Manutenibilidade e Extensibilidade

### Facilidade de Leitura

- **TypeScript** para tipagem e documentação automática
- **Comentários JSDoc** em funções complexas
- **Nomenclatura descritiva** para variáveis e funções
- **Estrutura modular** com separação de responsabilidades

### Adicionando Novas Funcionalidades

#### 1. Nova Action no Redux

```typescript
// Em todoSlice.ts
export const newAction = createSlice({
  name: "todos",
  reducers: {
    newFunction: (state, action) => {
      // Implementação
    },
  },
});
```

#### 2. Novo Componente

```typescript
// Em components/NewComponent.tsx
import React from 'react';
import { ComponentProps } from '../types';

export const NewComponent: React.FC<ComponentProps> = ({ ...props }) => {
  return (
    // JSX
  );
};
```

#### 3. Nova Tela

```typescript
// Em screens/NewScreen.tsx
export const NewScreen = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectAllTodos);

  return (
    // Implementação da tela
  );
};
```

### Extensões Sugeridas

- 🔐 **Autenticação**: Firebase Auth ou Auth0
- ☁️ **Sync na Nuvem**: Firebase Firestore ou Supabase
- 📅 **Datas/Lembretes**: React Native DatePicker
- 📱 **Notificações**: Expo Notifications
- 🎨 **Temas**: Context API para dark/light mode
- 📊 **Analytics**: Expo Analytics

## 🎯 Qualidade de Código

### Ferramentas de Estilo

- **TypeScript**: Tipagem estática e verificação de tipos
- **ESLint**: Linting e padrões de código (configuração do Expo)
- **Prettier**: Formatação automática de código (recomendado)

### Configuração Recomendada

```bash
# Instalar Prettier (opcional)
npm install --save-dev prettier

# Instalar ESLint plugins adicionais
npm install --save-dev @typescript-eslint/eslint-plugin
```

### Scripts Úteis

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json}\""
  }
}
```

## 📱 Funcionalidades Implementadas

### ✅ Requisitos Atendidos

- [x] **Adicionar tarefas** com título customizável
- [x] **Marcar tarefas como concluídas** com toggle visual
- [x] **Remover tarefas** individualmente
- [x] **Editar tarefas** com edição inline
- [x] **Persistência de dados** com AsyncStorage
- [x] **Interface responsiva** para diferentes telas
- [x] **Tipagem TypeScript** completa
- [x] **Testes unitários** abrangentes

### 🔄 Funcionalidades Extras

- [x] **Gerenciamento de estado** com Redux Toolkit
- [x] **Multi-usuário** com dados isolados
- [x] **Datas de criação e conclusão** automáticas
- [x] **Contadores** de tarefas ativas/concluídas
- [x] **Feedback visual** para ações do usuário
- [x] **Gradientes e animações** suaves

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🆘 Suporte e Solução de Problemas

### Problemas Comuns

**1. Erro de Metro/Cache**

```bash
npx expo start --clear
```

**2. Problemas com Dependências**

```bash
rm -rf node_modules package-lock.json
npm install
```

**3. Erro de Build EAS**

```bash
eas build:configure --force
```

**4. Testes Falhando**

```bash
npm test -- --clearCache
```

### Recursos Úteis

- 📚 [Documentação Expo](https://docs.expo.dev/)
- 📚 [React Native Docs](https://reactnative.dev/docs/getting-started)
- 📚 [Redux Toolkit](https://redux-toolkit.js.org/)
