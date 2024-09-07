let dados = [
    {
        nome: "Messi",
        descricao: "Lionel Messi é, sem dúvida, um dos maiores jogadores de futebol de todos os tempos. Sua habilidade técnica, dribles impecáveis, visão de jogo e capacidade de definir jogadas o colocaram em um pedestal único no mundo do esporte.",
        link: "https://pt.wikipedia.org/wiki/Lionel_Messi",
        detalhes: "Jogador de Futebol | Masculino | Argentino | Clubes: Barcelona, Paris Saint-Germain | Prêmios: 7 Ballon d'Or"
    },
    {
        nome: "CR7",
        descricao: "Cristiano Ronaldo é um dos maiores artilheiros da história do futebol e um ícone do esporte. Sua determinação, força física e habilidade técnica o levaram a conquistar diversos títulos e prêmios individuais. Ronaldo é conhecido por sua paixão pelo futebol e sua busca constante por superação.",
        link: "https://pt.wikipedia.org/wiki/Cristiano_Ronaldo",
        detalhes: "Jogador de Futebol | Masculino | Português | Clubes: Manchester United, Real Madrid, Juventus | Prêmios: 5 Ballon d'Or"
    },
    {
        nome: "Neymar",
        descricao: "Neymar Jr. é um dos jogadores de futebol mais talentosos e conhecidos da atualidade. Sua habilidade com a bola, dribles rápidos e visão de jogo o tornam um dos atletas mais admirados do mundo. Conhecido por sua alegria dentro e fora de campo, Neymar conquistou diversos títulos e prêmios ao longo de sua carreira.",
        link: "https://pt.wikipedia.org/wiki/Neymar",
        detalhes: "Jogador de Futebol | Masculino | Brasileiro | Clubes: Santos, Barcelona, Paris Saint-Germain | Prêmios: Melhor Jogador da América do Sul"
    },
    {
        nome: "Kylian Mbappé",
        descricao: "Kylian Mbappé é um jovem prodígio do futebol francês. Com sua velocidade impressionante e habilidades técnicas, ele se tornou um dos jogadores mais valiosos e promissores da atualidade.",
        link: "https://pt.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
        detalhes: "Jogador de Futebol | Masculino | Francês | Clube: Paris Saint-Germain | Prêmios: Melhor Jovem Jogador da FIFA"
    },
    {
        nome: "Virgil van Dijk",
        descricao: "Virgil van Dijk é um defensor central holandês conhecido por sua força física e habilidades defensivas. Ele é amplamente considerado um dos melhores zagueiros do mundo.",
        link: "https://pt.wikipedia.org/wiki/Virgil_van_Dijk",
        detalhes: "Jogador de Futebol | Masculino | Holandês | Clube: Liverpool | Prêmios: Melhor Jogador da UEFA"
    },
    {
        nome: "Robert Lewandowski",
        descricao: "Robert Lewandowski é um atacante polonês famoso por sua habilidade em marcar gols e sua consistência ao longo dos anos. Ele é um dos melhores artilheiros da Europa.",
        link: "https://pt.wikipedia.org/wiki/Robert_Lewandowski",
        detalhes: "Jogador de Futebol | Masculino | Polonês | Clubes: Borussia Dortmund, Bayern de Munique | Prêmios: Melhor Jogador da FIFA"
    },
    {
        nome: "Luka Modrić",
        descricao: "Luka Modrić é um meio-campista croata conhecido por sua visão de jogo e habilidades de passe. Ele ganhou o prêmio Ballon d'Or em 2018 por suas performances excepcionais.",
        link: "https://pt.wikipedia.org/wiki/Luka_Modri%C4%87",
        detalhes: "Jogador de Futebol | Masculino | Croata | Clube: Real Madrid | Prêmios: Ballon d'Or 2018"
    },
    {
        nome: "Paul Pogba",
        descricao: "Paul Pogba é um meio-campista francês conhecido por sua força física, habilidade técnica e versatilidade em campo. Ele foi uma parte fundamental da equipe vencedora da Copa do Mundo de 2018.",
        link: "https://pt.wikipedia.org/wiki/Paul_Pogba",
        detalhes: "Jogador de Futebol | Masculino | Francês | Clubes: Juventus, Manchester United | Prêmios: Campeão da Copa do Mundo 2018"
    },
    {
        nome: "Sergio Ramos",
        descricao: "Sergio Ramos é um defensor espanhol conhecido por sua liderança e habilidades defensivas. Ele teve uma carreira de sucesso tanto no Real Madrid quanto na seleção espanhola.",
        link: "https://pt.wikipedia.org/wiki/Sergio_Ramos",
        detalhes: "Jogador de Futebol | Masculino | Espanhol | Clubes: Real Madrid, Paris Saint-Germain | Prêmios: 4 Champions League"
    },
    {
        nome: "Gareth Bale",
        descricao: "Gareth Bale é um atacante galês conhecido por sua velocidade e habilidades em dribles. Ele teve sucesso tanto em clubes quanto na seleção nacional do País de Gales.",
        link: "https://pt.wikipedia.org/wiki/Gareth_Bale",
        detalhes: "Jogador de Futebol | Masculino | Galês | Clubes: Tottenham, Real Madrid | Prêmios: 5 Champions League"
    },
    {
        nome: "Andrés Iniesta",
        descricao: "Andrés Iniesta é um meio-campista espanhol conhecido por sua visão de jogo e habilidade em controlar o meio-campo. Ele foi uma peça chave na equipe do Barcelona e na seleção espanhola.",
        link: "https://pt.wikipedia.org/wiki/Andr%C3%A9s_Iniesta",
        detalhes: "Jogador de Futebol | Masculino | Espanhol | Clubes: Barcelona, Vissel Kobe | Prêmios: 4 Champions League"
    },
    {
        nome: "Xavi Hernández",
        descricao: "Xavi Hernández é um meio-campista espanhol conhecido por sua técnica e habilidade em distribuir o jogo. Ele foi um dos melhores jogadores do Barcelona e da seleção espanhola.",
        link: "https://pt.wikipedia.org/wiki/Xavi_Hern%C3%A1ndez",
        detalhes: "Jogador de Futebol | Masculino | Espanhol | Clubes: Barcelona, Al-Sadd | Prêmios: 4 Champions League"
    },
    {
        nome: "Zlatan Ibrahimović",
        descricao: "Zlatan Ibrahimović é um atacante sueco conhecido por sua presença física e habilidades técnicas excepcionais. Ele teve uma carreira notável em vários clubes de elite ao redor do mundo.",
        link: "https://pt.wikipedia.org/wiki/Zlatan_Ibrahimovi%C4%87",
        detalhes: "Jogador de Futebol | Masculino | Sueco | Clubes: Barcelona, Paris Saint-Germain, Milan | Prêmios: Melhor Jogador da Liga Francesa"
    },
    {
        nome: "Edinson Cavani",
        descricao: "Edinson Cavani é um atacante uruguaio conhecido por sua capacidade de marcar gols e seu trabalho incansável em campo. Ele tem uma carreira de sucesso em clubes europeus.",
        link: "https://pt.wikipedia.org/wiki/Edinson_Cavani",
        detalhes: "Jogador de Futebol | Masculino | Uruguaio | Clubes: Napoli, Paris Saint-Germain, Manchester United | Prêmios: Artilheiro da Ligue 1"
    },
    {
        nome: "Manuel Neuer",
        descricao: "Manuel Neuer é um goleiro alemão conhecido por suas habilidades excepcionais e por ser um dos melhores goleiros do mundo. Ele foi uma parte fundamental da seleção alemã e do Bayern de Munique.",
        link: "https://pt.wikipedia.org/wiki/Manuel_Neuer",
        detalhes: "Jogador de Futebol | Masculino | Alemão | Clube: Bayern de Munique | Prêmios: Melhor Goleiro da FIFA"
    },
    {
        nome: "Marc-André ter Stegen",
        descricao: "Marc-André ter Stegen é um goleiro alemão conhecido por suas habilidades com os pés e suas defesas impressionantes. Ele é um dos melhores goleiros da atualidade.",
        link: "https://pt.wikipedia.org/wiki/Marc-Andr%C3%A9_ter_Stegen",
        detalhes: "Jogador de Futebol | Masculino | Alemão | Clube: Barcelona | Prêmios: Melhor Goleiro da Liga Espanhola"
    },
    {
        nome: "Kaka",
        descricao: "Kaka é um meio-campista brasileiro que brilhou no Milan e na seleção brasileira. Conhecido por sua visão de jogo e habilidades ofensivas, ele ganhou o Ballon d'Or em 2007.",
        link: "https://pt.wikipedia.org/wiki/Kak%C3%A1",
        detalhes: "Jogador de Futebol | Masculino | Brasileiro | Clubes: Milan, Real Madrid | Prêmios: Ballon d'Or 2007"
    },
    {
        nome: "Roberto Carlos",
        descricao: "Roberto Carlos é um lateral-esquerdo brasileiro conhecido por sua velocidade e habilidade em cobranças de falta. Ele teve uma carreira de sucesso tanto no Real Madrid quanto na seleção brasileira.",
        link: "https://pt.wikipedia.org/wiki/Roberto_Carlos",
        detalhes: "Jogador de Futebol | Masculino | Brasileiro | Clubes: Real Madrid, Corinthians | Prêmios: 3 Champions League"
    },
    {
        nome: "Thierry Henry",
        descricao: "Thierry Henry é um atacante francês que teve sucesso no Arsenal e na seleção francesa. Conhecido por sua velocidade e habilidades de finalização, ele é um dos maiores atacantes da sua geração.",
        link: "https://pt.wikipedia.org/wiki/Thierry_Henry",
        detalhes: "Jogador de Futebol | Masculino | Francês | Clubes: Arsenal, Barcelona | Prêmios: Campeão da Copa do Mundo 1998"
    },
    {
        nome: "Dennis Bergkamp",
        descricao: "Dennis Bergkamp é um atacante holandês conhecido por sua criatividade e habilidades técnicas. Ele teve uma carreira de sucesso no Arsenal e na seleção holandesa.",
        link: "https://pt.wikipedia.org/wiki/Dennis_Bergkamp",
        detalhes: "Jogador de Futebol | Masculino | Holandês | Clubes: Ajax, Arsenal | Prêmios: Melhor Jogador da Eredivisie"
    },
    {
        nome: "George Best",
        descricao: "George Best foi um atacante norte-irlandês conhecido por sua habilidade e estilo de jogo flamboyant. Ele é considerado um dos maiores jogadores da história do Manchester United.",
        link: "https://pt.wikipedia.org/wiki/George_Best",
        detalhes: "Jogador de Futebol | Masculino | Norte-Irlandês | Clube: Manchester United | Prêmios: Melhor Jogador da PFA"
    },
    {
        nome: "Diego Maradona",
        descricao: "Diego Maradona foi um dos maiores jogadores de futebol da história. Conhecido por suas habilidades extraordinárias e pelo 'Gol do Século', ele é uma lenda do esporte.",
        link: "https://pt.wikipedia.org/wiki/Diego_Maradona",
        detalhes: "Jogador de Futebol | Masculino | Argentino | Clubes: Napoli, Barcelona | Prêmios: Campeão da Copa do Mundo 1986"
    },
        {
        nome: "Pelé",
        descricao: "Pelé é amplamente considerado um dos maiores jogadores de futebol de todos os tempos. Sua habilidade, técnica e visão de jogo revolucionaram o esporte. Ele é o único jogador a vencer três Copas do Mundo e tem uma carreira cheia de conquistas e recordes.",
        link: "https://pt.wikipedia.org/wiki/Pel%C3%A9",
        detalhes: "Jogador de Futebol | Masculino | Brasileiro | Clubes: Santos, New York Cosmos | Prêmios: 3 Copas do Mundo (1958, 1962, 1970)"
    },
    {
        nome: "Dede",
        descricao: "Dede é um dos maiores zagueiros da história do futebol brasileiro, conhecido por sua habilidade defensiva e por ter sido uma peça fundamental no Vasco da Gama. Ele foi um dos grandes nomes do futebol brasileiro nas décadas de 1950 e 1960.",
        link: "https://pt.wikipedia.org/wiki/Dede_(futebolista)",
        detalhes: "Jogador de Futebol | Masculino | Brasileiro | Clube: Vasco da Gama | Prêmios: Campeão da Copa Libertadores (1956, 1958) e Campeão Brasileiro (1958)"
    }
];
