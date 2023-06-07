import { Request, Response, NextFunction } from "express";
import Employee from "../Model/employeeDataModel";
import AppError from "../utils/appError";
import catchAsync from "../utils/appCatchasync";


export const getAllEmployees = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const page = (req.query.page as number | any) * 1 || 1;
    const limit = (req.query.limit as number | any) * 1 || 5;
    const skip = (page - 1) * limit;

    let query = Employee.find({ isDeleted: false }).skip(skip).limit(limit);

    const employee = await query;
    const userNum = await Employee.countDocuments({ isDeleted: false });

    res.status(200).json({
      userNum,
      employee,
    });
  }
);

export const createEmployee = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const employee = await Employee.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        employee,
      },
    });
  }
);

export const updateEmployee = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const employee = await Employee.findByIdAndUpdate(
      req.params.empId,
      req.body,
      {
        new: true,
        runValidators: false,
      }
    );

    if (!employee) {
      return next(new AppError("No employee found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  }
);

export const deleteEmployee = catchAsync(async (req, res, next) => {
  console.log("perameter", req.params.empId);
  const employee = await Employee.findByIdAndUpdate(
    { _id: req.params.empId },
    { isDeleted: true }
  );

  res.status(204).json({
    status: "Success",
    data: null,
  });
});

export const getAllEmployee = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const page = (req.query.page as number | any) * 1 || 1;
    const limit = (req.query.limit as number | any) * 1 || 5;
    const skip = (page - 1) * limit;

    let query = Employee.find({ isDeleted: false }).skip(skip).limit(limit);

    const userNum = await Employee.countDocuments({ isDeleted: false });
    const employee = await query;

    res.status(200).json({
      status: "Success",
      Result: userNum,
      data: {
        employee,
        total: userNum,
      },
    });
  }
);

export const getEmployee = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const employee = await Employee.findById(req.params.empId);

    if (!employee) {
      return next(new AppError("No  found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  }
);
