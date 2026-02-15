export interface Resource {
  type: "site" | "video" | "tip";
  title?: string;
  url?: string;
  description: string;
}

export interface Subject {
  id: string;
  name: string;
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
        name: "Língua Portuguesa",
        subjects: [
          {
            id: "interpretacao-texto", name: "Interpretação de Texto",
            resources: [
              { type: "site", title: "Brasil Escola - Interpretação", url: "https://brasilescola.uol.com.br/redacao/interpretacao-texto.htm", description: "Guia completo de interpretação textual" },
              { type: "video", title: "Descomplica - Interpretação de Texto", url: "https://www.youtube.com/results?search_query=interpretação+de+texto+enem+descomplica", description: "Aulas sobre interpretação de textos para o ENEM" },
              { type: "tip", description: "Leia o texto inteiro antes de responder. Identifique a ideia central e os argumentos de apoio." }
            ]
          },
          {
            id: "gramatica", name: "Gramática",
            resources: [
              { type: "site", title: "Toda Matéria - Gramática", url: "https://www.todamateria.com.br/gramatica/", description: "Resumos de gramática" },
              { type: "video", title: "Professor Noslen - Gramática", url: "https://www.youtube.com/results?search_query=gramática+enem+professor+noslen", description: "Aulas de gramática para ENEM" },
              { type: "tip", description: "Foque em concordância verbal/nominal, regência e crase - temas mais cobrados." }
            ]
          },
          {
            id: "figuras-linguagem", name: "Figuras de Linguagem",
            resources: [
              { type: "site", title: "Brasil Escola - Figuras de Linguagem", url: "https://brasilescola.uol.com.br/gramatica/figuras-linguagem.htm", description: "Todas as figuras de linguagem explicadas" },
              { type: "video", title: "Descomplica - Figuras de Linguagem", url: "https://www.youtube.com/results?search_query=figuras+de+linguagem+enem", description: "Resumo das figuras mais cobradas" },
              { type: "tip", description: "Metáfora, metonímia, ironia e antítese são as mais frequentes no ENEM." }
            ]
          },
          {
            id: "generos-textuais", name: "Gêneros Textuais",
            resources: [
              { type: "site", title: "Toda Matéria - Gêneros Textuais", url: "https://www.todamateria.com.br/generos-textuais/", description: "Tipos e gêneros textuais" },
              { type: "video", title: "Gêneros Textuais ENEM", url: "https://www.youtube.com/results?search_query=gêneros+textuais+enem", description: "Aula completa sobre gêneros textuais" },
              { type: "tip", description: "Saiba diferenciar artigo de opinião, editorial, crônica, charge e tirinha." }
            ]
          },
          {
            id: "variacao-linguistica", name: "Variação Linguística",
            resources: [
              { type: "site", title: "Brasil Escola - Variação Linguística", url: "https://brasilescola.uol.com.br/gramatica/variacao-linguistica.htm", description: "Tipos de variação linguística" },
              { type: "video", title: "Variação Linguística ENEM", url: "https://www.youtube.com/results?search_query=variação+linguística+enem", description: "Como cai no ENEM" },
              { type: "tip", description: "Entenda que nenhuma variante é superior a outra. Adequação ao contexto é fundamental." }
            ]
          }
        ]
      },
      {
        id: "literatura",
        name: "Literatura",
        subjects: [
          {
            id: "escolas-literarias", name: "Escolas Literárias",
            resources: [
              { type: "site", title: "Toda Matéria - Escolas Literárias", url: "https://www.todamateria.com.br/escolas-literarias/", description: "Resumo de todas as escolas literárias" },
              { type: "video", title: "Se Liga Nessa História - Literatura", url: "https://www.youtube.com/results?search_query=escolas+literárias+enem", description: "Resumo das escolas literárias" },
              { type: "tip", description: "Foque em Modernismo, Romantismo e Realismo - mais cobrados no ENEM." }
            ]
          },
          {
            id: "obras-literarias", name: "Obras Literárias Brasileiras",
            resources: [
              { type: "site", title: "Passei Web - Obras", url: "https://www.passeiweb.com/estudos/livros/", description: "Resumo de obras literárias" },
              { type: "video", title: "Obras Literárias ENEM", url: "https://www.youtube.com/results?search_query=obras+literárias+enem+resumo", description: "Resumo das principais obras" },
              { type: "tip", description: "Leia pelo menos resumos de Machado de Assis, Clarice Lispector e Guimarães Rosa." }
            ]
          },
          {
            id: "poesia-prosa", name: "Poesia e Prosa",
            resources: [
              { type: "site", title: "Brasil Escola - Poesia", url: "https://brasilescola.uol.com.br/literatura/poesia.htm", description: "Diferença entre poesia e prosa" },
              { type: "video", title: "Poesia no ENEM", url: "https://www.youtube.com/results?search_query=poesia+prosa+enem", description: "Como interpretar poesia no ENEM" },
              { type: "tip", description: "No ENEM, poesia aparece muito. Pratique a leitura de poemas de diferentes épocas." }
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
              { type: "video", title: "Descomplica - Redação Nota 1000", url: "https://www.youtube.com/results?search_query=redação+nota+1000+enem", description: "Técnicas para redação nota 1000" },
              { type: "tip", description: "Estrutura: introdução com tese, 2 parágrafos de desenvolvimento com argumentos, conclusão com proposta de intervenção." }
            ]
          },
          {
            id: "proposta-intervencao", name: "Proposta de Intervenção",
            resources: [
              { type: "site", title: "G1 - Proposta de Intervenção", url: "https://g1.globo.com/educacao/enem/", description: "Dicas para proposta de intervenção" },
              { type: "video", title: "Proposta de Intervenção ENEM", url: "https://www.youtube.com/results?search_query=proposta+de+intervenção+enem", description: "Como fazer a proposta perfeita" },
              { type: "tip", description: "Inclua agente, ação, modo/meio, efeito e detalhamento na proposta de intervenção." }
            ]
          },
          {
            id: "competencias-redacao", name: "5 Competências da Redação",
            resources: [
              { type: "site", title: "INEP - Cartilha do Participante", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem", description: "Cartilha oficial do ENEM" },
              { type: "video", title: "5 Competências ENEM", url: "https://www.youtube.com/results?search_query=5+competências+redação+enem", description: "Entenda cada competência" },
              { type: "tip", description: "Competência 5 (proposta de intervenção) é a que mais reprova. Dedique atenção especial." }
            ]
          }
        ]
      },
      {
        id: "ingles",
        name: "Língua Inglesa",
        subjects: [
          {
            id: "interpretacao-ingles", name: "Interpretação de Textos em Inglês",
            resources: [
              { type: "site", title: "English Experts", url: "https://www.englishexperts.com.br/", description: "Dicas de inglês para ENEM" },
              { type: "video", title: "Inglês no ENEM", url: "https://www.youtube.com/results?search_query=inglês+enem+interpretação", description: "Técnicas de interpretação em inglês" },
              { type: "tip", description: "Não precisa traduzir tudo. Foque em palavras-chave e cognatos para entender o contexto." }
            ]
          },
          {
            id: "vocabulario-ingles", name: "Vocabulário e Cognatos",
            resources: [
              { type: "site", title: "Toda Matéria - Cognatos", url: "https://www.todamateria.com.br/cognatos/", description: "Lista de cognatos" },
              { type: "video", title: "Cognatos e Falsos Cognatos", url: "https://www.youtube.com/results?search_query=cognatos+falsos+cognatos+enem", description: "Diferença entre cognatos e falsos cognatos" },
              { type: "tip", description: "Cognatos são seus amigos na prova! Mas cuidado com os falsos cognatos." }
            ]
          }
        ]
      },
      {
        id: "artes",
        name: "Artes",
        subjects: [
          {
            id: "movimentos-artisticos", name: "Movimentos Artísticos",
            resources: [
              { type: "site", title: "História das Artes", url: "https://www.historiadasartes.com/", description: "Portal de história da arte" },
              { type: "video", title: "Artes no ENEM", url: "https://www.youtube.com/results?search_query=artes+enem+movimentos+artísticos", description: "Movimentos artísticos cobrados" },
              { type: "tip", description: "Modernismo, Renascimento e Arte Contemporânea são os mais cobrados." }
            ]
          },
          {
            id: "musica-danca", name: "Música e Dança",
            resources: [
              { type: "site", title: "Brasil Escola - Artes", url: "https://brasilescola.uol.com.br/artes/", description: "Música e dança no contexto cultural" },
              { type: "video", title: "Cultura e Artes ENEM", url: "https://www.youtube.com/results?search_query=música+dança+cultura+enem", description: "Questões de artes no ENEM" },
              { type: "tip", description: "Relate manifestações artísticas ao contexto histórico e social brasileiro." }
            ]
          }
        ]
      },
      {
        id: "educacao-fisica",
        name: "Educação Física",
        subjects: [
          {
            id: "esportes-saude", name: "Esportes e Saúde",
            resources: [
              { type: "site", title: "Brasil Escola - Ed. Física", url: "https://brasilescola.uol.com.br/educacao-fisica/", description: "Conteúdos de educação física" },
              { type: "video", title: "Ed. Física no ENEM", url: "https://www.youtube.com/results?search_query=educação+física+enem", description: "Temas de ed. física no ENEM" },
              { type: "tip", description: "Foque na relação entre exercício, saúde pública e qualidade de vida." }
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
            id: "brasil-colonia", name: "Brasil Colônia",
            resources: [
              { type: "site", title: "Brasil Escola - Brasil Colônia", url: "https://brasilescola.uol.com.br/historiab/brasil-colonial.htm", description: "Período colonial brasileiro" },
              { type: "video", title: "Brasil Colônia - Descomplica", url: "https://www.youtube.com/results?search_query=brasil+colônia+enem", description: "Resumo do período colonial" },
              { type: "tip", description: "Entenda o sistema de capitanias, escravidão e economia açucareira." }
            ]
          },
          {
            id: "brasil-imperio", name: "Brasil Império",
            resources: [
              { type: "site", title: "Toda Matéria - Brasil Império", url: "https://www.todamateria.com.br/brasil-imperio/", description: "Do primeiro ao segundo reinado" },
              { type: "video", title: "Brasil Império ENEM", url: "https://www.youtube.com/results?search_query=brasil+império+enem", description: "Período imperial no ENEM" },
              { type: "tip", description: "Independência, Primeiro Reinado, Regência e Segundo Reinado são essenciais." }
            ]
          },
          {
            id: "brasil-republica", name: "Brasil República",
            resources: [
              { type: "site", title: "Brasil Escola - República", url: "https://brasilescola.uol.com.br/historiab/republica.htm", description: "Era republicana brasileira" },
              { type: "video", title: "República Brasileira ENEM", url: "https://www.youtube.com/results?search_query=brasil+república+enem", description: "Da Velha República até hoje" },
              { type: "tip", description: "Era Vargas, Ditadura Militar e Redemocratização são muito cobrados." }
            ]
          },
          {
            id: "idade-media", name: "Idade Média",
            resources: [
              { type: "site", title: "Toda Matéria - Idade Média", url: "https://www.todamateria.com.br/idade-media/", description: "Feudalismo e sociedade medieval" },
              { type: "video", title: "Idade Média ENEM", url: "https://www.youtube.com/results?search_query=idade+média+enem", description: "Resumo da Idade Média" },
              { type: "tip", description: "Feudalismo, Cruzadas e o papel da Igreja são pontos centrais." }
            ]
          },
          {
            id: "revolucoes", name: "Revoluções (Francesa, Industrial, Russa)",
            resources: [
              { type: "site", title: "Brasil Escola - Revoluções", url: "https://brasilescola.uol.com.br/historiag/revolucao-francesa.htm", description: "As grandes revoluções" },
              { type: "video", title: "Revoluções ENEM", url: "https://www.youtube.com/results?search_query=revoluções+francesa+industrial+russa+enem", description: "Resumo das revoluções" },
              { type: "tip", description: "Compare causas e consequências das três revoluções - cai sempre!" }
            ]
          },
          {
            id: "guerras-mundiais", name: "Guerras Mundiais e Guerra Fria",
            resources: [
              { type: "site", title: "Toda Matéria - Guerras", url: "https://www.todamateria.com.br/primeira-guerra-mundial/", description: "Conflitos mundiais do séc. XX" },
              { type: "video", title: "Guerras Mundiais ENEM", url: "https://www.youtube.com/results?search_query=guerras+mundiais+guerra+fria+enem", description: "Os conflitos no ENEM" },
              { type: "tip", description: "Foque nas causas, alianças e consequências. Guerra Fria é tema frequente." }
            ]
          },
          {
            id: "escravidao-africa", name: "Escravidão e História da África",
            resources: [
              { type: "site", title: "Brasil Escola - Escravidão", url: "https://brasilescola.uol.com.br/historiab/escravidao-no-brasil.htm", description: "Escravidão no Brasil" },
              { type: "video", title: "Escravidão e África ENEM", url: "https://www.youtube.com/results?search_query=escravidão+história+africa+enem", description: "História africana no ENEM" },
              { type: "tip", description: "Tema recorrente no ENEM. Estude tráfico negreiro, resistência e quilombos." }
            ]
          }
        ]
      },
      {
        id: "geografia",
        name: "Geografia",
        subjects: [
          {
            id: "urbanizacao", name: "Urbanização",
            resources: [
              { type: "site", title: "Brasil Escola - Urbanização", url: "https://brasilescola.uol.com.br/geografia/urbanizacao.htm", description: "Processo de urbanização" },
              { type: "video", title: "Urbanização ENEM", url: "https://www.youtube.com/results?search_query=urbanização+enem", description: "Urbanização no ENEM" },
              { type: "tip", description: "Relacione urbanização com problemas sociais, ambientais e mobilidade urbana." }
            ]
          },
          {
            id: "meio-ambiente", name: "Meio Ambiente e Sustentabilidade",
            resources: [
              { type: "site", title: "Brasil Escola - Meio Ambiente", url: "https://brasilescola.uol.com.br/geografia/meio-ambiente.htm", description: "Questões ambientais" },
              { type: "video", title: "Meio Ambiente ENEM", url: "https://www.youtube.com/results?search_query=meio+ambiente+sustentabilidade+enem", description: "Questões ambientais no ENEM" },
              { type: "tip", description: "Desmatamento, aquecimento global e acordos climáticos são frequentes." }
            ]
          },
          {
            id: "geopolitica", name: "Geopolítica Mundial",
            resources: [
              { type: "site", title: "Toda Matéria - Geopolítica", url: "https://www.todamateria.com.br/geopolitica/", description: "Relações de poder mundial" },
              { type: "video", title: "Geopolítica ENEM", url: "https://www.youtube.com/results?search_query=geopolítica+enem", description: "Temas geopolíticos no ENEM" },
              { type: "tip", description: "Acompanhe conflitos atuais e relações internacionais." }
            ]
          },
          {
            id: "climatologia", name: "Climatologia",
            resources: [
              { type: "site", title: "Brasil Escola - Clima", url: "https://brasilescola.uol.com.br/geografia/clima.htm", description: "Climas do Brasil e do mundo" },
              { type: "video", title: "Climatologia ENEM", url: "https://www.youtube.com/results?search_query=climatologia+enem", description: "Climas no ENEM" },
              { type: "tip", description: "Saiba identificar climogramas e relacionar clima com vegetação." }
            ]
          },
          {
            id: "cartografia", name: "Cartografia",
            resources: [
              { type: "site", title: "Brasil Escola - Cartografia", url: "https://brasilescola.uol.com.br/geografia/cartografia.htm", description: "Elementos de cartografia" },
              { type: "video", title: "Cartografia ENEM", url: "https://www.youtube.com/results?search_query=cartografia+enem", description: "Leitura de mapas no ENEM" },
              { type: "tip", description: "Pratique leitura de mapas, escalas e projeções cartográficas." }
            ]
          },
          {
            id: "agropecuaria", name: "Agropecuária e Questão Agrária",
            resources: [
              { type: "site", title: "Brasil Escola - Agropecuária", url: "https://brasilescola.uol.com.br/geografia/agropecuaria.htm", description: "Agricultura e pecuária no Brasil" },
              { type: "video", title: "Agropecuária ENEM", url: "https://www.youtube.com/results?search_query=agropecuária+questão+agrária+enem", description: "Agronegócio e reforma agrária" },
              { type: "tip", description: "Entenda agronegócio x agricultura familiar e conflitos por terra." }
            ]
          }
        ]
      },
      {
        id: "filosofia",
        name: "Filosofia",
        subjects: [
          {
            id: "filosofia-antiga", name: "Filosofia Antiga (Sócrates, Platão, Aristóteles)",
            resources: [
              { type: "site", title: "Brasil Escola - Filosofia Antiga", url: "https://brasilescola.uol.com.br/filosofia/filosofia-antiga.htm", description: "Os filósofos gregos" },
              { type: "video", title: "Filosofia Antiga ENEM", url: "https://www.youtube.com/results?search_query=filosofia+antiga+enem+sócrates+platão", description: "Resumo de filosofia antiga" },
              { type: "tip", description: "Sócrates (maiêutica), Platão (mundo das ideias), Aristóteles (lógica) são essenciais." }
            ]
          },
          {
            id: "iluminismo", name: "Iluminismo e Contratualismo",
            resources: [
              { type: "site", title: "Toda Matéria - Iluminismo", url: "https://www.todamateria.com.br/iluminismo/", description: "O Século das Luzes" },
              { type: "video", title: "Iluminismo ENEM", url: "https://www.youtube.com/results?search_query=iluminismo+contratualismo+enem", description: "Pensadores iluministas" },
              { type: "tip", description: "Locke, Rousseau e Montesquieu são os mais cobrados no ENEM." }
            ]
          },
          {
            id: "etica-politica", name: "Ética e Filosofia Política",
            resources: [
              { type: "site", title: "Brasil Escola - Ética", url: "https://brasilescola.uol.com.br/filosofia/etica.htm", description: "Fundamentos da ética" },
              { type: "video", title: "Ética no ENEM", url: "https://www.youtube.com/results?search_query=ética+filosofia+política+enem", description: "Ética e política no ENEM" },
              { type: "tip", description: "Relacione conceitos filosóficos com questões contemporâneas de cidadania." }
            ]
          },
          {
            id: "existencialismo", name: "Existencialismo e Filosofia Moderna",
            resources: [
              { type: "site", title: "Toda Matéria - Existencialismo", url: "https://www.todamateria.com.br/existencialismo/", description: "Sartre e o existencialismo" },
              { type: "video", title: "Filosofia Moderna ENEM", url: "https://www.youtube.com/results?search_query=existencialismo+filosofia+moderna+enem", description: "Descartes, Kant e Sartre" },
              { type: "tip", description: "Descartes (dúvida metódica), Kant (imperativo categórico), Sartre (liberdade)." }
            ]
          }
        ]
      },
      {
        id: "sociologia",
        name: "Sociologia",
        subjects: [
          {
            id: "sociologos-classicos", name: "Sociólogos Clássicos (Durkheim, Weber, Marx)",
            resources: [
              { type: "site", title: "Brasil Escola - Sociologia", url: "https://brasilescola.uol.com.br/sociologia/", description: "Fundadores da sociologia" },
              { type: "video", title: "Sociologia Clássica ENEM", url: "https://www.youtube.com/results?search_query=durkheim+weber+marx+enem", description: "Os três clássicos" },
              { type: "tip", description: "Durkheim (fato social), Weber (ação social), Marx (luta de classes) - compare os três!" }
            ]
          },
          {
            id: "movimentos-sociais", name: "Movimentos Sociais",
            resources: [
              { type: "site", title: "Brasil Escola - Movimentos Sociais", url: "https://brasilescola.uol.com.br/sociologia/movimentos-sociais.htm", description: "Tipos de movimentos sociais" },
              { type: "video", title: "Movimentos Sociais ENEM", url: "https://www.youtube.com/results?search_query=movimentos+sociais+enem", description: "Movimentos sociais no ENEM" },
              { type: "tip", description: "Feminismo, movimento negro e movimentos ambientalistas são frequentes no ENEM." }
            ]
          },
          {
            id: "cultura-industria", name: "Cultura e Indústria Cultural",
            resources: [
              { type: "site", title: "Brasil Escola - Indústria Cultural", url: "https://brasilescola.uol.com.br/sociologia/industria-cultural.htm", description: "Conceito de Adorno e Horkheimer" },
              { type: "video", title: "Indústria Cultural ENEM", url: "https://www.youtube.com/results?search_query=indústria+cultural+enem", description: "Escola de Frankfurt no ENEM" },
              { type: "tip", description: "Entenda a diferença entre cultura de massa e cultura popular." }
            ]
          },
          {
            id: "desigualdade-social", name: "Desigualdade Social",
            resources: [
              { type: "site", title: "Toda Matéria - Desigualdade", url: "https://www.todamateria.com.br/desigualdade-social/", description: "Causas e consequências" },
              { type: "video", title: "Desigualdade Social ENEM", url: "https://www.youtube.com/results?search_query=desigualdade+social+enem", description: "Tema recorrente no ENEM" },
              { type: "tip", description: "Relacione com dados do IBGE e índice de Gini." }
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
              { type: "tip", description: "Saiba interpretar gráficos de funções - é mais importante que decorar fórmulas." }
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
