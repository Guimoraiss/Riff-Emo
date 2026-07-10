// Catálogo editável da Riff Emo.
// Altere aqui nomes, preços, descrições, tamanhos, imagens e dados das bandas.
const bands = [
  {
    "id": "my-chemical-romance",
    "name": "My Chemical Romance",
    "short": "MCR",
    "accent": "#b92b35",
    "dark": "#151111",
    "mood": "emo teatral, preto gasto e vermelho profundo",
    "source": "Loja oficial My Chemical Romance / Warner Records",
    "sourceUrl": "https://mychemicalromance.warnerrecords.com/",
    "hero": "https://cdn.shopify.com/s/files/1/0597/5402/1052/files/The_FabulousKillyjoysHoodie-FRONT.png?v=1778775842",
    "editorial": "https://cdn.shopify.com/s/files/1/0597/5402/1052/files/1.AftermathPulloverHoodie-FRONT.png?v=1778683178",
    "categories": [
      "Camisetas",
      "Moletons"
    ],
    "detail": "Uma seleção de apparel oficial com cara de arquivo de turnê: moletons gráficos, camisetas escuras e peças que funcionam fora do show.",
    "products": [
      {
        "id": "together-we-march-zip-hoodie",
        "name": "Together We March Zip Hoodie",
        "type": "Moletons",
        "price": 389,
        "tag": "peça de capa",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Moletom preto com zíper frontal, capuz e faixas gráficas de efeito desgastado atravessando o peito. A composição lembra um uniforme de parada reinterpretado pela estética teatral do MCR.",
        "image": "https://mychemicalromance.warnerrecords.com/cdn/shop/products/TogetherWeMarchZipHoodie.png?v=1771369068&width=1024"
      },
      {
        "id": "revenge-rosary-hoodie",
        "name": "Revenge Rosary Hoodie",
        "type": "Moletons",
        "price": 389,
        "tag": "drop recente",
        "color": "Preto",
        "fit": "Modelagem ampla",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Moletom preto de presença forte, construído em torno de um grafismo inspirado em rosário e na iconografia da era Revenge. A base escura deixa a arte assumir o protagonismo sem perder a usabilidade.",
        "image": "https://mychemicalromance.warnerrecords.com/cdn/shop/files/Rosaryhoodie.png?v=1744145134&width=1024"
      },
      {
        "id": "walk-this-world-alone-hoodie",
        "name": "Walk This World Alone Hoodie",
        "type": "Moletons",
        "price": 349,
        "tag": "camada chave",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Moletom preto com arte frontal de leitura direta e clima melancólico. É uma camada versátil para looks escuros, equilibrando referência de fã e aparência de peça gráfica independente.",
        "image": "https://mychemicalromance.warnerrecords.com/cdn/shop/files/1-WalkThisWorldHoodieFrt.png?v=1771367616&width=1024"
      },
      {
        "id": "rvng-rmxd-t-shirt",
        "name": "RVNG RMXD T-Shirt",
        "type": "Camisetas",
        "price": 219,
        "tag": "essencial",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta preta com composição gráfica remixada da fase Revenge. O contraste alto e a linguagem de pôster preservam a energia emo dos anos 2000 em uma peça fácil de combinar.",
        "image": "https://mychemicalromance.warnerrecords.com/cdn/shop/files/2-RvngRmxdfrt.png?v=1771368556&width=1024"
      },
      {
        "id": "lets-all-be-friends-juniors-t-shirt",
        "name": "Let's All Be Friends Juniors T-Shirt",
        "type": "Camisetas",
        "price": 189,
        "tag": "baby tee",
        "color": "Preto",
        "fit": "Modelagem ajustada",
        "sizes": [
          "PP",
          "P",
          "M",
          "G"
        ],
        "description": "Baby tee preta de proporção mais curta e ajustada, com estampa central bem definida. A silhueta compacta contrasta com o humor ácido do gráfico e traz uma leitura contemporânea do merch da banda.",
        "image": "https://mychemicalromance.warnerrecords.com/cdn/shop/products/MCR_Let_sAllBeFriends__1.png?v=1771369248&width=1024"
      },
      {
        "id": "praying-hands-distressed-t-shirt",
        "name": "Praying Hands Distressed T-Shirt",
        "type": "Camisetas",
        "price": 359,
        "tag": "estampa forte",
        "color": "Preto lavado",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta escura com mãos em oração e tratamento visual desgastado. A textura envelhecida aproxima a peça de um achado de arquivo de turnê, com impacto gráfico sem acabamento excessivamente novo.",
        "image": "https://mychemicalromance.warnerrecords.com/cdn/shop/products/mcr_prayinghandsdistressedtshirt.png?v=1635198707&width=1024"
      }
    ]
  },
  {
    "id": "bring-me-the-horizon",
    "name": "Bring Me The Horizon",
    "short": "BMTH",
    "accent": "#6f55ff",
    "dark": "#14131b",
    "mood": "metalcore digital, urbano e pesado",
    "source": "Loja oficial Bring Me The Horizon",
    "sourceUrl": "https://bringmethehorizonmerch.shop",
    "hero": "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---TTS-Embroidered-black-hoodie.png?v=1757505221",
    "editorial": "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---Scribbled-black-washed-t-shirt-front.png?v=1752139877",
    "categories": [
      "Camisetas",
      "Moletons"
    ],
    "detail": "Peças oficiais com estética de zine digital, gráficos grandes e preto lavado. A curadoria evita mídia física e foca só em roupa.",
    "products": [
      {
        "id": "goat-girl-t-shirt",
        "name": "Goat Girl T-Shirt",
        "type": "Camisetas",
        "price": 229,
        "tag": "gráfico forte",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta preta com ilustração central em branco e vermelho de uma figura segurando um crânio de bode. O lettering inferior fecha a composição com a agressividade visual da fase Count Your Blessings.",
        "image": "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/bmth-cyb-goat-girl-t-shirt-mock-up.png?v=1776072621"
      },
      {
        "id": "scribbled-washed-t-shirt",
        "name": "Scribbled Washed T-Shirt",
        "type": "Camisetas",
        "price": 219,
        "tag": "visual limpo",
        "color": "Preto lavado",
        "fit": "Modelagem ampla",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta preta lavada com assinatura rabiscada e interferência gráfica mínima. O acabamento desbotado dá profundidade à base e cria uma peça discreta dentro do universo visual mais pesado do BMTH.",
        "image": "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---Scribbled-black-washed-t-shirt-front.png?v=1752139877"
      },
      {
        "id": "one-body-one-soul-hoodie",
        "name": "One Body One Soul Hoodie",
        "type": "Moletons",
        "price": 389,
        "tag": "camada",
        "color": "Cinza mescla",
        "fit": "Modelagem ampla",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Moletom cinza mescla com mensagem frontal de espírito coletivo. A cor mais clara suaviza o peso do grafismo e funciona como contraponto aos produtos predominantemente pretos da coleção.",
        "image": "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---Together-heather-grey-hoodie-front.png?v=1763399399"
      },
      {
        "id": "tts-black-hoodie",
        "name": "TTS Black Hoodie",
        "type": "Moletons",
        "price": 399,
        "tag": "minimal",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Moletom preto com bordado pequeno e acabamento visual contido. É a opção mais minimalista da banda: reconhecível de perto, mas fácil de usar como camada principal em produções urbanas.",
        "image": "https://cdn.shopify.com/s/files/1/0501/3012/4960/files/BMTH---TTS-Embroidered-black-hoodie.png?v=1757505221"
      }
    ]
  },
  {
    "id": "paramore",
    "name": "Paramore",
    "short": "PMR",
    "accent": "#e25a3b",
    "dark": "#241715",
    "mood": "alt-pop quente, jovem e bem usável",
    "source": "Loja oficial Paramore / Bravado",
    "sourceUrl": "https://store.paramore.net/",
    "hero": "https://cdn.shopify.com/s/files/1/0895/5494/4287/files/ParamoreJacket_Front_3ea52c58-5c8a-4e16-8b56-1fcf1ac2aabf.png?v=1738247137",
    "editorial": "https://cdn.shopify.com/s/files/1/0895/5494/4287/files/PRODUCT_PARA_25_ECOMM_AWKIFSSTEE_IVRY.png?v=1753214672",
    "categories": [
      "Camisetas",
      "Moletons",
      "Long sleeves"
    ],
    "detail": "Curadoria de roupa oficial com energia pop-punk sem virar fantasia: camisetas, moletons e peças de manga longa para uso diário.",
    "products": [
      {
        "id": "our-kissing-spot-t-shirt",
        "name": "Our Kissing Spot T-Shirt",
        "type": "Camisetas",
        "price": 239,
        "tag": "indie leve",
        "color": "Marfim",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta marfim com arte frontal de aparência manual e clima afetivo. A base clara e o desenho leve criam uma peça de banda menos óbvia, ideal para combinações com jeans e tons naturais.",
        "image": "https://cdn.shopify.com/s/files/1/0895/5494/4287/files/PRODUCT_PARA_25_ECOMM_AWKIFSSTEE_IVRY.png?v=1753214672"
      },
      {
        "id": "cowboy-hayley-long-sleeve",
        "name": "Cowboy Hayley Long Sleeve",
        "type": "Long sleeves",
        "price": 249,
        "tag": "oversized",
        "color": "Claro",
        "fit": "Modelagem ampla",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta de manga longa com ilustração de Hayley em linguagem western e proporção ampla. O desenho mistura humor, arquivo de fã e estética de zine em uma peça pensada para sobreposição.",
        "image": "https://store.paramore.net/cdn/shop/files/PRODUCT_PARA_ILARIA_COWBOY_LSTEE.png?v=1738778316&width=800"
      },
      {
        "id": "paramore-vines-hoodie",
        "name": "Paramore Vines Hoodie",
        "type": "Moletons",
        "price": 219,
        "tag": "camada leve",
        "color": "Escuro",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Moletom de base escura com grafismo orgânico de ramos envolvendo a identidade da banda. A composição tem movimento, mas mantém leitura limpa para funcionar como peça cotidiana.",
        "image": "https://store.paramore.net/cdn/shop/files/PRODUCT_PARA_BRJ_VINES_HOODIE_1.png?v=1731355873&width=800"
      },
      {
        "id": "same-lesson-again-t-shirt",
        "name": "Same Lesson Again T-Shirt",
        "type": "Camisetas",
        "price": 219,
        "tag": "favorita",
        "color": "Escuro",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta gráfica de base escura com composição inspirada na frase Same Lesson Again. A arte tem energia de pôster independente e mantém o equilíbrio entre nostalgia pop-punk e uso diário.",
        "image": "https://store.paramore.net/cdn/shop/files/PRODUCT_PARA_24_ECOMM_FAN_ELANORA_SAMELESSON_SSTEE.png?v=1738778319&width=800"
      },
      {
        "id": "thick-skull-zine-long-sleeve",
        "name": "Thick Skull Zine Long Sleeve",
        "type": "Long sleeves",
        "price": 469,
        "tag": "peça de capa",
        "color": "Claro",
        "fit": "Modelagem ampla",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Long sleeve de linguagem editorial, com colagens e grafismos distribuídos como páginas de um zine. As mangas ampliam a narrativa visual e transformam a peça em ponto principal do look.",
        "image": "https://store.paramore.net/cdn/shop/files/PARA_ILARIA_ZINE_LS_1B.png?v=1731357211&width=800"
      },
      {
        "id": "thick-skull-van-crewneck",
        "name": "Thick Skull Van Crewneck",
        "type": "Moletons",
        "price": 189,
        "tag": "moletom",
        "color": "Escuro",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Crewneck com imagem de van e referência à fase Thick Skull. Sem capuz, a silhueta fica mais limpa e deixa a arte central assumir o papel de fotografia de estrada transformada em merch.",
        "image": "https://store.paramore.net/cdn/shop/files/PARA_ELANORA_VAN_CREW_1B.png?v=1731356353&width=800"
      }
    ]
  },
  {
    "id": "linkin-park",
    "name": "Linkin Park",
    "short": "LP",
    "accent": "#3f75d7",
    "dark": "#10151d",
    "mood": "nu metal gráfico, técnico e urbano",
    "source": "Loja oficial Linkin Park",
    "sourceUrl": "https://store.linkinpark.com/",
    "hero": "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP193A_PROJEKTREVOLUTIONLIVESTREAMTEEBCK.png?v=1774372641",
    "editorial": "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP249D_VINTAGEMETEORASPRAYYTHBLACKZIPHOODIE_B.png?v=1773356733",
    "categories": [
      "Camisetas",
      "Moletons"
    ],
    "detail": "Roupas oficiais com cara de arquivo de festival, logo forte e peças fáceis de combinar com denim, cargo e tênis preto.",
    "products": [
      {
        "id": "projekt-revolution-live-stream-tee",
        "name": "Projekt Revolution Live Stream Tee",
        "type": "Camisetas",
        "price": 229,
        "tag": "arquivo tour",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta preta com arte de arquivo inspirada na Projekt Revolution e composição de costas com linguagem de cartaz de festival. Uma peça de turnê com leitura gráfica e documental.",
        "image": "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP193A_PROJEKTREVOLUTIONLIVESTREAMTEEBCK.png?v=1774372641"
      },
      {
        "id": "from-zero-logo-youth-tee",
        "name": "From Zero Logo Youth Tee",
        "type": "Camisetas",
        "price": 199,
        "tag": "logo",
        "color": "Preto",
        "fit": "Modelagem juvenil",
        "sizes": [
          "PP",
          "P",
          "M",
          "G"
        ],
        "description": "Camiseta juvenil preta centrada no logo From Zero. A construção visual direta favorece quem busca uma identificação clara com a banda sem uma estampa excessivamente carregada.",
        "image": "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP1305A_FROMZEROLOGOYOUTHBLACKTEE.png?v=1773936683"
      },
      {
        "id": "meteora-spray-youth-tee",
        "name": "Meteora Spray Youth Tee",
        "type": "Camisetas",
        "price": 199,
        "tag": "clássico",
        "color": "Preto",
        "fit": "Modelagem juvenil",
        "sizes": [
          "PP",
          "P",
          "M",
          "G"
        ],
        "description": "Camiseta juvenil preta com logo Meteora tratado como pintura em spray. O acabamento remete aos muros, capas e texturas urbanas que marcaram a identidade visual do álbum.",
        "image": "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP249C_VINTAGEMETEORASPRAYBLACKYOUTHTEE_41134ac0-7007-4b16-b753-fd2214403191.png?v=1779917362"
      },
      {
        "id": "meteora-spray-zip-hoodie",
        "name": "Meteora Spray Zip Hoodie",
        "type": "Moletons",
        "price": 389,
        "tag": "camada",
        "color": "Preto",
        "fit": "Modelagem juvenil",
        "sizes": [
          "PP",
          "P",
          "M",
          "G"
        ],
        "description": "Moletom juvenil preto com zíper, logo discreto no peito e grande gráfico Meteora em efeito spray nas costas. A frente contida e o verso expressivo criam uma peça equilibrada em movimento.",
        "image": "https://cdn.shopify.com/s/files/1/2117/2713/files/LIP249D_VINTAGEMETEORASPRAYYTHBLACKZIPHOODIE_B.png?v=1773356733"
      }
    ]
  },
  {
    "id": "deftones",
    "name": "Deftones",
    "short": "DFT",
    "accent": "#6d8faa",
    "dark": "#101316",
    "mood": "escuro, atmosférico e minimalista",
    "source": "Loja oficial Deftones / Manhead",
    "sourceUrl": "https://shopdeftones.com/",
    "hero": "https://cdn.shopify.com/s/files/1/0614/0542/9974/files/deftones-x-dickies-black-hoodie-apparel-729.png?v=1762274787",
    "editorial": "https://cdn.shopify.com/s/files/1/0614/0542/9974/files/statue-t-shirt-apparel-264.png?v=1779662414",
    "categories": [
      "Camisetas",
      "Long sleeves"
    ],
    "detail": "Peças oficiais de clima frio, silhueta escura e gráfico controlado. A seleção favorece roupa que parece de brechó bom.",
    "products": [
      {
        "id": "statue-t-shirt",
        "name": "Statue T-Shirt",
        "type": "Camisetas",
        "price": 229,
        "tag": "drop recente",
        "color": "Branco",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta branca com imagem de estátua e atmosfera contemplativa. A base clara amplia o contraste da arte e traduz o lado etéreo do Deftones sem recorrer ao visual pesado tradicional.",
        "image": "https://cdn.shopify.com/s/files/1/0614/0542/9974/files/statue-t-shirt-apparel-264.png?v=1779662414"
      },
      {
        "id": "sphynx-t-shirt",
        "name": "Sphynx T-Shirt",
        "type": "Camisetas",
        "price": 229,
        "tag": "gráfico",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta preta com figura de esfinge em composição central. O símbolo clássico recebe uma leitura obscura e silenciosa, alinhada ao contraste entre peso e atmosfera característico da banda.",
        "image": "https://cdn.shopify.com/s/files/1/0614/0542/9974/files/sphynx-t-shirt-apparel-599.png?v=1773090970"
      },
      {
        "id": "private-music-tracklist-long-sleeve",
        "name": "Private Music Tracklist Long Sleeve",
        "type": "Long sleeves",
        "price": 239,
        "tag": "azul frio",
        "color": "Azul",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Long sleeve azul com referências à faixa e à tracklist de Private Music. O tom frio diferencia a peça do preto dominante e reforça a atmosfera noturna da coleção.",
        "image": "https://shopdeftones.com/cdn/shop/files/private-music-tracklist-long-sleeve-apparel-791.png?v=1777322427&width=823"
      },
      {
        "id": "roses-long-sleeve",
        "name": "Roses Long Sleeve",
        "type": "Long sleeves",
        "price": 399,
        "tag": "colab",
        "color": "Escuro",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Long sleeve escura com rosas distribuídas pela composição e contraste romântico. O floral quebra a rigidez da base e cria uma peça dramática sem abandonar a sobriedade da banda.",
        "image": "https://shopdeftones.com/cdn/shop/files/roses-long-sleeve-apparel-542.png?v=1758909160&width=823"
      },
      {
        "id": "ghosts-cream-t-shirt",
        "name": "Ghosts Cream T-Shirt",
        "type": "Camisetas",
        "price": 199,
        "tag": "creme",
        "color": "Creme",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta creme com arte fantasmagórica de baixo contraste. A paleta suavizada dá aparência de peça envelhecida e oferece uma alternativa clara sem perder o clima nebuloso do Deftones.",
        "image": "https://shopdeftones.com/cdn/shop/files/ghosts-cream-t-shirt-472.png?v=1755825491&width=823"
      },
      {
        "id": "wires-t-shirt",
        "name": "Wires T-Shirt",
        "type": "Camisetas",
        "price": 119,
        "tag": "detalhe",
        "color": "Escuro",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta escura com linhas e fios formando um gráfico técnico e tenso. A arte funciona de perto e mantém uma silhueta discreta à distância, coerente com o minimalismo atmosférico da coleção.",
        "image": "https://shopdeftones.com/cdn/shop/files/wires-t-shirt-apparel-618.png?v=1758909157&width=823"
      }
    ]
  },
  {
    "id": "slipknot",
    "name": "Slipknot",
    "short": "SK",
    "accent": "#9b2020",
    "dark": "#111111",
    "mood": "industrial agressivo, cinza e vermelho",
    "source": "Loja oficial Slipknot",
    "sourceUrl": "https://slipknotmerch.com/",
    "hero": "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_9_Point_Star_Black_Hoodie_1_FRONT.png?v=1770049348",
    "editorial": "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_Skull_Grey_TShirt_1_FRONT.png?v=1770049741",
    "categories": [
      "Camisetas",
      "Moletons",
      "Long sleeves"
    ],
    "detail": "Vestuário oficial pesado, com vermelho fechado e textura industrial. A curadoria separa as peças mais usáveis das mais colecionáveis.",
    "products": [
      {
        "id": "iowa-25-raised-2-tee",
        "name": "IOWA 25 Raised 2 Tee",
        "type": "Camisetas",
        "price": 229,
        "tag": "aniversário",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta preta comemorativa de IOWA, com composição elevada e imagética agressiva ligada ao aniversário do álbum. A arte ocupa o centro como um cartaz de arquivo recuperado.",
        "image": "https://cdn.shopify.com/s/files/1/1461/5290/files/raised2front.png?v=1782143803"
      },
      {
        "id": "skull-grey-t-shirt",
        "name": "Skull Grey T-Shirt",
        "type": "Camisetas",
        "price": 219,
        "tag": "cinza gasto",
        "color": "Cinza",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta cinza com crânio central e acabamento visual gasto. A paleta mineral reforça a estética industrial do Slipknot e cria uma alternativa mais texturizada ao preto absoluto.",
        "image": "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_Skull_Grey_TShirt_1_FRONT.png?v=1770049741"
      },
      {
        "id": "9-point-star-black-hoodie",
        "name": "9 Point Star Black Hoodie",
        "type": "Moletons",
        "price": 389,
        "tag": "peça forte",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Moletom preto com a estrela de nove pontas em destaque e identidade visual direta. O símbolo ocupa a peça como emblema, criando uma camada forte sem depender de excesso de elementos.",
        "image": "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_9_Point_Star_Black_Hoodie_1_FRONT.png?v=1770049348"
      },
      {
        "id": "barcode-grey-thermal",
        "name": "Barcode Grey Thermal",
        "type": "Long sleeves",
        "price": 279,
        "tag": "camada",
        "color": "Cinza",
        "fit": "Modelagem ajustada",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Peça térmica cinza de manga longa com código de barras e linguagem utilitária. A textura visual e a silhueta próxima ao corpo funcionam bem como primeira camada em produções escuras.",
        "image": "https://cdn.shopify.com/s/files/1/1461/5290/files/SLIPKNOT_Barcode_Grey_Thermal_1_FRONT_RESHOOT.png?v=1770049494"
      },
      {
        "id": "long-sleeve-tour-tee",
        "name": "Long Sleeve Tour Tee",
        "type": "Long sleeves",
        "price": 159,
        "tag": "arquivo tour",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Long sleeve preta com linguagem de camiseta de turnê e elementos distribuídos entre corpo e mangas. A construção tem aparência de lembrança de show preservada como peça de uso diário.",
        "image": "https://slipknotmerch.com/cdn/shop/files/LS-tee_03.png?v=1752849677&width=800"
      }
    ]
  },
  {
    "id": "arctic-monkeys",
    "name": "Arctic Monkeys",
    "short": "AM",
    "accent": "#a27649",
    "dark": "#191614",
    "mood": "indie britânico, editorial e noturno",
    "source": "Loja oficial Arctic Monkeys",
    "sourceUrl": "https://store.arcticmonkeys.com/",
    "hero": "https://cdn.shopify.com/s/files/1/0652/6491/0583/products/AMO016A-HOBLK-FRONT.png?v=1660289021",
    "editorial": "https://cdn.shopify.com/s/files/1/0652/6491/0583/files/Classic-Logo-Front_2.png?v=1698942099",
    "categories": [
      "Camisetas",
      "Moletons"
    ],
    "detail": "A parte mais indie da loja: logo discreto, camiseta de foto e moletom simples para um visual de show pequeno em bar escuro.",
    "products": [
      {
        "id": "arctic-monkeys-logo-hood",
        "name": "Arctic Monkeys Logo Hood",
        "type": "Moletons",
        "price": 379,
        "tag": "minimal",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Moletom preto com logo central em branco e composição direta. A ausência de elementos extras reforça o caráter britânico e minimalista da peça, pensada para atravessar temporadas.",
        "image": "https://cdn.shopify.com/s/files/1/0652/6491/0583/products/AMO016A-HOBLK-FRONT.png?v=1660289021"
      },
      {
        "id": "gold-logo-black-t-shirt",
        "name": "Gold Logo Black T-Shirt",
        "type": "Camisetas",
        "price": 219,
        "tag": "essencial",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta preta com o logo clássico em tom dourado. O contraste quente sobre a base escura adiciona presença sem perder a simplicidade, funcionando como o essencial da coleção.",
        "image": "https://cdn.shopify.com/s/files/1/0652/6491/0583/files/Classic-Logo-Front_2.png?v=1698942099"
      },
      {
        "id": "distorted-photo-tee",
        "name": "Distorted Photo Tee",
        "type": "Camisetas",
        "price": 229,
        "tag": "foto",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta preta com fotografia da banda tratada por distorção. O efeito transforma um registro promocional em imagem gráfica, com aparência de impressão encontrada em um zine independente.",
        "image": "https://cdn.shopify.com/s/files/1/0652/6491/0583/files/Photo-Tee.png?v=1694616367"
      },
      {
        "id": "band-photo-white-t-shirt",
        "name": "Band Photo White T-Shirt",
        "type": "Camisetas",
        "price": 229,
        "tag": "arquivo",
        "color": "Branco",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta branca com fotografia de arquivo da banda. A base clara cria leitura editorial e casual, como uma página de revista musical convertida em peça de guarda-roupa.",
        "image": "https://cdn.shopify.com/s/files/1/0652/6491/0583/files/Band-Photo.png?v=1687414955"
      },
      {
        "id": "ornate-logo-tee",
        "name": "Ornate Logo Tee",
        "type": "Camisetas",
        "price": 219,
        "tag": "clássica",
        "color": "Branco",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta clara com logo ornamentado e referências gráficas clássicas. O desenho decorativo contrasta com a modelagem simples e entrega uma leitura mais retrô do Arctic Monkeys.",
        "image": "https://cdn.shopify.com/s/files/1/0652/6491/0583/products/AMO013A-TSWHI.png?v=1660289142"
      }
    ]
  },
  {
    "id": "radiohead",
    "name": "Radiohead",
    "short": "RH",
    "accent": "#6d7357",
    "dark": "#171a15",
    "mood": "experimental, sóbrio e conceitual",
    "source": "W.A.S.T.E. Store oficial",
    "sourceUrl": "https://store-us.wasteheadquarters.com/",
    "hero": "https://cdn.shopify.com/s/files/1/1115/2236/files/Radiohead_MotionPictureHouseTee_Stacked.png?v=1777651404",
    "editorial": "https://cdn.shopify.com/s/files/1/1115/2236/files/Radiohead_MotionPictureHouse_WhiteTee_Stacked.png?v=1777651469",
    "categories": [
      "Camisetas"
    ],
    "detail": "Coleção reduzida e verificada: camisetas oficiais com estética de arquivo, arte conceitual e pouca interferência visual.",
    "products": [
      {
        "id": "motion-picture-house-black-t-shirt",
        "name": "Motion Picture House Black T-Shirt",
        "type": "Camisetas",
        "price": 229,
        "tag": "preta",
        "color": "Preto",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta preta com arte Motion Picture House em composição conceitual. A base escura concentra o contraste no gráfico e preserva o vocabulário visual enigmático do Radiohead.",
        "image": "https://cdn.shopify.com/s/files/1/1115/2236/files/Radiohead_MotionPictureHouseTee_Stacked.png?v=1777651404"
      },
      {
        "id": "motion-picture-house-white-t-shirt",
        "name": "Motion Picture House White T-Shirt",
        "type": "Camisetas",
        "price": 229,
        "tag": "branca",
        "color": "Branco",
        "fit": "Modelagem regular",
        "sizes": [
          "P",
          "M",
          "G",
          "GG"
        ],
        "description": "Camiseta branca com a mesma arte Motion Picture House em leitura mais aberta e editorial. O fundo claro evidencia as linhas e torna a peça a alternativa mais leve da coleção.",
        "image": "https://cdn.shopify.com/s/files/1/1115/2236/files/Radiohead_MotionPictureHouse_WhiteTee_Stacked.png?v=1777651469"
      }
    ]
  }
];
