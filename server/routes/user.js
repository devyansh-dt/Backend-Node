const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');


router.get('/', userController.view);
router.get('/adduser', userController.form)
router.post('/adduser', userController.create);
router.get('/edituser/:id', userController.edit);
router.post('/edituser/:id', userController.update);
router.post('/deleteuser/:id', userController.delete);



router.get('/project/user/:user_id', projectController.viewProject);
router.get('/project/:user_id/addproject', projectController.projectform);
router.post('/project/:user_id/addproject', projectController.createProject);
router.get('/project/editproject/:project_id', projectController.editProject);
router.post('/project/editproject/:project_id', projectController.updateProject);
router.post('/project/deleteproject/:project_id', projectController.deleteProject);

  module.exports = router;