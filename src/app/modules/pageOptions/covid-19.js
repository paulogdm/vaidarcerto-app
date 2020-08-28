import config from '~/config';

const globalLabels = {
  confirmedCases: "Casos Confirmados",
  confirmed: "Confirmados",
  deaths: "Óbitos",
  lethality: "Letalidade",
  panel: "Painel",
  covid19: "Coronavírus",
  lastUpdated: "Atualizado em",
  sourceTitle: "Fonte Oficial",
  casesAroundUs: "Casos por regiões próximas",
  weeklyCases: "Casos por semana epidemiológica",
  regionCases: "Casos por região",
  newCasesByDay: "Casos novos por dia",
  north: "Norte",
  northeast: "Nordeste",
  midwest: "Centro-Oeste",
  southeast: "Sudeste",
  south: "Sul",
};

const globalSettings = {
  sourceLink: "https://covid.saude.gov.br/",
  sourceTitle: "Ministério da Saúde",
  regionsAroundUs: config.covid19.regionsAroundUs,
};

const pageOptions = {
  name: "Painel Coronavírus",
  slug: "covid19",
  globalLabels,
  globalSettings,
};

export {
  pageOptions,
};

export default pageOptions;
