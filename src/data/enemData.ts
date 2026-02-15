export interface Resource {
  type: "site" | "video" | "tip";
  title?: string;
  url?: string;
  description: string;
}

export interface Subject {
  id: string;
  name: string;
  percentage?: number;
  resources: Resource[];
}

export interface Discipline {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface Area {
  id: string;
  name: string;
  icon: string;
  color: "green" | "blue" | "teal" | "emerald";
  disciplines: Discipline[];
}

export const enemData: Area[] = [
  {
    id: "linguagens",
    name: "Linguagens, Códigos e suas Tecnologias",
    icon: "📝",
    color: "green",
    disciplines: [
      {
        id: "portugues",
        name: "Língua Portuguesa e Literatura",
        subjects: [
          {
            id: "interpretacao-texto", name: "Interpretação de Textos", percentage: 33.3,
            resources: [
              { type: "site", title: "Língua Portuguesa no Enem", url: "https://www.todamateria.com.br/lingua-portuguesa-no-enem/", description: "Guia completo de Língua Portuguesa para o ENEM" },
              { type: "site", title: "Questões de Português no Enem", url: "https://brasilescola.uol.com.br/exercicios/portugues", description: "Exercícios de Português para praticar" },
              { type: "video", title: "Interpretação de Texto - Prof. Noslen", url: "https://www.youtube.com/results?search_query=interpretação+de+texto+enem+professor+noslen", description: "Aulas sobre interpretação de textos para o ENEM" },
              { type: "tip", description: "Leia o texto inteiro antes de responder. Identifique a ideia central e os argumentos de apoio." }
            ]
          },
          {
            id: "tendencias-contemporaneas", name: "Tendências Contemporâneas", percentage: 28,
            resources: [
              { type: "site", title: "Brasil Escola - Literatura Contemporânea", url: "https://brasilescola.uol.com.br/literatura/literatura-contemporanea.htm", description: "Tendências da literatura contemporânea" },
              { type: "video", title: "Tendências Contemporâneas ENEM", url: "https://www.youtube.com/results?search_query=tendências+contemporâneas+literatura+enem", description: "Movimentos contemporâneos na prova" },
              { type: "tip", description: "Relacione textos contemporâneos com questões sociais atuais." }
            ]
          },
          {
            id: "estrutura-formacao-palavras", name: "Estrutura e Formação das Palavras", percentage: 21,
            resources: [
              { type: "site", title: "Toda Matéria - Formação das Palavras", url: "https://www.todamateria.com.br/formacao-de-palavras/", description: "Derivação, composição e outros processos" },
              { type: "video", title: "Formação de Palavras ENEM", url: "https://www.youtube.com/results?search_query=estrutura+formação+palavras+enem", description: "Como cai no ENEM" },
              { type: "tip", description: "Domine prefixos, sufixos, derivação e composição." }
            ]
          },
          {
            id: "tipos-texto", name: "Tipos de Texto", percentage: 19,
            resources: [
              { type: "site", title: "Toda Matéria - Tipos de Texto", url: "https://www.todamateria.com.br/tipos-de-textos/", description: "Narração, dissertação, descrição e injunção" },
              { type: "video", title: "Tipos de Texto ENEM", url: "https://www.youtube.com/results?search_query=tipos+de+texto+enem", description: "Classificação textual para o ENEM" },
              { type: "tip", description: "Saiba diferenciar texto narrativo, descritivo, dissertativo e injuntivo." }
            ]
          },
          {
            id: "elementos-narrativa", name: "Elementos da Narrativa", percentage: 14,
            resources: [
              { type: "site", title: "Brasil Escola - Elementos da Narrativa", url: "https://brasilescola.uol.com.br/redacao/elementos-narrativa.htm", description: "Pessoa, espaço, tempo e enredo" },
              { type: "video", title: "Elementos da Narrativa ENEM", url: "https://www.youtube.com/results?search_query=elementos+narrativa+pessoa+espaço+tempo+enem", description: "Análise narrativa no ENEM" },
              { type: "tip", description: "Identifique narrador, personagens, tempo, espaço e conflito em cada texto." }
            ]
          },
          {
            id: "funcoes-linguagem", name: "Funções da Linguagem", percentage: 13,
            resources: [
              { type: "site", title: "Toda Matéria - Funções da Linguagem", url: "https://www.todamateria.com.br/funcoes-da-linguagem/", description: "As 6 funções de Jakobson" },
              { type: "video", title: "Funções da Linguagem ENEM", url: "https://www.youtube.com/results?search_query=funções+da+linguagem+enem", description: "Funções da linguagem no ENEM" },
              { type: "tip", description: "Emotiva, referencial, conativa, metalinguística, fática e poética — saiba identificar cada uma." }
            ]
          },
          {
            id: "pontuacao", name: "Pontuação", percentage: 10,
            resources: [
              { type: "site", title: "Brasil Escola - Pontuação", url: "https://brasilescola.uol.com.br/gramatica/pontuacao.htm", description: "Regras de pontuação" },
              { type: "video", title: "Pontuação ENEM", url: "https://www.youtube.com/results?search_query=pontuação+vírgula+enem", description: "Uso da vírgula e outros sinais" },
              { type: "tip", description: "Vírgula antes de conjunção adversativa e entre orações subordinadas são os casos mais cobrados." }
            ]
          },
          {
            id: "narratividade", name: "Narratividade", percentage: 9,
            resources: [
              { type: "site", title: "Brasil Escola - Narração", url: "https://brasilescola.uol.com.br/redacao/narracao.htm", description: "Conceitos de narratividade" },
              { type: "video", title: "Narratividade ENEM", url: "https://www.youtube.com/results?search_query=narratividade+texto+narrativo+enem", description: "Narratividade na prova do ENEM" },
              { type: "tip", description: "Observe o foco narrativo e a progressão temporal do texto." }
            ]
          },
          {
            id: "literatura", name: "Literatura", percentage: 7.8,
            resources: [
              { type: "site", title: "Exercícios de Literatura para o ENEM", url: "https://www.todamateria.com.br/exercicios-de-literatura/", description: "Questões resolvidas de literatura" },
              { type: "site", title: "Toda Matéria - Escolas Literárias", url: "https://www.todamateria.com.br/escolas-literarias/", description: "Resumo de todas as escolas literárias" },
              { type: "video", title: "Literatura ENEM", url: "https://www.youtube.com/results?search_query=literatura+enem+escolas+literárias", description: "Resumo das escolas literárias" },
              { type: "tip", description: "Foque em Modernismo, Romantismo e Realismo — mais cobrados no ENEM." }
            ]
          },
          {
            id: "classe-palavras", name: "Classe de Palavras", percentage: 7,
            resources: [
              { type: "site", title: "Toda Matéria - Classes de Palavras", url: "https://www.todamateria.com.br/classes-de-palavras/", description: "As 10 classes gramaticais" },
              { type: "video", title: "Classes de Palavras ENEM", url: "https://www.youtube.com/results?search_query=classe+de+palavras+enem", description: "Classes gramaticais no ENEM" },
              { type: "tip", description: "Substantivo, adjetivo, verbo e pronome são os mais cobrados." }
            ]
          },
          {
            id: "verbo", name: "Verbo", percentage: 7,
            resources: [
              { type: "site", title: "Brasil Escola - Verbos", url: "https://brasilescola.uol.com.br/gramatica/verbo.htm", description: "Conjugação e tempos verbais" },
              { type: "video", title: "Verbos ENEM", url: "https://www.youtube.com/results?search_query=verbos+conjugação+enem", description: "Verbos para o ENEM" },
              { type: "tip", description: "Foque em concordância verbal e tempos do subjuntivo." }
            ]
          }
        ]
      },
      {
        id: "ingles",
        name: "Inglês",
        subjects: [
          {
            id: "interpretacao-ingles", name: "Interpretação de Textos", percentage: 51.3,
            resources: [
              { type: "site", title: "Toda Matéria - Inglês no ENEM", url: "https://www.todamateria.com.br/ingles-no-enem/", description: "Dicas de inglês para ENEM" },
              { type: "video", title: "Interpretação em Inglês ENEM", url: "https://www.youtube.com/results?search_query=interpretação+texto+inglês+enem", description: "Técnicas de interpretação em inglês" },
              { type: "tip", description: "Não precisa traduzir tudo. Foque em palavras-chave e cognatos para entender o contexto." }
            ]
          },
          {
            id: "dominio-lexical-ingles", name: "Domínio Lexical", percentage: 11.3,
            resources: [
              { type: "site", title: "Toda Matéria - Cognatos", url: "https://www.todamateria.com.br/cognatos/", description: "Lista de cognatos e falsos cognatos" },
              { type: "video", title: "Vocabulário Inglês ENEM", url: "https://www.youtube.com/results?search_query=vocabulário+inglês+enem+cognatos", description: "Vocabulário essencial para ENEM" },
              { type: "tip", description: "Cognatos são seus amigos na prova! Mas cuidado com os falsos cognatos." }
            ]
          },
          {
            id: "funcao-texto-ingles", name: "Identificação da Função do Texto", percentage: 8.7,
            resources: [
              { type: "site", title: "Brasil Escola - Gêneros em Inglês", url: "https://brasilescola.uol.com.br/ingles/", description: "Gêneros textuais em inglês" },
              { type: "video", title: "Função do Texto Inglês ENEM", url: "https://www.youtube.com/results?search_query=função+texto+gênero+textual+inglês+enem", description: "Identificando funções textuais" },
              { type: "tip", description: "Identifique se o texto informa, persuade, instrui ou entretém." }
            ]
          }
        ]
      },
      {
        id: "espanhol",
        name: "Espanhol",
        subjects: [
          {
            id: "interpretacao-espanhol", name: "Interpretação de Textos", percentage: 52.2,
            resources: [
              { type: "site", title: "Toda Matéria - Espanhol no ENEM", url: "https://www.todamateria.com.br/espanhol-no-enem/", description: "Dicas de espanhol para ENEM" },
              { type: "video", title: "Interpretação Espanhol ENEM", url: "https://www.youtube.com/results?search_query=interpretação+texto+espanhol+enem", description: "Interpretação em espanhol para ENEM" },
              { type: "tip", description: "Espanhol tem muitos cognatos com português. Use isso a seu favor!" }
            ]
          },
          {
            id: "dominio-lexical-espanhol", name: "Domínio Lexical", percentage: 14.8,
            resources: [
              { type: "site", title: "Questões de Espanhol (ENEM)", url: "https://brasilescola.uol.com.br/exercicios/espanhol", description: "Questões resolvidas de espanhol" },
              { type: "video", title: "Vocabulário Espanhol ENEM", url: "https://www.youtube.com/results?search_query=vocabulário+espanhol+enem+heterossemânticos", description: "Heterossemânticos e falsos amigos" },
              { type: "tip", description: "Cuidado com heterossemânticos: 'exquisito' = requintado, 'embarazada' = grávida." }
            ]
          },
          {
            id: "funcao-texto-espanhol", name: "Identificação de Função do Texto", percentage: 6.1,
            resources: [
              { type: "site", title: "Brasil Escola - Espanhol", url: "https://brasilescola.uol.com.br/espanhol/", description: "Conteúdos de espanhol" },
              { type: "video", title: "Função do Texto Espanhol ENEM", url: "https://www.youtube.com/results?search_query=gênero+textual+espanhol+enem", description: "Gêneros textuais em espanhol" },
              { type: "tip", description: "A prova cobra a capacidade de reconhecer o propósito comunicativo do texto." }
            ]
          }
        ]
      },
      {
        id: "artes",
        name: "Artes",
        subjects: [
          {
            id: "arte-contemporanea", name: "Arte Contemporânea", percentage: 60,
            resources: [
              { type: "site", title: "Artes no ENEM", url: "https://www.todamateria.com.br/artes-no-enem/", description: "O que estudar de artes para o ENEM" },
              { type: "site", title: "Questões de Artes no ENEM", url: "https://brasilescola.uol.com.br/exercicios/artes", description: "Questões de artes para praticar" },
              { type: "video", title: "Arte Contemporânea ENEM", url: "https://www.youtube.com/results?search_query=arte+contemporânea+enem", description: "Arte contemporânea no ENEM" },
              { type: "tip", description: "Relacione manifestações artísticas ao contexto histórico e social." }
            ]
          },
          {
            id: "arte-xv-xvi", name: "Arte nos Séculos XV e XVI", percentage: 10,
            resources: [
              { type: "site", title: "Brasil Escola - Renascimento", url: "https://brasilescola.uol.com.br/historiag/renascimento.htm", description: "Arte renascentista" },
              { type: "video", title: "Renascimento ENEM", url: "https://www.youtube.com/results?search_query=renascimento+arte+séculos+xv+xvi+enem", description: "Renascimento e arte nos séculos XV-XVI" },
              { type: "tip", description: "Leonardo da Vinci, Michelangelo e Rafael são os principais artistas." }
            ]
          },
          {
            id: "artes-plasticas", name: "Elementos Básicos das Artes Plásticas", percentage: 10,
            resources: [
              { type: "site", title: "Toda Matéria - Artes Plásticas", url: "https://www.todamateria.com.br/artes-plasticas/", description: "Fundamentos das artes plásticas" },
              { type: "video", title: "Artes Plásticas ENEM", url: "https://www.youtube.com/results?search_query=elementos+artes+plásticas+enem", description: "Elementos visuais para o ENEM" },
              { type: "tip", description: "Ponto, linha, forma, cor, textura e composição são os elementos fundamentais." }
            ]
          },
          {
            id: "musica-basica", name: "Elementos Básicos de Música", percentage: 10,
            resources: [
              { type: "site", title: "Brasil Escola - Música", url: "https://brasilescola.uol.com.br/artes/musica.htm", description: "Elementos da música" },
              { type: "video", title: "Música ENEM", url: "https://www.youtube.com/results?search_query=elementos+básicos+música+enem", description: "Música na prova do ENEM" },
              { type: "tip", description: "Melodia, harmonia, ritmo e timbre são os pilares da música." }
            ]
          },
          {
            id: "musica-xx", name: "Música no Século XX", percentage: 5,
            resources: [
              { type: "site", title: "Toda Matéria - Música Brasileira", url: "https://www.todamateria.com.br/musica-brasileira/", description: "Música popular brasileira e movimentos" },
              { type: "video", title: "Música Século XX ENEM", url: "https://www.youtube.com/results?search_query=música+século+xx+mpb+tropicália+enem", description: "MPB, Tropicália e Bossa Nova" },
              { type: "tip", description: "Tropicália, Bossa Nova e MPB são movimentos-chave do século XX no Brasil." }
            ]
          }
        ]
      },
      {
        id: "educacao-fisica",
        name: "Educação Física",
        subjects: [
          {
            id: "esporte-espetaculo", name: "Esporte e Espetáculo", percentage: 29,
            resources: [
              { type: "site", title: "Brasil Escola - Esporte", url: "https://brasilescola.uol.com.br/educacao-fisica/esportes.htm", description: "Esporte como espetáculo e negócio" },
              { type: "video", title: "Esporte e Espetáculo ENEM", url: "https://www.youtube.com/results?search_query=esporte+espetáculo+mídia+enem", description: "Relação entre esporte e mídia" },
              { type: "tip", description: "Entenda a mercantilização do esporte e o papel da mídia na espetacularização." }
            ]
          },
          {
            id: "midia-corpo", name: "Influência da Mídia no Corpo", percentage: 29,
            resources: [
              { type: "site", title: "Brasil Escola - Corpo e Mídia", url: "https://brasilescola.uol.com.br/educacao-fisica/", description: "Padrões de beleza e mídia" },
              { type: "video", title: "Corpo e Mídia ENEM", url: "https://www.youtube.com/results?search_query=influência+mídia+corpo+padrão+beleza+enem", description: "Padrões corporais e mídia no ENEM" },
              { type: "tip", description: "Relacione padrões estéticos impostos pela mídia com saúde e autoestima." }
            ]
          }
        ]
      },
      {
        id: "redacao",
        name: "Redação",
        subjects: [
          {
            id: "dissertacao-argumentativa", name: "Dissertação Argumentativa",
            resources: [
              { type: "site", title: "Brasil Escola - Redação ENEM", url: "https://brasilescola.uol.com.br/redacao/como-fazer-boa-redacao.htm", description: "Como fazer uma boa redação" },
              { type: "video", title: "Redação Nota 1000", url: "https://www.youtube.com/results?search_query=redação+nota+1000+enem", description: "Técnicas para redação nota 1000" },
              { type: "tip", description: "Estrutura: introdução com tese, 2 parágrafos de desenvolvimento, conclusão com proposta de intervenção." }
            ]
          },
          {
            id: "proposta-intervencao", name: "Proposta de Intervenção",
            resources: [
              { type: "site", title: "G1 - ENEM", url: "https://g1.globo.com/educacao/enem/", description: "Dicas e notícias sobre o ENEM" },
              { type: "video", title: "Proposta de Intervenção ENEM", url: "https://www.youtube.com/results?search_query=proposta+de+intervenção+enem", description: "Como fazer a proposta perfeita" },
              { type: "tip", description: "Inclua agente, ação, modo/meio, efeito e detalhamento na proposta." }
            ]
          },
          {
            id: "competencias-redacao", name: "5 Competências da Redação",
            resources: [
              { type: "site", title: "INEP - ENEM", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem", description: "Página oficial do ENEM" },
              { type: "video", title: "5 Competências ENEM", url: "https://www.youtube.com/results?search_query=5+competências+redação+enem", description: "Entenda cada competência" },
              { type: "tip", description: "Competência 5 (proposta de intervenção) é a que mais reprova. Dedique atenção especial." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "humanas",
    name: "Ciências Humanas e suas Tecnologias",
    icon: "🌍",
    color: "blue",
    disciplines: [
      {
        id: "historia",
        name: "História",
        subjects: [
          {
            id: "idade-contemporanea", name: "Idade Contemporânea", percentage: 17.7,
            resources: [
              { type: "site", title: "Brasil Escola - Idade Contemporânea", url: "https://brasilescola.uol.com.br/historiag/idade-contemporanea.htm", description: "Eventos da Idade Contemporânea" },
              { type: "site", title: "Questões de História no ENEM", url: "https://brasilescola.uol.com.br/exercicios/historia", description: "Exercícios de História para praticar" },
              { type: "video", title: "Idade Contemporânea ENEM", url: "https://www.youtube.com/results?search_query=idade+contemporânea+enem", description: "Resumo da Idade Contemporânea" },
              { type: "tip", description: "Revoluções, guerras mundiais e descolonização são os temas principais." }
            ]
          },
          {
            id: "segunda-guerra", name: "2ª Guerra Mundial e suas Consequências", percentage: 13.6,
            resources: [
              { type: "site", title: "Toda Matéria - Segunda Guerra", url: "https://www.todamateria.com.br/segunda-guerra-mundial/", description: "Causas, fases e consequências" },
              { type: "video", title: "2ª Guerra Mundial ENEM", url: "https://www.youtube.com/results?search_query=segunda+guerra+mundial+enem", description: "A Segunda Guerra no ENEM" },
              { type: "tip", description: "Foque nas causas, holocausto, bombas atômicas e criação da ONU." }
            ]
          },
          {
            id: "brasil-colonia", name: "Brasil Colônia", percentage: 12.7,
            resources: [
              { type: "site", title: "Brasil Escola - Brasil Colônia", url: "https://brasilescola.uol.com.br/historiab/brasil-colonial.htm", description: "Período colonial brasileiro" },
              { type: "site", title: "Questões de História do Brasil no ENEM", url: "https://brasilescola.uol.com.br/exercicios/historia-do-brasil", description: "Questões de História do Brasil" },
              { type: "video", title: "Brasil Colônia ENEM", url: "https://www.youtube.com/results?search_query=brasil+colônia+enem", description: "Resumo do período colonial" },
              { type: "tip", description: "Entenda o sistema de capitanias, escravidão e economia açucareira." }
            ]
          },
          {
            id: "primeiro-segundo-reinado", name: "Primeiro Reinado e Segundo Reinado", percentage: 12.3,
            resources: [
              { type: "site", title: "Toda Matéria - Brasil Império", url: "https://www.todamateria.com.br/brasil-imperio/", description: "Do primeiro ao segundo reinado" },
              { type: "video", title: "Brasil Império ENEM", url: "https://www.youtube.com/results?search_query=primeiro+segundo+reinado+enem", description: "Período imperial no ENEM" },
              { type: "tip", description: "Independência, regência e as revoltas do período são essenciais." }
            ]
          },
          {
            id: "redemocratizacao", name: "Governos Pós-Regime Militar — Redemocratização", percentage: 12.3,
            resources: [
              { type: "site", title: "Brasil Escola - Redemocratização", url: "https://brasilescola.uol.com.br/historiab/redemocratizacao.htm", description: "O processo de redemocratização" },
              { type: "video", title: "Redemocratização ENEM", url: "https://www.youtube.com/results?search_query=redemocratização+brasil+enem", description: "Da ditadura à democracia" },
              { type: "tip", description: "Diretas Já, Constituição de 1988 e governos democráticos são pontos-chave." }
            ]
          },
          {
            id: "era-vargas", name: "Era Vargas", percentage: 11.1,
            resources: [
              { type: "site", title: "Toda Matéria - Era Vargas", url: "https://www.todamateria.com.br/era-vargas/", description: "Os governos de Getúlio Vargas" },
              { type: "video", title: "Era Vargas ENEM", url: "https://www.youtube.com/results?search_query=era+vargas+enem", description: "Era Vargas completa para ENEM" },
              { type: "tip", description: "Governo Provisório, Constitucional e Estado Novo — saiba as diferenças." }
            ]
          },
          {
            id: "historia-politica", name: "História Política", percentage: 10.5,
            resources: [
              { type: "site", title: "Brasil Escola - Política", url: "https://brasilescola.uol.com.br/politica/", description: "Conceitos de política e história" },
              { type: "video", title: "História Política ENEM", url: "https://www.youtube.com/results?search_query=história+política+poder+enem", description: "Poder e política no ENEM" },
              { type: "tip", description: "Entenda as formas de governo e os sistemas políticos ao longo da história." }
            ]
          },
          {
            id: "republica-velha", name: "República Velha", percentage: 9.9,
            resources: [
              { type: "site", title: "Toda Matéria - República Velha", url: "https://www.todamateria.com.br/republica-velha/", description: "Política do café com leite" },
              { type: "video", title: "República Velha ENEM", url: "https://www.youtube.com/results?search_query=república+velha+enem", description: "República Oligárquica no ENEM" },
              { type: "tip", description: "Coronelismo, voto de cabresto e política dos governadores são essenciais." }
            ]
          },
          {
            id: "patrimonio-historico", name: "Patrimônio Histórico-Cultural e Memória", percentage: 7.8,
            resources: [
              { type: "site", title: "Brasil Escola - Patrimônio Cultural", url: "https://brasilescola.uol.com.br/cultura/patrimonio-cultural.htm", description: "Patrimônio material e imaterial" },
              { type: "video", title: "Patrimônio Histórico ENEM", url: "https://www.youtube.com/results?search_query=patrimônio+histórico+cultural+memória+enem", description: "Patrimônio e memória no ENEM" },
              { type: "tip", description: "Entenda a importância da preservação cultural e da memória coletiva." }
            ]
          }
        ]
      },
      {
        id: "geografia",
        name: "Geografia",
        subjects: [
          {
            id: "geografia-agraria", name: "Geografia Agrária", percentage: 18.1,
            resources: [
              { type: "site", title: "Brasil Escola - Geografia Agrária", url: "https://brasilescola.uol.com.br/geografia/geografia-agraria.htm", description: "Questão agrária e agronegócio" },
              { type: "site", title: "Questões de Geografia no ENEM", url: "https://brasilescola.uol.com.br/exercicios/geografia", description: "Exercícios de Geografia para praticar" },
              { type: "video", title: "Geografia Agrária ENEM", url: "https://www.youtube.com/results?search_query=geografia+agrária+agronegócio+enem", description: "Agronegócio e reforma agrária" },
              { type: "tip", description: "Entenda agronegócio x agricultura familiar e conflitos por terra." }
            ]
          },
          {
            id: "questoes-ambientais", name: "Questões Ambientais", percentage: 15.5,
            resources: [
              { type: "site", title: "Brasil Escola - Meio Ambiente", url: "https://brasilescola.uol.com.br/geografia/meio-ambiente.htm", description: "Problemas ambientais contemporâneos" },
              { type: "video", title: "Questões Ambientais ENEM", url: "https://www.youtube.com/results?search_query=questões+ambientais+enem", description: "Meio ambiente no ENEM" },
              { type: "tip", description: "Desmatamento, aquecimento global e acordos climáticos são frequentes." }
            ]
          },
          {
            id: "geografia-fisica", name: "Geografia Física", percentage: 10.9,
            resources: [
              { type: "site", title: "Toda Matéria - Geografia Física", url: "https://www.todamateria.com.br/geografia-fisica/", description: "Relevo, solo e hidrografia" },
              { type: "video", title: "Geografia Física ENEM", url: "https://www.youtube.com/results?search_query=geografia+física+relevo+hidrografia+enem", description: "Geomorfologia e hidrografia" },
              { type: "tip", description: "Saiba identificar tipos de relevo e bacias hidrográficas do Brasil." }
            ]
          },
          {
            id: "geografia-urbana", name: "Geografia Urbana", percentage: 10.4,
            resources: [
              { type: "site", title: "Brasil Escola - Urbanização", url: "https://brasilescola.uol.com.br/geografia/urbanizacao.htm", description: "Processo de urbanização" },
              { type: "video", title: "Geografia Urbana ENEM", url: "https://www.youtube.com/results?search_query=geografia+urbana+urbanização+enem", description: "Urbanização no ENEM" },
              { type: "tip", description: "Relacione urbanização com problemas sociais e mobilidade urbana." }
            ]
          },
          {
            id: "climatologia", name: "Climatologia", percentage: 10.4,
            resources: [
              { type: "site", title: "Brasil Escola - Clima", url: "https://brasilescola.uol.com.br/geografia/clima.htm", description: "Climas do Brasil e do mundo" },
              { type: "video", title: "Climatologia ENEM", url: "https://www.youtube.com/results?search_query=climatologia+enem", description: "Climas no ENEM" },
              { type: "tip", description: "Saiba identificar climogramas e relacionar clima com vegetação." }
            ]
          },
          {
            id: "urbanizacao", name: "Urbanização", percentage: 10.4,
            resources: [
              { type: "site", title: "Toda Matéria - Urbanização", url: "https://www.todamateria.com.br/urbanizacao/", description: "Urbanização brasileira e mundial" },
              { type: "video", title: "Urbanização ENEM", url: "https://www.youtube.com/results?search_query=urbanização+brasil+enem", description: "Urbanização para o ENEM" },
              { type: "tip", description: "Êxodo rural, metropolização e problemas urbanos são temas centrais." }
            ]
          },
          {
            id: "globalizacao", name: "Globalização", percentage: 9.1,
            resources: [
              { type: "site", title: "Brasil Escola - Globalização", url: "https://brasilescola.uol.com.br/geografia/globalizacao.htm", description: "Aspectos da globalização" },
              { type: "video", title: "Globalização ENEM", url: "https://www.youtube.com/results?search_query=globalização+enem", description: "Globalização no ENEM" },
              { type: "tip", description: "Entenda vantagens e desvantagens da globalização e seus impactos sociais." }
            ]
          },
          {
            id: "cartografia", name: "Cartografia", percentage: 6.5,
            resources: [
              { type: "site", title: "Brasil Escola - Cartografia", url: "https://brasilescola.uol.com.br/geografia/cartografia.htm", description: "Elementos de cartografia" },
              { type: "video", title: "Cartografia ENEM", url: "https://www.youtube.com/results?search_query=cartografia+enem", description: "Leitura de mapas no ENEM" },
              { type: "tip", description: "Pratique leitura de mapas, escalas e projeções cartográficas." }
            ]
          },
          {
            id: "industria", name: "Indústria", percentage: 6.5,
            resources: [
              { type: "site", title: "Toda Matéria - Industrialização", url: "https://www.todamateria.com.br/industrializacao/", description: "Processo de industrialização" },
              { type: "video", title: "Indústria ENEM", url: "https://www.youtube.com/results?search_query=industrialização+brasil+enem", description: "Industrialização no ENEM" },
              { type: "tip", description: "Industrialização tardia do Brasil e tipos de indústria são cobrados." }
            ]
          }
        ]
      },
      {
        id: "filosofia",
        name: "Filosofia",
        subjects: [
          {
            id: "aristoteles-helenistica", name: "Aristóteles e Escola Helenística", percentage: 18.8,
            resources: [
              { type: "site", title: "Brasil Escola - Aristóteles", url: "https://brasilescola.uol.com.br/filosofia/aristoteles.htm", description: "Filosofia de Aristóteles" },
              { type: "site", title: "Questões de Filosofia no ENEM", url: "https://brasilescola.uol.com.br/exercicios/filosofia", description: "Exercícios de Filosofia" },
              { type: "video", title: "Aristóteles ENEM", url: "https://www.youtube.com/results?search_query=aristóteles+escola+helenística+enem", description: "Aristóteles e helenismo" },
              { type: "tip", description: "Lógica aristotélica, ética das virtudes e escola helenística (estoicismo, epicurismo)." }
            ]
          },
          {
            id: "etica-justica", name: "Ética e Justiça", percentage: 18.7,
            resources: [
              { type: "site", title: "Brasil Escola - Ética", url: "https://brasilescola.uol.com.br/filosofia/etica.htm", description: "Fundamentos da ética" },
              { type: "video", title: "Ética e Justiça ENEM", url: "https://www.youtube.com/results?search_query=ética+justiça+filosofia+enem", description: "Ética e justiça no ENEM" },
              { type: "tip", description: "Relacione conceitos filosóficos com questões contemporâneas de cidadania e direitos." }
            ]
          },
          {
            id: "racionalismo-moderno", name: "Racionalismo Moderno", percentage: 18.8,
            resources: [
              { type: "site", title: "Toda Matéria - Racionalismo", url: "https://www.todamateria.com.br/racionalismo/", description: "Descartes e o racionalismo" },
              { type: "video", title: "Racionalismo Moderno ENEM", url: "https://www.youtube.com/results?search_query=racionalismo+moderno+descartes+enem", description: "Descartes e Kant no ENEM" },
              { type: "tip", description: "Descartes (dúvida metódica, 'penso logo existo') e Kant (imperativo categórico)." }
            ]
          },
          {
            id: "filosofia-antiga", name: "Filosofia Antiga", percentage: 16.8,
            resources: [
              { type: "site", title: "Brasil Escola - Filosofia Antiga", url: "https://brasilescola.uol.com.br/filosofia/filosofia-antiga.htm", description: "Os filósofos gregos" },
              { type: "video", title: "Filosofia Antiga ENEM", url: "https://www.youtube.com/results?search_query=filosofia+antiga+pré+socráticos+enem", description: "Pré-socráticos e Tales de Mileto" },
              { type: "tip", description: "Pré-socráticos buscavam a arché (princípio de tudo): água, fogo, ar, átomos." }
            ]
          },
          {
            id: "sofistas-socrates-platao", name: "Escola Sofística, Sócrates e Platão", percentage: 12.5,
            resources: [
              { type: "site", title: "Toda Matéria - Sócrates", url: "https://www.todamateria.com.br/socrates/", description: "Vida e filosofia de Sócrates" },
              { type: "video", title: "Sofistas, Sócrates e Platão ENEM", url: "https://www.youtube.com/results?search_query=sofistas+sócrates+platão+enem", description: "Os três grandes da filosofia grega" },
              { type: "tip", description: "Sócrates (maiêutica), Platão (mundo das ideias) e sofistas (relativismo)." }
            ]
          },
          {
            id: "filosofia-contemporanea", name: "Filosofia Contemporânea", percentage: 12.4,
            resources: [
              { type: "site", title: "Brasil Escola - Filosofia Contemporânea", url: "https://brasilescola.uol.com.br/filosofia/filosofia-contemporanea.htm", description: "Filosofia dos séculos XIX e XX" },
              { type: "video", title: "Filosofia Contemporânea ENEM", url: "https://www.youtube.com/results?search_query=filosofia+contemporânea+enem", description: "Nietzsche, Sartre e Foucault" },
              { type: "tip", description: "Existencialismo (Sartre), genealogia (Nietzsche) e biopoder (Foucault)." }
            ]
          },
          {
            id: "natureza-conhecimento", name: "Natureza do Conhecimento", percentage: 11.6,
            resources: [
              { type: "site", title: "Toda Matéria - Teoria do Conhecimento", url: "https://www.todamateria.com.br/teoria-do-conhecimento/", description: "Epistemologia e gnoseologia" },
              { type: "video", title: "Teoria do Conhecimento ENEM", url: "https://www.youtube.com/results?search_query=natureza+conhecimento+epistemologia+enem", description: "Epistemologia no ENEM" },
              { type: "tip", description: "Empirismo vs racionalismo e o criticismo kantiano são fundamentais." }
            ]
          },
          {
            id: "filosofia-moderna", name: "Filosofia Moderna", percentage: 11.6,
            resources: [
              { type: "site", title: "Brasil Escola - Filosofia Moderna", url: "https://brasilescola.uol.com.br/filosofia/filosofia-moderna.htm", description: "Iluminismo e contratualismo" },
              { type: "video", title: "Filosofia Moderna ENEM", url: "https://www.youtube.com/results?search_query=filosofia+moderna+iluminismo+enem", description: "Locke, Rousseau e Montesquieu" },
              { type: "tip", description: "Locke, Rousseau e Montesquieu — contratualismo e separação dos poderes." }
            ]
          },
          {
            id: "escola-frankfurt", name: "Escola de Frankfurt", percentage: 9.4,
            resources: [
              { type: "site", title: "Brasil Escola - Escola de Frankfurt", url: "https://brasilescola.uol.com.br/filosofia/escola-frankfurt.htm", description: "Teoria crítica e indústria cultural" },
              { type: "video", title: "Escola de Frankfurt ENEM", url: "https://www.youtube.com/results?search_query=escola+de+frankfurt+indústria+cultural+enem", description: "Adorno, Horkheimer e Habermas" },
              { type: "tip", description: "Indústria cultural (Adorno/Horkheimer) e razão comunicativa (Habermas)." }
            ]
          }
        ]
      },
      {
        id: "sociologia",
        name: "Sociologia",
        subjects: [
          {
            id: "sociologia-contemporanea", name: "Sociologia Contemporânea", percentage: 28.6,
            resources: [
              { type: "site", title: "Brasil Escola - Sociologia", url: "https://brasilescola.uol.com.br/sociologia/", description: "Conteúdos de sociologia" },
              { type: "video", title: "Sociologia Contemporânea ENEM", url: "https://www.youtube.com/results?search_query=sociologia+contemporânea+enem", description: "Temas contemporâneos de sociologia" },
              { type: "tip", description: "Bauman (modernidade líquida), Bourdieu (capital cultural) e Giddens são frequentes." }
            ]
          },
          {
            id: "mundo-trabalho", name: "Mundo do Trabalho", percentage: 21.9,
            resources: [
              { type: "site", title: "Brasil Escola - Trabalho", url: "https://brasilescola.uol.com.br/sociologia/trabalho.htm", description: "Trabalho e relações sociais" },
              { type: "video", title: "Mundo do Trabalho ENEM", url: "https://www.youtube.com/results?search_query=mundo+do+trabalho+sociologia+enem", description: "Trabalho e sociedade no ENEM" },
              { type: "tip", description: "Precarização, informalidade e novas formas de trabalho são temas atuais." }
            ]
          },
          {
            id: "cultura-industria-cultural", name: "Cultura e Indústria Cultural", percentage: 12.9,
            resources: [
              { type: "site", title: "Brasil Escola - Indústria Cultural", url: "https://brasilescola.uol.com.br/sociologia/industria-cultural.htm", description: "Conceito de Adorno e Horkheimer" },
              { type: "video", title: "Indústria Cultural ENEM", url: "https://www.youtube.com/results?search_query=indústria+cultural+enem", description: "Escola de Frankfurt no ENEM" },
              { type: "tip", description: "Entenda a diferença entre cultura de massa e cultura popular." }
            ]
          },
          {
            id: "ideologia", name: "Ideologia", percentage: 11.6,
            resources: [
              { type: "site", title: "Toda Matéria - Ideologia", url: "https://www.todamateria.com.br/ideologia/", description: "Conceito de ideologia em Marx" },
              { type: "video", title: "Ideologia ENEM", url: "https://www.youtube.com/results?search_query=ideologia+marx+sociologia+enem", description: "Ideologia na visão de Marx" },
              { type: "tip", description: "Marx define ideologia como conjunto de ideias que mascaram a realidade social." }
            ]
          },
          {
            id: "meios-comunicacao", name: "Meios de Comunicação, Tecnologia e Cultura de Massa", percentage: 11.6,
            resources: [
              { type: "site", title: "Brasil Escola - Meios de Comunicação", url: "https://brasilescola.uol.com.br/sociologia/meios-comunicacao-massa.htm", description: "Mídia e cultura de massa" },
              { type: "video", title: "Mídia e Tecnologia ENEM", url: "https://www.youtube.com/results?search_query=meios+comunicação+tecnologia+cultura+massa+enem", description: "Tecnologia e sociedade" },
              { type: "tip", description: "Redes sociais, fake news e manipulação midiática são temas atuais cobrados." }
            ]
          },
          {
            id: "cidadania", name: "Cidadania", percentage: 10.3,
            resources: [
              { type: "site", title: "Toda Matéria - Cidadania", url: "https://www.todamateria.com.br/cidadania/", description: "Conceito e história da cidadania" },
              { type: "video", title: "Cidadania ENEM", url: "https://www.youtube.com/results?search_query=cidadania+direitos+sociologia+enem", description: "Cidadania e direitos no ENEM" },
              { type: "tip", description: "Direitos civis, políticos e sociais — conheça a teoria de T.H. Marshall." }
            ]
          },
          {
            id: "capitalismo", name: "Capitalismo", percentage: 7.1,
            resources: [
              { type: "site", title: "Brasil Escola - Capitalismo", url: "https://brasilescola.uol.com.br/sociologia/capitalismo.htm", description: "Fases e características do capitalismo" },
              { type: "video", title: "Capitalismo ENEM", url: "https://www.youtube.com/results?search_query=capitalismo+fases+enem", description: "Capitalismo no ENEM" },
              { type: "tip", description: "Capitalismo comercial, industrial e financeiro — saiba as diferenças." }
            ]
          },
          {
            id: "economia-sociedade", name: "Economia e Sociedade", percentage: 7.1,
            resources: [
              { type: "site", title: "Toda Matéria - Economia", url: "https://www.todamateria.com.br/economia/", description: "Relação entre economia e sociedade" },
              { type: "video", title: "Economia e Sociedade ENEM", url: "https://www.youtube.com/results?search_query=economia+sociedade+sociologia+enem", description: "Economia na sociologia" },
              { type: "tip", description: "Weber e a ética protestante, Marx e mais-valia são conceitos essenciais." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "natureza",
    name: "Ciências da Natureza e suas Tecnologias",
    icon: "🔬",
    color: "teal",
    disciplines: [
      {
        id: "biologia",
        name: "Biologia",
        subjects: [
          {
            id: "ecologia", name: "Ecologia",
            resources: [
              { type: "site", title: "Brasil Escola - Ecologia", url: "https://brasilescola.uol.com.br/biologia/ecologia.htm", description: "Conceitos de ecologia" },
              { type: "video", title: "Biologia Total - Ecologia", url: "https://www.youtube.com/results?search_query=ecologia+enem+biologia+total", description: "Ecologia completa para o ENEM" },
              { type: "tip", description: "Cadeia alimentar, fluxo de energia e ciclos biogeoquímicos são essenciais." }
            ]
          },
          {
            id: "genetica", name: "Genética",
            resources: [
              { type: "site", title: "Toda Matéria - Genética", url: "https://www.todamateria.com.br/genetica/", description: "Leis de Mendel e genética" },
              { type: "video", title: "Prof. Jubilut - Genética", url: "https://www.youtube.com/results?search_query=genética+enem+jubilut", description: "Aulas de genética para ENEM" },
              { type: "tip", description: "Domine as Leis de Mendel e saiba resolver cruzamentos genéticos." }
            ]
          },
          {
            id: "evolucao", name: "Evolução",
            resources: [
              { type: "site", title: "Brasil Escola - Evolução", url: "https://brasilescola.uol.com.br/biologia/evolucao.htm", description: "Teorias evolutivas" },
              { type: "video", title: "Evolução ENEM", url: "https://www.youtube.com/results?search_query=evolução+darwin+lamarck+enem", description: "Darwin vs Lamarck no ENEM" },
              { type: "tip", description: "Diferencie Lamarck (uso e desuso) de Darwin (seleção natural)." }
            ]
          },
          {
            id: "citologia", name: "Citologia",
            resources: [
              { type: "site", title: "Toda Matéria - Citologia", url: "https://www.todamateria.com.br/citologia/", description: "Biologia celular" },
              { type: "video", title: "Citologia ENEM", url: "https://www.youtube.com/results?search_query=citologia+célula+enem", description: "Célula e organelas no ENEM" },
              { type: "tip", description: "Saiba as diferenças entre célula animal e vegetal, e as funções das organelas." }
            ]
          },
          {
            id: "fisiologia-humana", name: "Fisiologia Humana",
            resources: [
              { type: "site", title: "Brasil Escola - Fisiologia", url: "https://brasilescola.uol.com.br/biologia/fisiologia.htm", description: "Sistemas do corpo humano" },
              { type: "video", title: "Fisiologia Humana ENEM", url: "https://www.youtube.com/results?search_query=fisiologia+humana+enem", description: "Sistemas do corpo para ENEM" },
              { type: "tip", description: "Sistemas circulatório, nervoso e endócrino são os mais cobrados." }
            ]
          },
          {
            id: "biomas", name: "Biomas Brasileiros",
            resources: [
              { type: "site", title: "Brasil Escola - Biomas", url: "https://brasilescola.uol.com.br/geografia/biomas-brasileiros.htm", description: "Os 6 biomas do Brasil" },
              { type: "video", title: "Biomas ENEM", url: "https://www.youtube.com/results?search_query=biomas+brasileiros+enem", description: "Biomas para o ENEM" },
              { type: "tip", description: "Cerrado e Amazônia são os mais cobrados. Saiba as características de cada bioma." }
            ]
          }
        ]
      },
      {
        id: "quimica",
        name: "Química",
        subjects: [
          {
            id: "quimica-organica", name: "Química Orgânica",
            resources: [
              { type: "site", title: "Brasil Escola - Química Orgânica", url: "https://brasilescola.uol.com.br/quimica/quimica-organica.htm", description: "Funções orgânicas e nomenclatura" },
              { type: "video", title: "Prof. Ferretto - Orgânica", url: "https://www.youtube.com/results?search_query=química+orgânica+enem+ferretto", description: "Química orgânica para ENEM" },
              { type: "tip", description: "Identifique os grupos funcionais e saiba nomenclatura IUPAC." }
            ]
          },
          {
            id: "estequiometria", name: "Estequiometria",
            resources: [
              { type: "site", title: "Toda Matéria - Estequiometria", url: "https://www.todamateria.com.br/estequiometria/", description: "Cálculos estequiométricos" },
              { type: "video", title: "Estequiometria ENEM", url: "https://www.youtube.com/results?search_query=estequiometria+enem", description: "Estequiometria no ENEM" },
              { type: "tip", description: "Balanceie a equação primeiro, depois faça proporções molares." }
            ]
          },
          {
            id: "termoquimica", name: "Termoquímica",
            resources: [
              { type: "site", title: "Brasil Escola - Termoquímica", url: "https://brasilescola.uol.com.br/quimica/termoquimica.htm", description: "Calor nas reações químicas" },
              { type: "video", title: "Termoquímica ENEM", url: "https://www.youtube.com/results?search_query=termoquímica+enem", description: "Entalpia e Lei de Hess" },
              { type: "tip", description: "Domine a Lei de Hess e saiba interpretar gráficos de entalpia." }
            ]
          },
          {
            id: "eletroquimica", name: "Eletroquímica",
            resources: [
              { type: "site", title: "Toda Matéria - Eletroquímica", url: "https://www.todamateria.com.br/eletroquimica/", description: "Pilhas e eletrólise" },
              { type: "video", title: "Eletroquímica ENEM", url: "https://www.youtube.com/results?search_query=eletroquímica+enem", description: "Pilhas e baterias no ENEM" },
              { type: "tip", description: "Saiba a diferença entre pilha (espontânea) e eletrólise (não espontânea)." }
            ]
          },
          {
            id: "solucoes", name: "Soluções e Concentração",
            resources: [
              { type: "site", title: "Brasil Escola - Soluções", url: "https://brasilescola.uol.com.br/quimica/solucoes.htm", description: "Tipos de soluções" },
              { type: "video", title: "Soluções ENEM", url: "https://www.youtube.com/results?search_query=soluções+concentração+enem", description: "Cálculos de concentração" },
              { type: "tip", description: "Concentração comum, molaridade e diluição são cálculos essenciais." }
            ]
          }
        ]
      },
      {
        id: "fisica",
        name: "Física",
        subjects: [
          {
            id: "mecanica", name: "Mecânica (Cinemática e Dinâmica)",
            resources: [
              { type: "site", title: "Brasil Escola - Mecânica", url: "https://brasilescola.uol.com.br/fisica/mecanica.htm", description: "Movimento e forças" },
              { type: "video", title: "Prof. Boaro - Mecânica", url: "https://www.youtube.com/results?search_query=mecânica+cinemática+dinâmica+enem", description: "Mecânica completa para ENEM" },
              { type: "tip", description: "Domine MRU, MRUV e as 3 Leis de Newton." }
            ]
          },
          {
            id: "termodinamica", name: "Termodinâmica",
            resources: [
              { type: "site", title: "Toda Matéria - Termodinâmica", url: "https://www.todamateria.com.br/termodinamica/", description: "Leis da termodinâmica" },
              { type: "video", title: "Termodinâmica ENEM", url: "https://www.youtube.com/results?search_query=termodinâmica+enem", description: "Calor e temperatura no ENEM" },
              { type: "tip", description: "Calor, temperatura, dilatação e máquinas térmicas são temas frequentes." }
            ]
          },
          {
            id: "ondulatoria", name: "Ondulatória e Óptica",
            resources: [
              { type: "site", title: "Brasil Escola - Ondas", url: "https://brasilescola.uol.com.br/fisica/ondas.htm", description: "Ondas e fenômenos ondulatórios" },
              { type: "video", title: "Ondulatória ENEM", url: "https://www.youtube.com/results?search_query=ondulatória+óptica+enem", description: "Ondas e luz no ENEM" },
              { type: "tip", description: "Refração, reflexão e difração aparecem tanto em ondulatória quanto em óptica." }
            ]
          },
          {
            id: "eletricidade", name: "Eletricidade e Eletromagnetismo",
            resources: [
              { type: "site", title: "Toda Matéria - Eletricidade", url: "https://www.todamateria.com.br/eletricidade/", description: "Circuitos e eletromagnetismo" },
              { type: "video", title: "Eletricidade ENEM", url: "https://www.youtube.com/results?search_query=eletricidade+eletromagnetismo+enem", description: "Circuitos elétricos no ENEM" },
              { type: "tip", description: "Lei de Ohm, potência elétrica e cálculo de consumo são muito cobrados." }
            ]
          },
          {
            id: "energia", name: "Energia e Trabalho",
            resources: [
              { type: "site", title: "Brasil Escola - Energia", url: "https://brasilescola.uol.com.br/fisica/energia.htm", description: "Tipos de energia" },
              { type: "video", title: "Energia e Trabalho ENEM", url: "https://www.youtube.com/results?search_query=energia+trabalho+potência+enem", description: "Energia mecânica no ENEM" },
              { type: "tip", description: "Conservação de energia e teorema trabalho-energia são fundamentais." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "matematica",
    name: "Matemática e suas Tecnologias",
    icon: "📐",
    color: "emerald",
    disciplines: [
      {
        id: "matematica-disc",
        name: "Matemática",
        subjects: [
          {
            id: "porcentagem", name: "Porcentagem e Juros",
            resources: [
              { type: "site", title: "Brasil Escola - Porcentagem", url: "https://brasilescola.uol.com.br/matematica/porcentagem.htm", description: "Cálculos de porcentagem" },
              { type: "video", title: "Porcentagem ENEM", url: "https://www.youtube.com/results?search_query=porcentagem+juros+enem+matemática", description: "Porcentagem e juros no ENEM" },
              { type: "tip", description: "É o tema MAIS cobrado do ENEM em matemática. Pratique bastante!" }
            ]
          },
          {
            id: "razao-proporcao", name: "Razão, Proporção e Regra de Três",
            resources: [
              { type: "site", title: "Toda Matéria - Regra de Três", url: "https://www.todamateria.com.br/regra-de-tres/", description: "Regra de três simples e composta" },
              { type: "video", title: "Regra de Três ENEM", url: "https://www.youtube.com/results?search_query=regra+de+três+enem", description: "Regra de três para ENEM" },
              { type: "tip", description: "Identifique se as grandezas são direta ou inversamente proporcionais." }
            ]
          },
          {
            id: "funcoes", name: "Funções (1º e 2º Grau)",
            resources: [
              { type: "site", title: "Brasil Escola - Funções", url: "https://brasilescola.uol.com.br/matematica/funcao.htm", description: "Funções e gráficos" },
              { type: "video", title: "Funções ENEM", url: "https://www.youtube.com/results?search_query=funções+primeiro+segundo+grau+enem", description: "Funções para o ENEM" },
              { type: "tip", description: "Saiba interpretar gráficos de funções — é mais importante que decorar fórmulas." }
            ]
          },
          {
            id: "geometria-plana", name: "Geometria Plana",
            resources: [
              { type: "site", title: "Toda Matéria - Geometria Plana", url: "https://www.todamateria.com.br/geometria-plana/", description: "Áreas e perímetros" },
              { type: "video", title: "Geometria Plana ENEM", url: "https://www.youtube.com/results?search_query=geometria+plana+enem", description: "Geometria plana no ENEM" },
              { type: "tip", description: "Domine cálculo de áreas de triângulo, círculo, retângulo e trapézio." }
            ]
          },
          {
            id: "geometria-espacial", name: "Geometria Espacial",
            resources: [
              { type: "site", title: "Brasil Escola - Geometria Espacial", url: "https://brasilescola.uol.com.br/matematica/geometria-espacial.htm", description: "Volumes de sólidos" },
              { type: "video", title: "Geometria Espacial ENEM", url: "https://www.youtube.com/results?search_query=geometria+espacial+enem", description: "Sólidos geométricos" },
              { type: "tip", description: "Cilindro, cone e esfera são os mais cobrados em geometria espacial." }
            ]
          },
          {
            id: "estatistica", name: "Estatística e Probabilidade",
            resources: [
              { type: "site", title: "Toda Matéria - Estatística", url: "https://www.todamateria.com.br/estatistica/", description: "Média, moda e mediana" },
              { type: "video", title: "Estatística ENEM", url: "https://www.youtube.com/results?search_query=estatística+probabilidade+enem", description: "Estatística no ENEM" },
              { type: "tip", description: "Leitura de gráficos e tabelas é essencial. Pratique interpretação de dados." }
            ]
          },
          {
            id: "trigonometria", name: "Trigonometria",
            resources: [
              { type: "site", title: "Brasil Escola - Trigonometria", url: "https://brasilescola.uol.com.br/matematica/trigonometria.htm", description: "Seno, cosseno e tangente" },
              { type: "video", title: "Trigonometria ENEM", url: "https://www.youtube.com/results?search_query=trigonometria+enem", description: "Trigonometria para ENEM" },
              { type: "tip", description: "Decore os valores de sen/cos/tan de 30°, 45° e 60°." }
            ]
          },
          {
            id: "analise-combinatoria", name: "Análise Combinatória",
            resources: [
              { type: "site", title: "Toda Matéria - Combinatória", url: "https://www.todamateria.com.br/analise-combinatoria/", description: "Permutação, arranjo e combinação" },
              { type: "video", title: "Combinatória ENEM", url: "https://www.youtube.com/results?search_query=análise+combinatória+enem", description: "Contagem no ENEM" },
              { type: "tip", description: "Diferencie quando usar permutação, arranjo ou combinação." }
            ]
          },
          {
            id: "logaritmos", name: "Logaritmos e Exponenciais",
            resources: [
              { type: "site", title: "Brasil Escola - Logaritmos", url: "https://brasilescola.uol.com.br/matematica/logaritmo.htm", description: "Propriedades dos logaritmos" },
              { type: "video", title: "Logaritmos ENEM", url: "https://www.youtube.com/results?search_query=logaritmos+exponenciais+enem", description: "Logaritmos no ENEM" },
              { type: "tip", description: "Propriedades operatórias dos logaritmos são a chave para resolver questões." }
            ]
          },
          {
            id: "matrizes", name: "Matrizes e Determinantes",
            resources: [
              { type: "site", title: "Toda Matéria - Matrizes", url: "https://www.todamateria.com.br/matrizes/", description: "Operações com matrizes" },
              { type: "video", title: "Matrizes ENEM", url: "https://www.youtube.com/results?search_query=matrizes+determinantes+enem", description: "Matrizes para ENEM" },
              { type: "tip", description: "No ENEM, matrizes aparecem mais em contexto aplicado (tabelas de dados)." }
            ]
          }
        ]
      }
    ]
  }
];

// Helper to count total subjects
export function countSubjects(areas: Area[]): number {
  return areas.reduce((acc, area) =>
    acc + area.disciplines.reduce((dacc, disc) =>
      dacc + disc.subjects.length, 0), 0);
}
