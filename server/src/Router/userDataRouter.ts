import express from "express";
import { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/appCatchasync";
import {
  getAllEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getAllEmployees,
} from "../Controller/userDataController";

const router = express.Router();

router
  .route("/")
  .get(
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      await getAllEmployee(req, res, next);
    })
  )
  .post(
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      await createEmployee(req, res, next);
    })
  );

router.route("/re").get(
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await getAllEmployees(req, res, next);
  })
);

router
  .route("/:empId")
  .patch(
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      await updateEmployee(req, res, next);
    })
  )
  .delete(
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      await deleteEmployee(req, res, next);
    })
  )
  .get(
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      await getEmployee(req, res, next);
    })
  );

export default router;
