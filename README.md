# FaltaEnergiaApp

## Descrição  
O **FaltaEnergiaApp** é um protótipo de aplicativo móvel (React Native + Expo) para registro e acompanhamento de ocorrências de falta de energia elétrica. Pensado para uso em campo, o app coleta informações essenciais de cada interrupção e as armazena localmente, permitindo consulta mesmo sem conexão.

## Objetivos e Necessidades  
- **Registrar com precisão** cada evento de falta de energia, garantindo dados completos para análises futuras.  
- **Coletar informações chave**:  
  - Nome de quem reporta  
  - Cidade e bairro (ou CEP)  
  - Horário de início e término da interrupção  
  - Descrição de danos observados  
  - Recomendações ou observações  
- **Armazenar offline**, usando AsyncStorage, de forma simples e rápida.  
- **Exibir lista de todos os registros**, com acesso a detalhes individuais.  
- **Permitir limpeza total** dos registros quando necessário.  
- **Oferecer navegação intuitiva**, em fluxo sequencial de telas.

## Funcionalidades Principais  
1. **Cadastro de Evento**  
   - Passo a passo em telas:  
     1. Dados do usuário e localização  
     2. Horários de interrupção  
     3. Descrição de danos  
     4. Recomendações  
2. **Resumo de Ocorrências**  
   - Listagem de todos os eventos salvos  
   - Indicadores rápidos de quantos registros existem  
3. **Detalhamento de Evento**  
   - Apresenta todos os campos preenchidos de forma clara  
4. **Limpeza de Registros**  
   - Ação única para apagar todo o histórico armazenado

## Tecnologias e Ferramentas  
- **React Native** + **Expo**  
- **TypeScript**  
- **React Navigation** (pilha de navegação)  
- **AsyncStorage** para persistência local  
- **React Native Paper** para componentes de interface  
- **WebView** (mapa de referência)  
- **UUID** para identificação única de eventos

## Pré-requisitos e Instalação  
1. **Instalar Node.js** (versão 16.x ou superior)  
2. **Instalar Expo CLI** globalmente:  
   ```bash
   npm install -g expo-cli

### Clonar o repositório e instalar dependências

- ```bash
- git clone <URL_DO_REPOSITORIO>
- cd FaltaEnergiaApp
- npm install

## Autores

- **Guilherme Daher** – 98611  
- **Gustavo Akio** – 550241  
- **Heitor Nobre** – 551539  

