init = () => {
  let values = {
    1: {
      carrier: "CCH",
      service: "DEX",
    },
    17: {
      carrier: "CHP",
      service: "express",
    },
  };

  // JSON
  let json = {
    data: {
      BUIN: {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
      LAJA: {
        limit: 1,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      LEBU: {
        limit: 1,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      LOTA: {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    },
  };

  replaceValues = (company) => {
    let [name, { limit, over_carrier_service_id, under_carrier_service_id }] =
      company;

    const over = values[over_carrier_service_id];
    const under = values[under_carrier_service_id];

    return {
      [name]: {
        limit,
        over,
        under,
      },
    };
  };

  const companies = Object.entries(json.data);

  const result = companies.map((company) => replaceValues(company));

  console.log(...result);
};

module.exports = {
  init,
};
