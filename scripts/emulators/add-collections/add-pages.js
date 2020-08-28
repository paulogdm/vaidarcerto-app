
const addPages = (dbInstance) => {
  const collectionRef = dbInstance.collection('pages');
  const arrDocs = [
    {
      title: 'Nossa História',
      slug: 'nossa-historia',
      primaryText: 'Projeto de Inclusão Digital com os comerciantes de nossa cidade',
      secondaryText: {
        spanOne: 'A cidade de nossa cidade possui em sua maioria pequenos comércios, nos quais atendem clientes todos os dias de diversas comunidades.',
        spanTwo: 'Pensando em melhor atendê-los, esta página foi criada durante as restrições da pandemia do Covid-19 aqui iniciadas em Março de 2020.\n\nNosso objetivo é transformar a cidade de nossa cidade em um centro comercial digital, onde tornaremos possível o contato direto entre clientes e comércios locais, agendamentos de serviços, pedidos e consultas de informações, tudo em um só lugar e de fácil acesso.\n\nAproveitem esta oportunidade e ajude-nos a tornar a cidade cada vez mais digital.'
      },
    },
    {
      title: 'Página Inicial',
      description: 'Projeto de Inclusão Digital com os comerciantes de nossa cidade',
      slug: '/',
    },
    {
      "title": "Registrar",
      "slug": "auth/register",
      "fields": {
        "title": {
          titleLabel: 'Título',
          titleInfo: 'Ex: Casa de materiais de Construção',
          placeholder: 'Nome da sua empresa, produto ou serviço',
          required: true,
          lengthDesired: {
            min: 3,
            max: 30,
          },
        },
        "primaryText": {
          titleLabel: 'Subtítulo',
          titleInfo: 'Ex.: Utilidades para a sua casa e escritório',
          placeholder: 'Tema do seu negócio, produto ou serviço',
          required: true,
          lengthDesired: {
            min: 10,
            max: 50,
          },
        },
        "secondaryText": {
          titleLabel: 'Descrição do negócio',
          titleInfo: 'O que você faz ou oferece de melhor para os seus clientes.',
          required: true,
          lengthDesired: {
            min: 50,
            max: 800,
          },
        },
        "inCharge": {
          titleLabel: 'Responsável',
          required: true,
          lengthDesired: {
            min: 10,
            max: 50,
          },
        },
        "idCard": {
          titleLabel: 'CPF ou CNPJ',
          titleInfo: 'Necessário para validar o anúncio como autêntico',
          required: true,
          lengthDesired: {
            min: 11,
            max: 15,
          },
        },
        "phone": {
          titleLabel: 'Telefone',
          titleInfo: 'Número necessário para que as pessoas liguem para você.',
          format: '(##) #### - ####',
          type: 'tel',
          showMask: true,
          required: true,
          lengthDesired: {
            min: 10,
            max: 11,
          },
        },
        "email": {
          titleLabel: 'E-mail',
          titleInfo: 'O seu e-mail é necessário para enviarmos atualizações sobre o seu anúncio.',
          required: false,
          lengthDesired: {
            min: 10,
            max: 60,
          },
        },
        "address": {
          titleLabel: 'Endereço',
          titleInfo: 'Ex.: Avenida principal, 1234, Cidade, Estado',
          required: false,
          lengthDesired: {
            min: 10,
            max: 100,
          },
        },
        "placeLink": {
          titleLabel: 'Link no Mapa',
          titleInfo: 'Exemplo: https://goo.gl/maps/xxxxx_link_curto',
          lengthDesired: {
            min: 10,
            max: 100,
          },
        },
        "category": {
          titleLabel: 'Defina o(s) segmento(s)',
          titleInfo: 'Máximo 3 opções. Dúvidas? Deixe em branco.',
          placeholder: 'Segmentos',
          defaultValues: ['instalações', 'construção', 'serviços'],
          lengthDesired: {
            min: 1,
            max: 3,
          },
        },
        "whatsApp": {
          titleLabel: 'Número de WhatsApp',
          titleInfo: 'As pessoas enviarão mensagens a este número de WhatsApp.',
          format: '+55 (##) 9 ####-####',
          type: 'tel',
          showMask: false,
          required: false,
          lengthDesired: {
            min: 13,
            max: 13,
          },
        },
        "telegram": {
          titleLabel: 'Usuário do Telegram',
          username: 'meu_usuario_aqui',
          titleInfo: 'As pessoas entrarão em contato com o seu contato do Telegram.',
          lengthDesired: {
            min: 5,
            max: 25,
          },
        },
      },
      "requiredFieldsLabel": 'Todos os campos com * são obrigatórios',
      "submitLabel": 'Registrar',
      errorMessage: 'Erro ao registrar anúncio!',
      successMessage: 'Anúncio registrado com sucesso!',
      analysisMessage: 'O seu anúncio será analisado pela nossa equipe e publicado assim que possível.',
    },
    {
      title: 'Busca rápida de anúncios',
      description: 'Aqui temos alguns filtros de busca para ajudar você.',
      slug: '/search',
    },
    {
      title: 'Conteúdo sobre {tag}',
      description: 'Encontre notícias e conteúdo sobre {tag}',
      slug: '/tag/[slug]',
    },
  ];

  arrDocs.map(docData => {
    collectionRef.add(docData)
      .then(docRef => {
        console.log('[CLI Emulators] Pages data was saved with ID.', docRef.id);
      })
      .catch(err => {
        console.error('[CLI Emulators] Error saving pages doc: ', err);
      });
  });
}

module.exports = addPages;
