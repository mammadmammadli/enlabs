const { Office } = require("../db");

const OfficeService = {
  addOffice: async (req, res) => {
    try {
      const office = await Office.create(req);
      office.save();

      res.json(office);
    } catch (e) {
      console.log(e);
    }
    ƒ;
  },
  getOfficeByCompanyId: async (req, res) => {
    try {
      const { companyId } = req.query;
      const where = {};

      if (companyId) {
        where['companyId'] = companyId
      }
      const offices = await Office.findAll({
        where,
      });

      res.json(offices);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = OfficeService;
