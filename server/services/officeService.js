const { Office, Company } = require("../db");

const OfficeService = {
  addOffice: async (req, res) => {
    try {
      const office = await Office.create(req.body);
      office.save();

      res.json(office);
    } catch (e) {
      console.log(e);
    }
  },
  deleteOffice: async (req, res) => {
    const { id } = req.params;

    try {
      await Office.destroy({
        where: { id }
      });

      res.json('ok')
    } catch (e) {
      console.log(e)
    }
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
        include: [{ model: Company }],
      });

      res.json(offices);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = OfficeService;
