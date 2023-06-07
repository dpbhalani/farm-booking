const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
export default catchAsync;
//# sourceMappingURL=appCatchasync.js.map