

# ENEM Tracker V2 — Plano de Implementação

**Criador: Jefferson Souza**

## Visão Geral
Um site de acompanhamento de estudos para o ENEM com visual dark mode futurista (glassmorphism, efeitos neon, animações 3D), onde o usuário marca o que já estudou e praticou, e encontra recursos educativos para cada assunto. Dados salvos no navegador (localStorage).

---

## 1. Página Inicial / Dashboard
- Header com o nome **"ENEM Tracker V2"** com efeito 3D/neon animado
- Crédito "Criado por Jefferson Souza" no rodapé
- Barra de progresso geral animada (% de assuntos estudados e praticados)
- Cards com as 4 grandes áreas do ENEM mostrando o progresso de cada uma:
  - 📝 Linguagens, Códigos e suas Tecnologias
  - 🌍 Ciências Humanas e suas Tecnologias
  - 🔬 Ciências da Natureza e suas Tecnologias
  - 📐 Matemática e suas Tecnologias
- Visual: cards com efeito glassmorphism, bordas com brilho neon, fundo escuro com gradientes sutis

## 2. Página de Cada Área do Conhecimento
- Ao clicar em uma área, abre a lista de **disciplinas** (ex: Português, História, Química...)
- Cada disciplina expande para mostrar seus **assuntos específicos**
- Para cada assunto, dois checkboxes:
  - ✅ "Já estudei" 
  - ✅ "Já pratiquei questões"
- Indicador visual de status (não estudou / estudou / estudou + praticou)
- Progresso por disciplina com barra animada

## 3. Recursos Educativos por Assunto
- Cada assunto terá um botão "Ver Recursos" que expande/abre um painel com:
  - 🔗 Links para sites educativos relevantes (Brasil Escola, Khan Academy, etc.)
  - 🎥 Links para vídeos do YouTube de canais educativos populares (Descomplica, Professor Ferretto, Biologia Total, etc.)
  - 📚 Dicas de estudo específicas para aquele assunto
- Recursos pré-cadastrados no código para cada um dos ~80+ assuntos

## 4. Design e Experiência Visual
- **Tema**: Dark mode com cores neon (cyan, roxo, rosa)
- **Efeitos**: Glassmorphism nos cards, sombras com glow neon, hover effects
- **Animações**: Transições suaves, barras de progresso animadas, efeitos de entrada nos cards
- **3D**: Elementos com perspectiva CSS 3D, transformações e sombras que dão profundidade
- **Responsivo**: Funciona bem em desktop e mobile
- **Navegação**: Sidebar com as áreas do ENEM para navegação rápida

## 5. Funcionalidades Extras
- Filtro para ver "apenas não estudados" ou "apenas não praticados"
- Contador de assuntos totais vs concluídos
- Persistência dos dados no localStorage (não perde ao fechar o navegador)
- Botão de reset para recomeçar o progresso

