var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import catchAsync from "../utils/appCatchasync.js";
import { getAllEmployee, createEmployee, updateEmployee, deleteEmployee, getEmployee, getAllEmployees, } from "../Controller/userDataController.js";
const router = express.Router();
router
    .route("/")
    .get(catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getAllEmployee(req, res, next);
})))
    .post(catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield createEmployee(req, res, next);
})));
router.route("/re").get(catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getAllEmployees(req, res, next);
})));
router
    .route("/:empId")
    .patch(catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield updateEmployee(req, res, next);
})))
    .delete(catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield deleteEmployee(req, res, next);
})))
    .get(catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getEmployee(req, res, next);
})));
export default router;
//# sourceMappingURL=userDataRouter.js.map