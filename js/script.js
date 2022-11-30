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
        $(".hey-txt").text("Me chamo Harrison Caetano Cândido! Eu amo programar tanto quanto jogar basquete e aprender novas coisas! Sinta-se livre para entrar em contato ou dar uma olhada no meu trabalho abaixo.");

        // Portfolio
        // IMTRP
        $(".titulo-top-proj h2").text("Melhores Projetos");
        $(".IMTRP h4").text("Prototipo de Robô de Transporte de Materiais Industriais");
        $(".IMTRP p").text("O projeto desenvolvido por mim e mais dois amigos visava desenhar e construir um prototipo de um robô de transporte de materiais industriais, atendendo ao tema da SNCT de 2019.");

        // ADP
        $(".ADP h4").text("Análise de Dados da Covid 19");
        $(".ADP p").text("Este projeto visava visualizar a relação que a deseigualdade social teve com a pandemia de Covid 19 em um recorte de mais ou menor Maio de 2021, pior cenário no estado de São Paulo.");

        // RCD
        $(".RCD h4").text("SiLocadora de Veículos");
        $(".RCD p").text("É um projeto que visa criar um sistema de locadora de veículos, onde os usuários podem basicamente criar uma conta, alugar um veículo e controlar seus dados.");

        // NMC
        $(".NMC h4").text("Calculadora de Métodos Numéricos");
        $(".NMC p").text("Este projeto visa calcular aproximações para zeros de funções polinomiais por três métodos diferentes, a saber, bisseção, newton e secante.");

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
        $(".ADP h4").text("Covid 19 Data Analysis Dashboard");
        $(".ADP p").text("This Project aimed to visualize the relationship that social inequality had with the covid 19 pandemic in a clipping from around May 2021, the worst overall picture in the state of São Paulo.");

        // RCD
        $(".RCD h4").text("Rental Car Dealership System");
        $(".RCD p").text("It is a project that aim to create a rental car dealership system, wich users can basicaly create an account, rent a vehicle and control their data.");

        // NMC
        $(".NMC h4").text("Numeric Methods Calculator System");
        $(".NMC p").text("This project aims to calculate approximations for zeros of polynomial functions by three different methods, namely bisection, newton and secant.");

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

        // Thank You
        $(".title-Thanks").text("Thank You");
        $(".c-thanks h2").text("Thanks for contacting me!");
        $(".c-thanks h3").text("I´ll reply you soon as possible!");
        $(".c-thanks p").text("Get back to Harrison Caetano Candido´s Website");
    });
});