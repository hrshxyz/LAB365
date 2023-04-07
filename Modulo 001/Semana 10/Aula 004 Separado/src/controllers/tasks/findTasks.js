const Task = require("../../models/task");

async function findTasks(req, res) {
    try {
      await Task.findAll({ where: { user_id: req.body.userId } }).then(
        (tasks) => {
          res.status(200).json(tasks);
        }
      );
      /*   const getTasks = await Task.findAll();
      res.status(200).json(getTasks); */
    } catch (error) {
      res
        .status(500)
        .json({ message: "Não conseguimos processar a sua solicitação!" });
    }
  };

  module.exports = findTasks