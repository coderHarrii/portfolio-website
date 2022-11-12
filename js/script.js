$(function () {
    $(".br").click(function () {
        // Menu
        $(".abt").text("Sobre mim");
        $(".prt").text("Portfólio");
        $(".ctt").text("Contato");

        $("title").text("Currículo de Harrison");

        // Introducao
        $(".ccomp").text("Estudante de Ciência da Computação");

        // Sobre-mim
        $(".hey").text("Hey!");
        $(".hey-txt").text("Me chamo Harrison Caetano Cândido! u amo programar tanto quanto jogar basquete e aprender novas coisas! Sinta-se livre para entrar em contato ou dar uma olhada no meu trabalho abaixo.");

        // Portfolio
        // IMTRP
        $(".titulo-top-proj h2").text("Melhores Projetos");
        $(".IMTRP h4").text("Prototipo de Robô de Transporte de Materiais Industriais");
        $(".IMTRP p").text("O projeto desenvolvido por mim e mais dois amigos visava desenhar e construir um prototipo de um robô de transporte de materiais industriais, atendendo ao tema da SNCT de 2019.");

        // ADP
        $(".ADP h4").text("Análise de Dados da Covid 19");
        $(".ADP p").text("Este projeto visava visualizar a relação que a deseigualdade social teve com a pandemia de Covid 19 em um recorte de mais ou menor Maio de 2021, pior cenário no estado de São Paulo.");

        // SGI
        $(".SGI h4").text("Isolamento Socio-Geográfico");
        $(".SGI p").text("O projeto foi feito por mim juntamente de algumas colegas do meu curso técnico, visando atender ao tema da SNCT de 2018, baseado na Ciência para Redução das Desigualdades.");

        // CDA
        $(".CDA h4").text("Análise de Dados de Churn");
        $(".CDA p").text("Visando entender como os dados de Churn de uma empresa hipotética estavam distribuídos entre os clientes, foi utilizado das técnicas de Análise de Dados para que a equipe de vendas pudesse traçar estratégias que trouxessem vantagem competitiva no mercado.");

        $(".sombra-tprojects").text("Saiba mais"); // botão

        // Timeline
        $(".sp").text("09/2021 - Presente");
        $(".sc").text("Membro da SciTec Jr");
        $(".sch").text("Assessor do Núcleo de Computação/ Departamento Administrativo, Jurídico e Financeiro");
        $(".scp").text("Sou responsável por atividades de controle financeiro, administrativo e por facilidades jurídicas da empresa em todas as áreas. No núcleo de Computação, também sou responsável por atividades que atendam às necessidades do núcleo, ou seja, posso fazer atividades de gestão ou desenvolvedor em projetos.");

        $(".up").text("04/2021 - Presente");
        $(".un").text("Universidade");
        $(".unh").text("Graduação em Ciência da Computação");
        $(".unp").text("Entrei em Ciência da Computação pela Universidade Federal de São Paulo. Basicamente meu curso é dividido em 2 graduações, a primeira sendo um bacharel em Ciência & Tecnologia, com duração de 3 anos, e a segunda sendo Ciência da Computação propriamente dita, com duração de 1 ano após eu completar o BCT.");

        $(".t").text("Curso Técnico");
        $(".th").text("Técnico em Automação Industrial");
        $(".tp").text("Me formei no Instituto Federal de São Paulo no curso técnico de Automação Industrial, que é um dos principais motivos de eu decidir seguir para  a área de TI.");

        // Contato
        $(".name").text(" Nome");
        $(".message").text("Mensagem");
        $(".bt-forms").text("Enviar");

        // Formulario
        $(".titulo-contact h2").text("Contato");
        $(".contact h2").text("Formulário de Contato");
        $(".text-forms p").text("Se quiser conversar, por favor não exite em mandar uma mensagem, seria ótimo a gente :)");
        $(".contact h4").text("Redes sociais");

        // IMTRP
        $(".title-IMTRP").text("Protótipo de Robô de Transporte de Materiais Industriais - Currículo de Harrison");

        $(".title1").text("Protótipo de Robô de Transporte de Materiais Industriais");
        $(".ft-fonte").text("Fonte: Autoria própria");
        $(".txt1").text("O projeto teve como objetivo desenvolver um carrinho autônomo anticolisão e antiqueda por meio do uso de sensores controlados via arduino. Os sensores foram posicionados de forma a evitar que o robô entre em contato com obstáculos na direção do movimento, como paredes, e também de caindo de uma certa altitude, para uso logístico em indústrias, fazendo uma prototipagem de modelos modernos de veículos que não precisam de motorista.");

        $(".title2").text("Introdução");
        $(".txt2").text("Com a estabilização da Indústria 4.0 nos parques brasileiros e industriais internacionais, principalmente no setor secundário da economia, a otimização tornou-se necessária a todos os pilares industriais, que inclui o setor serviços logísticos terciários. A globalização torna o mercado e a indústria estão sempre procurando atender o cliente o mais rápido possível, rápida e eficientemente possível, mas para isso é necessário que o que está por trás da implementação desses serviços está fornecendo segurança e eficiência no que diz respeito funcionários, ou seja, o uso de equipamentos definitivo e cada vez melhor.\n\nSendo assim, o objetivo deste trabalho foi projetar e construir um carro que se move suavemente independente, e que consegue evitar obstáculos e que impedi-lo de cair em um buraco, fazendo um simulação simples de veículos independentes para uso industriais e elétricos de baixo custo. Além disso, a paródia de um veículo ainda não foi projetado alcança mesmo com suas limitações físicas e tecnologias, simular um carro autônomo industrial, atingir seus objetivos básicos de detectar, parar e evitar objeções imprevistas.");

        $(".title3").text("Desenvolvimento");
        $(".txt3").text("Durante o desenvolvimento do projeto, experimentos de software e hardware foram feitos no protótipo para uma melhor compreensão dos componentes utilizados, como o sensor ultrasônico. Nesse sentido, todo o hardware do carrinho foi primeira fase concluída, com um pico de dificuldade apenas em dúvida sobre a tomada de decisão do cargo dos sensores no chassi, o que favoreceria melhor a detecção de obstáculos ao redor do veículo, tendo concentrado nossos esforços na interseção da programação da ponte H L298N, o servo motor de 180° e os sensores ultrassônicos HC-SR04, pela plataforma Arduino.\n\nO desafio mais pertinente foi sincronizar entre a distância calculada pelo sensor, de modo que o espécime poderia desviar de obstáculos e a velocidade com o qual ele pararia os motores A e B, e faria o rotação anti-horária do mesmo com o micro-servo motor, sem ter um impacto muito forte com o barreiras.\n\nOutro problema foi ter que lidar com o peso do componentes, que poderia afetar o movimento do prototipo para o desvio de objetos indesejados. Uma questão analisada foi a da questão de problema de pilha, pois haviam muitos componentes conectados em uma única bateria, que é de 9V, consumindo muita eletricidade e limitando o uso do projeto em relação ao seu tempo ativo, sendo uma alternativa para uso de um powerbank, o que aumentaria o tempo ativo do carrinho, mas reduziria sua velocidade e potência. Além disso, também era difícil lidar com a questão de tempo, velocidade e altura, que criava perigo de impacto.");

        $(".title4").text("Resultados e Discussões");
        $(".txt4").text("No final de setembro de 2019 conseguimos concluir o protótipo com quase 100% de eficiência graças ao sensor horizontal, mesmo com baixo desempenho no sensor vertical, devido à falta de sincronização dos sensores ultrassônicos. Ainda assim, o robô pode simular um transportador de material industrial autônomo programável, que poderia ser utilizado em indústrias para facilidades logísticas, auxiliando no transporte de metais pesados, pessoas e prevenir acidentes que custariam a vida dos funcionários na área de trabalho.");

        $(".title5").text("Conclusão");
        $(".txt5").text("Apesar das dificuldades encontradas, principalmente aquelas relacionadas ao funcionamento simultâneo dos componentes, em particular da Ponte H com os sensores ultrassônicos, o projeto atingiu os objetivos teóricos pré-estabelecidos, que eram driblar objetos à sua frente e trabalhar de acordo com a programação do operador.");

        $(".title6").text("Código Fonte");

        $(".title7").text("Referências");

        // ADP
        $(".title-ADP").text("Análise de Dados da Covid 19 - Currículo de Harrison");

        $(".title11").text("O impacto da Desigualdade Social na pandemia de Covid 19\nno estado de São Paulo");
        $(".txt11").text("Buscando encontrar uma maneira de visualizar a relação que a desigualdade social teve com o cenário da pandemia de Covid 19 em um recorte de mais ou menor Maio de 2021, pior cenário no país e estado de São Paulo. A entrega final consistiu de 5 dashboards interativas, sendo elas Painel Geral, Rendimento, Analfabetismo, Saneamento e Desemprego.\n\nAs ferramentas usadas no projeto foram Microsoft Power BI (ferramenta excelente para análise de dados devido ao seu fácil uso, inclusive as fases de ETL do projeto foram feitas quase que exclusivamente na ferramenta) Google Planilhas, Notion e Miro, as duas últimas sendo mais relacionadas à parte de gestão. O projeto teve início em Outubro de 2021 e término no dia 4 de Fevereiro de 2022, aproximadamente 5 meses usando a metodologia SCRUM. A equipe era composta por mim e pelo Bruno, durante meu período Trainee na SciTec Jr.");

        $(".title21").text("Painel Geral");
        $(".txt21").text("O painel geral consiste de 4 visuais estatísticos, 3 filtros e 1 mapa, que demonstram a relação dos dados da Covid 19 com os de municípios de extrema pobreza e aglomerados subnormais, nos permitindo extrapolar o cenário geral do país.");

        $(".title31").text("Rendimento");
        $(".txt31").text("A dashboard de rendimento nos ajuda a visualizar a relação do rendimento mensal e de dados da Covid 19 por meio de 4 visuais estatísticos, 2 filtros e 1 mapa.");

        $(".title41").text("Analfabetismo");
        $(".txt41").text("Fiz então a dashboard de Analfabetismo, composta por 4 visuais estatísitco, 2 filtros e 1 mapa, que demonstram a relação da Covid 19 com dados do Censo de 2010.");

        $(".title51").text("Saneamento");
        $(".txt51").text("A dashboard de saneamento, por meio de 4 visuais estatísticos, 3 filtros e 1 mapa, nos traz insighs de como os dados gerais de saneamento, tais como população sem água, esgoto e coleta de lixo, se relacionam com dados da Covid 19.");

        $(".title61").text("Desemprego");
        $(".txt61").text("A dashboard de Desemprego, por meio de 4 visuais estatísticos, 3 filtros e 1 mapa, nos traz insights de como os dados de Covid 19 se relacionam com dados gerais de desemprego, tais como Admissões, Desligamentos e setores da economia.");

        // CDA
        $(".title-CDA").text("Análise de Dados de Churn - Currículo de Harrison");

        $(".title111").text("Análise de Dados de Churn");
        $(".txt111").text("A taxa de rotatividade, em seu sentido mais amplo, é uma medida do número de indivíduos ou itens que deixam um grupo coletivo durante um período específico. É um dos dois principais fatores que determinar o nível estável de clientes que uma empresa atenderá.\n\nCom isso, a análise desses dados de churn acaba se tornando muito relevante na atualidade empresas e, portanto, tentei simular ao máximo uma situação semelhante de um empresa de telecomunicações.");

        $(".txt211").text("Para o desenvolvimento do projeto, as bibliotecas usadas foram pandas, responsável por manipular os dados, e a plotlt, que cria histrogramas e outros gráficos.");

        $(".txt311").text("Por fim, foi possível obter uma base de dados com um bom tratamento na ETL e também a geração de gráficos para uma melhor tomada de decisão pelo time de vendas.");

        $(".title411").text("Histograma de Exemplo");
        $(".txt411").text("OBS: Em breve disponibilizarei todos os gráficos!");

        // SGI
        $(".title-SGI").text("Isolamento Socio-Geográfico - Currículo de Harrison");

        $(".title1111").text("Isolamento Socio-Geográfico");
        $(".txt1111").text("O Isolamento Sócio-Geográfico consiste na separação física das populações por barreiras geográficas, que podem ser um rio, montanha ou planejamento urbano que pode dificultar o acesso básico aos direitos humanos. Essas barreiras criam uma quebra de informações e um lago de recursos básicos.");

        $(".txt2111").text("Como foi dito, o Isolamento Sócio-Geográfico consiste na separação física das populações por barreiras geográficas, que podem ser um rio, montanha ou planejamento urbano que podem dificultar o acesso básico aos direitos humanos como educação, transporte e saúde. As fontes de dados foram coletadas de bancos de dados públicos, disponíveis na internet, para que possamos observar como os três direitos humanos básicos foram distribuídos em nível estadual e nacional.");

        $(".title3111").text("Metodologia");
        $(".txt3111").text("Foram pesquisadas obras na Internet que trouxeram informações sobre a desigualdade geográfica no acesso a educação, cultura, transporte, saúde e saneamento básico. Paralelamente, foi desenvolvido um questionário para analisar a acesso dos frequentadores deste campus a transporte, saúde e educação.");

        $(".txt4111").text("No Brasil há uma grande área de isolamento em locais áreas rurais por estarem distantes da urbanização, e com a falta de transportar muitas famílias e pequenos empresários acabam sendo isolados da própria população, tendo dificuldades de deslocamento para o centro urbano e grande dificuldade em receber alimentação e assistência médica. Em vários casos, os moradores da região sofrem com a falta de recursos médicos e escolares, perdendo o direito de cidadão.\n\nNo campus do IFSP-SJC, os alunos têm encontrou dificuldade de transporte. por ser um lugar onde poucas pessoas frequentam e por estar em um Auto-estrada, o transporte público é restrito, onde tiver apenas uma linha de ônibus, o que acaba tendo dificuldade acesso para pessoas que vêm de todos os cantos do Cidade. A única linha de ônibus que você tem só passa pelo centro e poucos alunos conseguem obtê-lo. Esse tipo problema afeta a vida de muitos estudantes, tornando com isso muitos tem que pegar pelo menos dois ônibus para ir à escola e causando danos físicos e psicológico.");

        $(".txt4211").text("No país há grandes desigualdades em relação à área de educação, como em bairros distantes dos centros, e das regiões urbanas e rurais. Um estudo do INEP encontrou que, na faixa etária de 10 a 14 anos, 95% dos jovens rural, e 97% dos jovens nas áreas urbanas estão nas Escolas. O estudo também aponta que 50% dos crianças urbanas que frequentam escolas estão atrasados ​​na escola. Nas zonas rurais, esta situação afecta 72% dos alunos, revelando assim um atraso discriminatório, exigindo a implementação de programas de ensino capazes de mostrar as ações do estado, levando em conta a constituição de 1988. Ou seja, o direito à educação não está distante apenas nas regiões desprivilegiados, bem como em toda o território nacional.\n\nHá também desigualdades regionais no saneamento básico, cuja importância está ligada a sistemas que cuidam abastecimento de água, tratamento de esgoto e controle da destinação do lixo produzido pela população para promover hábitos higiênicos e saudáveis, melhoria da limpeza pública e, assim, levar a qualidade de vida à população. Observa-se que a região sudeste do país tem melhor acesso ao saneamento básico do que o regiões norte e nordeste");

        $(".txt5111").text("Com os dados obtidos na pesquisa, observa-se que a região Sudeste apresenta melhores condições de acesso a saneamento básico, educação e transporte. Ainda há diferenças consideráveis ​​entre as regiões urbanas e rurais, e bairros centrais e periféricos em áreas urbanas.");

        // Obrigado
        $(".title-Thanks").text("Obrigado");
        $(".c-thanks h2").text("Obrigado por entrar em contato!");
        $(".c-thanks h3").text("Te responderei o mais rápido possível!");
        $(".c-thanks p").text("Voltar para o site de Harrison Caetano Cândido");
    });
});

$(function () {
    $(".en").click(function () {
        // Menu
        $(".abt").text("About me");
        $(".prt").text("Portfolio");
        $(".ctt").text("Contact me");

        $("title").text("Harrison's Resume");

        // Introduction
        $(".ccomp").text("Computer Science Student");

        // About me
        $(".hey").text("Hey!");
        $(".hey-txt").text("I'm Harrison Caetano Cândido from Brazil! I love programming, as well as play basketball and learn new things! Feel free to get in touch or take a look at my past work below");

        // Portfolio
        // IMTRP
        $(".titulo-top-proj h2").text("My top projects");
        $(".IMTRP h4").text("Industrial Material Transport Robot Prototype");
        $(".IMTRP p").text("The Project developed by me and a team of two friends aimed to design and build a prototype of industrial materials transport robot, meeting the theme of SNCT 2019.");

        // ADP
        $(".ADP h4").text("Covid 19 Data Analysis");
        $(".ADP p").text("This Project aimed to visualize the relationship that social inequality had with the covid 19 pandemic in a clipping from around May 2021, the worst overall picture in the state of São Paulo.");

        // SGI
        $(".SGI h4").text("Socio-Geographic Isolation");
        $(".SGI p").text("It was made by me together with some colleagues from my Technical course, aiming to meet the theme of 2018 SNCT, based on Science for Reducing Inequalities.");

        // CDA
        $(".CDA h4").text("Churn Data Analysis");
        $(".CDA p").text("It aims to understand how the Churn data of a hypothetical company is distributed among customers so that, in this way, new strategies can be developed by the Sales team.");

        $(".sombra-tprojects").text("Know more"); // botão

        // Timeline
        $(".sp").text("09/2021 - Present");
        $(".sc").text("Member of SciTec Jr");
        $(".sch").text("Assessor of Computing Area/ Administrative, Legal and Financial Department");
        $(".scp").text("I am responsible for activities of financial control, administrative and legal facilities for the company at all areas. In the Computing Area, i am also responsible for activities that address service delivery needs, that is, i can be manager or part of the developer team in projects.");

        $(".up").text("04/2021 - Present");
        $(".un").text("University");
        $(".unh").text("Computer Science Degree");
        $(".unp").text("I started university in Computer Science at Universidade Federal de São Paulo. Basicaly my course is divided in 2 graduations, the first being a Science & Technology bachelor degree with duration of 3 years, and the second being computer science proper with duration of 1 year after i complete the BST");


        $(".t").text("Technical Course");
        $(".th").text("Industrial Automation Technician");
        $(".tp").text("I graduated at Insituto Federal de São Paulo in the technical course of Industrial Automation, which is one of the biggest reasons I decided to go to the IT area.");

        // Contact
        $(".name").text(" Name");
        $(".message").text("Message");
        $(".bt-forms").text("Send");

        // Forms
        $(".contact h2").text("Contact Form");
        $("text-forms p").text("If you want to chat, please don't hesitate to message, it would be great to have a conversation :)");
        $(".contact h4").text("Social Media");

        // IMTRP
        $(".title-IMTRP").text("Industrial Material Transport Robot Prototype - Harrison's Resume");

        $(".title1").text("Industrial Material Transport Robot Prototype");
        $(".ft-fonte").text("Source: Own autorship");
        $(".txt1").text("The project aimed to develop an autonomous anti-collision and fall arrest cart with distance sensors controlled via arduino. The sensors were positioned in such a way that they prevent the robot from contacting obstacles in the direction of movement, such as walls, and also from falling from a certain altitude, for logistical use in industries, making a prototyping of modern vehicle models that do not need driver.");

        $(".title2").text("Introduction");
        $(".txt2").text("With the stabilization of 4.0 Industry in the brazilian park and international industrialists mainly in the secondary sector of the economy, optimization became necessary to all industrial pillars, which includes the sector tertiary logistics services. Globalization makes the market and the industry are always looking to serve the customer as quickly as possible, quickly and efficiently as possible, but for that it is necessary that what is behind the implementation of these services is providing security and efficiency with respect to employees, that is, the use of equipment definitive and increasingly improved.\n\nThus, the purpose of this work was to design and build a car that moves smoothly independent, and who manages to avoid obstacles and who stop him from falling into a hole, making a simple simulation of independent vehicles for use low-cost industrial and electrical. Furthermore, the parody of a vehicle has not yet designed achieves even with its physical limitations and technologies, simulate an industrial autonomous car, hitting your basic goals of detect, stop, and dodge unforeseen objections.");

        $(".title3").text("Development");
        $(".txt3").text("During the development of the project, software and hardware experiments were done in the prototype for a better understanding of the components used, such as the ultrasonic sensor. In that regard, all the cart hardware was first stage completed, with a spike in difficulty only in doubt about the decision making of the position of the sensors in the chassis, which would better favor the detection of obstacles around the vehicle, having concentrated our efforts at the intersection of H bridge programming L298N, the 180° servo motor, and the ultrasonic sensors HC-SR04, by the Arduino platform.\n\nThe most pertinent challenge was to synchronize between the distance calculated by the sensor, so that the specimen could dodge obstacles and the speed with which he would stop engines A and B, and make the counterclockwise rotation of the same with the micro-servo motor, without having a very strong impact with the barriers.\n\nAnother problem was having to deal with the weight of the components, which made force for the deviation of the prototype for unwanted shortcuts. One issue analyzed was the stack issue, as there are many components connected in a single battery, which is 9V, consuming a lot of electricity and limiting the use of the project in relation to their active time, being an alternative to use of a powerbank, which would increase the active time of the cart, but would reduce its speed and power. Furthermore, it was also difficult to deal with the question of time, speed, and height, which created danger of impact.");

        $("title4").text("Results and Discussions");
        $(".txt4").text("At the end of september 2019 we were able to complete the prototype with almost 100% efficiency thanks to the horizontal sensor, althrough with low performance in the vertical sensor, due to a lack of ultrassonic sensors sync. Even so, the robot can simulate a programmable autonomous industrial material transporter, wich could be used in industries for logistical facilities, helping to transport heavy metals, people and preventing accidents that would cost employees lives in the work area.");

        $(".title5").text("Conclusion");
        $(".txt5").text("Although the founded dificulties, mainly those related to the simultaneous operation of the components, in particular of the H Bridge with the ultrassonic sensors, the project achieved the pre-established theorical goals, that were to dribble objects in front of it and work according to the operator's schedule.");

        $(".title6").text("Source Code");

        $(".title7").text("References");

        // ADP
        $(".title-ADP").text("Covid 19 Data Analysis - Harrison's Resume");

        $(".title11").text("The impact of Social Inequality in the Covid 19\npandemic in the São Paulo state");
        $(".txt11").text("Seeking to find a way to visualize the relation that social inequality had with the scenario of the covid 19 pandemic in a clipping of the pandemic, from around May 2021, the worst general situation in the country with the social contrast of the state of São Paulo. The final delivery consisted of 5 interactive Dashboards, namely the General Panel, Income, Illiteracy, Sanitation and Unemployment.\n\nThe tools used in the project were Microsoft Power BI (excellent data analysis tool for being easy to use, including the ETL phases were almost exclusively done in the tool), Google Spreadsheets, Notion and Miro, the latter two much more tied to the management part. The project started on October 2021 and ended on February 4, 2022, approximately 5 months using the SCRUM methodology. The team consisted of me and Bruno during my Trainee period at SciTec Jr.");

        $(".title21").text("General Painel");
        $(".txt21").text("The General Painel consists of 4 statistic visuals, 3 filters and 1 map, that demonstrate the relation of covid 19 data with extremaly poor counties and subnormal clusters, allowing us to extrapolate the general scenario of the country.");

        $(".title31").text("Income");
        $(".txt31").text("Income dashboard help us to visualize the relation of monthly income and Covid 19 data by means of 4 statical visuals, 2 filters and 1 map.");

        $(".title41").text("Illiteracy");
        $(".txt41").text("I was then able to create the Illiteracy dashboard, composed of 4 statistical visuals, 2 filters and 1 map, which demonstrate the relation of Covid 19 data with 2010 census data.");

        $(".title51").text("Sanitation");
        $(".txt51").text("The sanitation dashboard, through 4 statistical visuals, 3 filters and 1 map, brings us insights into how some general sanitation data, such as population without water, sewage and garbage collection, relate to Covid 19 data.");

        $(".title61").text("Unemployment");
        $(".txt61").text("The unemployment dashboard, through 4 statistical visuals, 3 filters and 1 map, brings us insights into how covid 19 data relates to general unemployment data, such as Admissions, Terminations and sectors of the economy.");

        // CDA
        $(".title-CDA").text("Churn Data Analysis - Harrison's Resume");

        $(".title111").text("Churn Data Analysis");
        $(".txt111").text("The turnover rate, in its broadest sense, is a measure of the number of individuals or items that leave a collective group during a specific period. It is one of the two main factors that determine the steady level of customers a company will support.\n\nThrough this, the analysis of these churn data ends up becoming very relevant in today's companies, and therefore, I tried to simulate as much as possible a similar situation of a telecommunications company.");

        $(".txt211").text("For the development of the project, pandas libraries were used to manipulate the data, and plotly to create the histogram.");

        $(".txt311").text("Finally, it is possible to obtain a spreadsheet with a good ETL treatment, and it is also possible to use histograms for better decision-making by the team.");

        $(".title411").text("Histogram Example");
        $(".txt411").text("Note: I will provide all the graphs soon!");

        // SGI
        $(".title-SGI").text("Socio-Geographic Isolation - Harrison's Resume");

        $(".title1111").text("Socio-Geographic Isolation");
        $(".txt1111").text("Socio-Geographic Isolation consists in the physical separation of populations by geographic barriers, that could be a river, mountain or urban planning that can dificult basic access to the human rights. This barriers create an information break and a lake of basic resources.");

        $(".txt2111").text("As it was said, Socio-Geographic Isolation consists in the physical separation of populations by geographic barriers, that could be a river, mountain or urban planning that can dificult basic access to human rights as education, transport and health. The Data Sources were gathered from public databases, avaiable on the internet, so that we can observe how the three basic human rights were distribuited at state and national level.");

        $(".title3111").text("Methodology");
        $(".txt3111").text("Works were searched on the Internet that brought information on geographic inequality in access to education, culture, transport, health and basic sanitation. At the same time, a questionnaire was developed to analyze the access of the regulars of this campus to transportation, health and education.");

        $(".txt4111").text("In Brazil there is a large area of ​​isolation in places rural areas because they are far from urbanization, and with the lack of transport many families and small entrepreneurs end up being isolated from the population itself, having difficulties in moving to the urban center and great difficulty in receiving food and medical assistance. In several cases, the residents of the region suffer from the lack of medical and school resources, losing the right of citizen.\n\nIn the IFSP-SJC campus, students have\nencountered difficulty with transport. for being a place where few people attend and for being in a Highway, public transport is restricted, where you have only one bus line, which ends up having a difficult access for people who come from all corners of the City. The only bus line that you have only goes through the center and few students manage to get it. This type problem affects the lives of many students, making with that many have to take at least two buses to go to school and causing physical and psychological.\n\n");
        $(".txt4211").text("In the country there are great inequalities regarding the area of education, as in neighborhoods far from the centers, and of urban and rural regions. An INEP study found that, in the age group of 10 to 14 years, 95% of young people in rural area, and 97% of young people in urban areas are located at Schools. The study also points out that 50% of urban children who attend schools are lagging behind in school. In rural areas, this situation affects 72% of students, thus revealing to have a discriminating delay, requiring the implementation of teaching programs capable of showing the actions of the state, taking into account the 1988 constitution. Or that is, the right to education is not only distant in the regions underprivileged as well as across the entirety of the National territory.\n\nThere are also regional inequalities in sanitation basic, whose importance is linked to systems that take care of water supply, sewage treatment and control of the destination of the garbage produced by the population, in order to promote hygienic and healthy habits, improvement of public cleaning and thus taking quality of life to the population. It is observed that the southeastern region of the country has better access to basic sanitation than the north and northeast regions");

        $(".txt5111").text("With the data obtained in the research, it is observed that the region Southeast presents better conditions of access to basic sanitation, education and transport. There is still considerable differences between urban and rural regions, and central and peripheral neighborhoods in urban areas.");

        // Thank You
        $(".title-Thanks").text("Thank You");
        $(".c-thanks h2").text("Thanks for contacting me!");
        $(".c-thanks h3").text("I´ll reply you soon as possible!");
        $(".c-thanks p").text("Get back to Harrison Caetano Candido´s Website");
    });
});