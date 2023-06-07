var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import Employee from "../Model/employeeDataModel.js";
import User from "../Model/userModel.js";
import AppError from "./../utils/appError.js";
import catchAsync from "../utils/appCatchasync.js";
export const getAllEmployee = catchAsync((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;
    let query = Employee.find({ isDeleted: false }).skip(skip).limit(limit);
    const userNum = yield Employee.countDocuments({ isDeleted: false });
    const employee = yield query;
    res.status(200).json({
      status: "Success",
      Result: userNum,
      data: {
        employee,
        total: userNum,
      },
    });
  })
);
export const getAllEmployees = catchAsync((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const total = yield Employee.countDocuments({ isDeleted: false });
    const employee = yield Employee.find({ isDeleted: false });

    res.status(200).json({
      employee,
      total,
    });
  })
);
export const createEmployee = catchAsync((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield Employee.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        employee,
      },
    });
  })
);
export const updateEmployee = catchAsync((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield Employee.findByIdAndUpdate(
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
  })
);
export const deleteEmployee = catchAsync((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield Employee.findByIdAndUpdate(
      { _id: req.params.empId },
      { isDeleted: true }
    );
    res.status(204).json({
      status: "Success",
      data: null,
    });
  })
);
export const getEmployee = catchAsync((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield Employee.findById(req.params.empId);
    if (!employee) {
      return next(new AppError("No  found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        employee,
      },
    });
  })
);
//# sourceMappingURL=userDataController.js.map
