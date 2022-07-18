const service = require('../../services/sales/delete');

const deleteId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await service.deleteId(id);

    if (!result) return res.status(400).json({ message: 'Não foi possivel deletar' });

    return res.status(200).json({ message: 'produto deletado com sucesso' });
  } catch (err) {
    next(err);
  }
};

module.exports = { deleteId };
