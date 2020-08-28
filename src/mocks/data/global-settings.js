const globalSettings = [
  {
    "bannerHeader": {
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandeira_de_Minas_Gerais.svg/600px-Bandeira_de_Minas_Gerais.svg.png",
      "linkLabel": "Mais info aqui",
      "type": "news",
      "caption": "Bandeira de Minas Gerais, Brasil",
      "size": "small",
      "pageSlug": "/post/covid-19",
      "title": "Informações sobre o Covid-19 em MG"
    },
    "type": "banner-header"
  },
  {
    "type": "logo",
    "logoObj": {
      "w": "680",
      "title": "Brazillian flag photo",
      "fit": "crop",
      "q": "80",
      "url": "https://images.unsplash.com/photo-1527374071603-76de89807336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format",
      "h": "100"
    }
  },
  {
    "type": "menu-header",
    "menuHeader": [
      {
        "pathname": "/",
        "asPath": "/",
        "title": "Página Inicial",
        "query": {},
        "itemIcon": "home_circle",
        "status": "active"
      },
      {
        "pathname": "/post/[slug]",
        "asPath": "/post/nossa-historia",
        "title": "Nossa história",
        "itemIcon": "person",
        "query": {},
        "status": "active"
      },
      {
        "pathname": "/auth/register",
        "asPath": "/auth/register",
        "title": "Cadastrar",
        "itemIcon": "add_box",
        "query": {},
        "status": "active"
      }
    ]
  },
  {
    "type": "menu-footer",
    "menuFooter": [
      {
        "pathname": "/post/[slug]",
        "asPath": "/post/nossa-historia",
        "title": "Nossa história",
        "query": {},
        "status": "active"
      },
      {
        "pathname": "/auth/register",
        "asPath": "/auth/register",
        "title": "Cadastrar",
        "query": {},
        "status": "active"
      }
    ],
    "socials": {
      "facebook": "https://www.facebook.com",
      "twitter": "https://twitter.com",
      "instagram": "",
      "linkedin": ""
    }
  }
];

module.exports = {
  globalSettings,
};
