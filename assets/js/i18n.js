(function () {
    const STORAGE_KEY = 'renovancy-lang';
  
    const translations = {
      pt: {
        'nav-home': 'Home', 'nav-about': 'Sobre', 'nav-services': 'Serviços', 'nav-portfolio': 'Portfolio', 'nav-team': 'Time', 'nav-contact': 'Contato',
        'hero-title': 'Transformando Ideias Em Valor',
        'about-tag': 'Sobre', 'about-subtitle': 'Desenvolvemos projetos com estratégia, criatividade e tecnologia para gerar crescimento sustentável.',
        'about-badge': 'Inovação <br>Estratégica',
        'about-heading': 'Transformamos ideias em soluções digitais estratégicas',
        'about-text': 'Somos uma empresa especializada em desenvolvimento de sistemas, criação de sites, identidade visual e marketing digital. Nosso foco é unir tecnologia, estratégia e design para construir marcas fortes e soluções eficientes. Trabalhamos com planejamento, organização e execução profissional de cada projeto, garantindo qualidade, inovação e resultados reais para nossos clientes.',
        'about-f1-title': 'Planejamento Estratégico', 'about-f1-text': 'Antes de desenvolver qualquer projeto, analisamos o mercado, o público e os objetivos do cliente para garantir decisões inteligentes e resultados concretos.',
        'about-f2-title': 'Soluções Personalizadas', 'about-f2-text': 'Cada empresa é única. Criamos sistemas, marcas e estratégias sob medida, alinhadas à identidade e às necessidades do negócio.',
        'about-f3-title': 'Foco em Crescimento', 'about-f3-text': 'Nosso objetivo não é apenas entregar um projeto, mas gerar posicionamento, autoridade e crescimento contínuo.',
        'about-cta': 'Ver mais',
        'services-tag': 'Serviços', 'services-subtitle': 'Desenvolvemos sistemas, marcas e experiências digitais que transformam ideias em valor de mercado.',
        'svc1-title': 'Criação de Sites', 'svc1-text': 'Desenvolvemos sites modernos, responsivos e estratégicos, focados em performance, experiência do usuário e conversão. Seu site como uma verdadeira ferramenta de vendas.',
        'svc2-title': 'Desenvolvimento de Sistemas', 'svc2-text': 'Criamos sistemas personalizados, plataformas web e soluções sob medida para otimizar processos, automatizar tarefas e aumentar a produtividade da sua empresa.',
        'svc3-title': 'Branding &amp; Identidade Visual', 'svc3-text': 'Construímos marcas fortes e memoráveis através de logotipo, paleta de cores, tipografia e posicionamento estratégico, transmitindo profissionalismo, personalidade e autoridade.',
        'svc4-title': 'Digital Marketing &amp; SEO', 'svc4-text': 'Criamos estratégias digitais focadas em posicionamento, tráfego pago, SEO e geração de leads para aumentar sua visibilidade e atrair clientes qualificados.',
        'services-cta-title': 'Precisa de uma solução personalizada?', 'services-cta-text': 'Fale conosco e descubra como transformar sua ideia em um projeto estratégico e lucrativo.', 'services-cta-btn': 'Solicitar Orçamento',
        'steps-tag': 'Processo de Trabalho', 'steps-subtitle': 'Da ideia à execução, seguimos um processo estruturado que garante inovação, desempenho e crescimento para sua empresa.',
        'step1-title': 'Briefing &amp; Planejamento', 'step1-text': 'Entendemos a necessidade do cliente, analisamos objetivos, público-alvo e mercado para estruturar um planejamento estratégico claro e eficiente.',
        'step2-title': 'Desenvolvimento &amp; Criação', 'step2-text': 'Colocamos o projeto em prática, desenvolvendo sistemas, sites ou identidade visual com foco em qualidade, performance e experiência do usuário.',
        'step3-title': 'Testes &amp; Ajustes', 'step3-text': 'Realizamos testes técnicos e estratégicos para garantir que tudo esteja funcionando perfeitamente antes do lançamento.',
        'step4-title': 'Entrega &amp; Suporte', 'step4-text': 'Após a finalização, entregamos o projeto completo e oferecemos suporte para garantir segurança, estabilidade e evolução contínua.',
        'portfolio-tag': 'Portfólio', 'portfolio-subtitle': 'Confira nossos projetos!',
        'filter-all': 'Todos os Projetos', 'filter-systems': 'Sistemas', 'filter-graphic': 'Design Gráfico', 'filter-webdesign': 'Design Web', 'filter-networks': 'Redes',
        'pf1-title': 'Foto 1', 'pf2-title': 'Foto 2', 'pf3-title': 'Foto 3', 'pf4-title': 'Foto 4', 'pf5-title': 'Foto 5', 'pf6-title': 'Foto 6', 'pf7-title': 'Foto 7', 'pf8-title': 'Foto 8',
        'team-tag': 'Time', 'team-subtitle': 'Equipe responsável pelo planejamento, execução e desenvolvimento dos projetos da empresa',
        'team1-role': 'Gestora de Desenvolvimento', 'team1-text': 'Responsável pelo desenvolvimento e manutenção das soluções web e do painel administrativo.',
        'team2-role': 'Gestor de Administração', 'team2-text': 'Responsável por organizar processos, controlar recursos, coordenar equipes e garantir o funcionamento eficiente da empresa.',
        'team3-role': 'Gestor de Design', 'team3-text': 'Responsável pela identidade visual, experiência do usuário e qualidade do design dos projetos.',
        'team4-role': 'Gestor de Finanças', 'team4-text': 'Responsável por planejar, organizar e supervisionar as atividades da empresa, garantindo controle de recursos e eficiência nos processos internos.',
        'pricing-heading': 'Planos e Soluções', 'pricing-subtitle': 'Escolha a solução ideal para o momento da sua empresa.',
        'plan1-title': 'Essencial', 'plan1-text': 'Ideal para empresas que estão iniciando sua presença digital.', 'period': '/ mês',
        'plan1-f1': 'Criação de site institucional', 'plan1-f2': 'Layout responsivo', 'plan1-f3': 'Integração com redes sociais', 'plan1-f4': 'Otimização básica para Google',
        'plan-btn': 'Escolher Plano',
        'plan2-title': 'Profissional', 'plan2-text': 'Para empresas que querem fortalecer sua marca e presença online.',
        'plan2-f1': 'Desenvolvimento de site completo', 'plan2-f2': 'Identidade visual profissional', 'plan2-f3': 'Otimização SEO', 'plan2-f4': 'Integração com ferramentas de marketing', 'plan2-f5': 'Suporte técnico',
        'plan3-title': 'Premium', 'plan3-text': 'Solução completa para empresas que buscam crescimento digital.',
        'plan3-f1': 'Desenvolvimento de sistema ou plataforma', 'plan3-f2': 'Branding completo', 'plan3-f3': 'Estratégia digital', 'plan3-f4': 'SEO avançado', 'plan3-f5': 'Suporte prioritário',
        'faq1-q': 'Quanto tempo leva para desenvolver um site?', 'faq1-a': 'O tempo varia de acordo com a complexidade do projeto, mas geralmente um site institucional pode ser desenvolvido entre 2 e 4 semanas.',
        'faq2-q': 'Vocês desenvolvem sistemas personalizados?', 'faq2-a': 'Sim. Desenvolvemos sistemas sob medida para empresas que precisam automatizar processos ou criar plataformas específicas.',
        'faq3-q': 'Posso atualizar o conteúdo do meu site depois?', 'faq3-a': 'Sim. Nossos projetos são desenvolvidos para que você possa atualizar conteúdos de forma simples e prática.',
        'faq4-q': 'A RENOVANCY também cria identidade visual?', 'faq4-a': 'Sim. Desenvolvemos identidade visual completa, incluindo logotipo, paleta de cores, tipografia e elementos gráficos.',
        'faq5-q': 'Vocês oferecem suporte após a entrega do projeto?', 'faq5-a': 'Sim. Oferecemos suporte técnico e manutenção para garantir que seu projeto continue funcionando perfeitamente.',
        'contact-tag': 'Contato', 'contact-subtitle': 'Vamos conversar sobre seu projeto e encontrar a melhor solução para o seu negócio.',
        'contact-info-heading': 'Informações de contato', 'contact-location': 'Local', 'contact-calls': 'Ligações', 'contact-hours': 'Horário de Funcionamento',
        'contact-weekdays': 'Segunda a Sexta-feira', 'contact-weekend': 'Sábado - Domingo', 'contact-closed': 'Fechado', 'contact-follow': 'Siga-nos!',
        'contact-form-heading': 'Entre em contato', 'form-name': 'Nome Completo', 'form-email': 'Endereço de Email', 'form-subject': 'Assunto', 'form-message': 'Sua Mensagem',
        'form-loading': 'Carregando', 'form-sent': 'Sua mensagem foi enviada. Obrigada!', 'form-submit': 'Enviar Mensagem',
        'footer-contact': 'Contato', 'footer-phone': 'Telefone:', 'footer-rights': 'Todos os Direitos Reservados'
      },
      en: {
        'nav-home': 'Home', 'nav-about': 'About', 'nav-services': 'Services', 'nav-portfolio': 'Portfolio', 'nav-team': 'Team', 'nav-contact': 'Contact',
        'hero-title': 'Transforming Ideas Into Value',
        'about-tag': 'About', 'about-subtitle': 'We develop projects with strategy, creativity, and technology to generate sustainable growth.',
        'about-badge': 'Strategic <br>Innovation',
        'about-heading': 'We transform ideas into strategic digital solutions',
        'about-text': 'We are a company specialized in systems development, website creation, visual identity, and digital marketing. Our focus is to combine technology, strategy, and design to build strong brands and efficient solutions. We work with professional planning, organization, and execution of each project, ensuring quality, innovation, and real results for our clients.',
        'about-f1-title': 'Strategic Planning', 'about-f1-text': 'Before developing any project, we analyze the market, the audience, and the client\u2019s goals to ensure smart decisions and concrete results.',
        'about-f2-title': 'Customized Solutions', 'about-f2-text': 'Every company is unique. We create bespoke systems, brands, and strategies, aligned with the business identity and needs.',
        'about-f3-title': 'Focus on Growth', 'about-f3-text': 'Our goal is not just to deliver a project, but to generate positioning, authority, and continuous growth.',
        'about-cta': 'See more',
        'services-tag': 'Services', 'services-subtitle': 'We develop systems, brands, and experiences.',
        'svc1-title': 'Website Creation', 'svc1-text': 'We develop modern, responsive, and strategic websites focused on performance, user experience, and conversion. Your website as a true sales tool.',
        'svc2-title': 'Systems Development', 'svc2-text': 'We create custom systems, web platforms, and tailored solutions to optimize processes, automate tasks, and increase your company\u2019s productivity.',
        'svc3-title': 'Branding &amp; Visual Identity', 'svc3-text': 'We build strong and memorable brands through logos, color palettes, typography, and strategic positioning, conveying professionalism, personality, and authority.',
        'svc4-title': 'Digital Marketing &amp; SEO', 'svc4-text': 'We create digital strategies focused on positioning, paid traffic, SEO, and lead generation to increase your visibility and attract qualified customers.',
        'services-cta-title': 'Need a custom solution?', 'services-cta-text': 'Contact us and discover how to transform your idea into a strategic and profitable project.', 'services-cta-btn': 'Request a Quote',
        'steps-tag': 'Work Process', 'steps-subtitle': 'From idea to execution, we follow a structured process that ensures innovation, performance, and growth for your company.',
        'step1-title': 'Briefing &amp; Planning', 'step1-text': 'We understand the client\u2019s needs, analyze goals, target audience, and market to structure a clear and efficient strategic plan.',
        'step2-title': 'Development &amp; Creation', 'step2-text': 'We put the project into practice, developing systems, websites, or visual identity with a focus on quality, performance, and user experience.',
        'step3-title': 'Testing &amp; Adjustments', 'step3-text': 'We perform technical and strategic tests to ensure everything is working perfectly before the launch.',
        'step4-title': 'Delivery &amp; Support', 'step4-text': 'After completion, we deliver the full project and offer support to ensure security, stability, and continuous evolution.',
        'portfolio-tag': 'Portfolio', 'portfolio-subtitle': 'Check out our projects!',
        'filter-all': 'All Projects', 'filter-systems': 'Systems', 'filter-graphic': 'Graphic Design', 'filter-webdesign': 'Web Design', 'filter-networks': 'Networks',
        'pf1-title': 'Photo 1', 'pf2-title': 'Photo 2', 'pf3-title': 'Photo 3', 'pf4-title': 'Photo 4', 'pf5-title': 'Photo 5', 'pf6-title': 'Photo 6', 'pf7-title': 'Photo 7', 'pf8-title': 'Photo 8',
        'team-tag': 'Team', 'team-subtitle': 'Team responsible for the planning, execution, and development of the company\u2019s projects',
        'team1-role': 'Development Manager', 'team1-text': 'Responsible for the development and maintenance of web solutions and the administrative panel.',
        'team2-role': 'Administrative Manager', 'team2-text': 'Responsible for organizing processes, controlling resources, coordinating teams, and ensuring the company\u2019s efficient operation.',
        'team3-role': 'Design Manager', 'team3-text': 'Responsible for visual identity, user experience, and the design quality of the projects.',
        'team4-role': 'Finance Manager', 'team4-text': 'Responsible for planning, organizing, and supervising company activities, ensuring resource control and internal process efficiency.',
        'pricing-heading': 'Plans & Solutions', 'pricing-subtitle': 'Choose the ideal solution for your company\u2019s current stage.',
        'plan1-title': 'Essential', 'plan1-text': 'Ideal for companies starting their digital presence.', 'period': '/ month',
        'plan1-f1': 'Institutional website creation', 'plan1-f2': 'Responsive layout', 'plan1-f3': 'Social media integration', 'plan1-f4': 'Basic Google optimization',
        'plan-btn': 'Choose Plan',
        'plan2-title': 'Professional', 'plan2-text': 'For companies that want to strengthen their brand and online presence.',
        'plan2-f1': 'Full website development', 'plan2-f2': 'Professional visual identity', 'plan2-f3': 'SEO optimization', 'plan2-f4': 'Integration with marketing tools', 'plan2-f5': 'Technical support',
        'plan3-title': 'Premium', 'plan3-text': 'Complete solution for companies seeking digital growth.',
        'plan3-f1': 'System or platform development', 'plan3-f2': 'Full branding', 'plan3-f3': 'Digital strategy', 'plan3-f4': 'Advanced SEO', 'plan3-f5': 'Priority support',
        'faq1-q': 'How long does it take to develop a website?', 'faq1-a': 'The time varies according to the project\u2019s complexity, but usually an institutional website takes between 2 to 4 weeks to develop.',
        'faq2-q': 'Do you develop custom systems?', 'faq2-a': 'Yes. We develop tailored systems for companies that need to automate processes or create specific platforms.',
        'faq3-q': 'Can I update my website content later?', 'faq3-a': 'Yes. Our projects are developed so that you can update content in a simple and practical way.',
        'faq4-q': 'Does RENOVANCY also create visual identity?', 'faq4-a': 'Yes. We develop complete visual identity, including logos, color palettes, typography, and graphic elements.',
        'faq5-q': 'Do you offer support after project delivery?', 'faq5-a': 'Yes. We offer technical support and maintenance to ensure your project continues to run perfectly.',
        'contact-tag': 'Contact', 'contact-subtitle': 'Let\u2019s talk about your project and find the best solution for your business.',
        'contact-info-heading': 'Contact Information', 'contact-location': 'Location', 'contact-calls': 'Calls', 'contact-hours': 'Opening Hours',
        'contact-weekdays': 'Monday - Friday', 'contact-weekend': 'Saturday - Sunday', 'contact-closed': 'Closed', 'contact-follow': 'Follow us!',
        'contact-form-heading': 'Get in touch', 'form-name': 'Full Name', 'form-email': 'Email Address', 'form-subject': 'Subject', 'form-message': 'Your Message',
        'form-loading': 'Loading', 'form-sent': 'Your message has been sent. Thank you!', 'form-submit': 'Send Message',
        'footer-contact': 'Contact', 'footer-phone': 'Phone:', 'footer-rights': 'All Rights Reserved'
      }
    };
  
    const STORAGE = 'renovancy-lang';
  
    function applyLang(lang) {
      const dict = translations[lang] || translations.pt;
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          el.innerHTML = dict[key];
        }
      });
      document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    }
  
    function getSavedLang() {
      try { return localStorage.getItem(STORAGE) || 'pt'; } catch (e) { return 'pt'; }
    }
  
    function saveLang(lang) {
      try { localStorage.setItem(STORAGE, lang); } catch (e) {}
    }
  
    document.addEventListener('DOMContentLoaded', function () {
      let currentLang = getSavedLang();
      applyLang(currentLang);
  
      const btn = document.getElementById('lang-toggle');
      if (btn) {
        btn.addEventListener('click', function () {
          currentLang = currentLang === 'pt' ? 'en' : 'pt';
          saveLang(currentLang);
          applyLang(currentLang);
        });
      }
    });
  })();