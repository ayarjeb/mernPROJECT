import { create,getAll,getOne,deleteOne,updateOne } from "../controllers/Experience.controller.js";
import{createEducation,getAllEducation,getOneEducation,updateOneEducation,deleteOneEducation} from "../controllers/Education.controller.js";
import { createSkill, getAllSkills, getOneSkill, updateOneSkill, deleteOneSkill  } from "../controllers/Skills.controller.js";
import { Router } from "express";
import {register,login} from "../controllers/auth.controller.js"
const router=Router()
// ***********************************Experience"**********************************************************
router.route("/Experience")
      .post(create)
      .get(getAll)

router.route("/Experience/:id")
       .get(getOne)
       .put(updateOne)
       .delete(deleteOne)
//****************************************Education*****************************************************
router.route("/Education")
      .post(createEducation)
      .get(getAllEducation);

router.route("/Education/:id")
      .get(getOneEducation)
      .put(updateOneEducation)
      .delete(deleteOneEducation);

//***************************************Skills************************************************************
router.route("/Skill")
      .post(createSkill)
      .get(getAllSkills);

router.route("/Skill/:id")
      .get(getOneSkill)
      .put(updateOneSkill)
      .delete(deleteOneSkill);

      // ************************************Auth Routes***************************************************



router.post('/register',register)
router.post('/login',login)













export default router
