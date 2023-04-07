const Task = require("../../models/task");
const { Op } = require("sequelize");

async function createTasks (req, res) {
    try {
      const task = {
        name: req.body.name,
        description: req.body.description,
        user_id: req.body.userId,
      };
  
      if (!task.name || !task.description) {
        return res.status(406).json({ message: "Invalid Fields" });
      }
  
      const taskExist = await Task.findOne({
        where: { [Op.and]: [{ name: task.name }, { user_id: task.user_id }] },
      });
      if (taskExist) {
        return res
          .status(400)
          .json({ message: "Já existe uma tarefa com este nome" });
      }
  
      console.log(task);
      const newTask = await Task.create(task);
      console.log(newTask.toJSON());
      res.status(201).json(newTask);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Não conseguimos processar a sua solicitação!" });
    }
  };

  module.exports = createTasks;