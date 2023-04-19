var { handleError } = require("../error.js");
// var user = require("../models/user.js";
var User = require("../models/user.js");

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};
 const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                {
                    new: true,
                }
            );

            res.status(200).json(updatedUser);
        } catch (err) {
            next(err);
        }
    } else {
        return next(handleError(403, "You can only update your own account"));
    }
};
 const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id);
            await Tweet.remove({ userId: req.params.id });

            res.status(200).json("User delete");
        } catch (err) {
            next(err);
        }
    } else {
        return next(handleError(403, "You can only update your own account"));
    }
};

 const preogressIncrement = async (req, res, next) => {
    try {

        var id = req.body.id;
        User.findOneAndUpdate({ _id: id }, { $inc: { 'progress': 1 } }).exec(
            () => {
                if (err) {
                    handleError
                }
                else {
                    console.log(progress)
                    return progress
                }
            }
        );
    }
    catch (err) {
        next(err);
    }
}

 const preogressDecrement = async (req, res, next) => {
    try {

        var id = req.body.id;
        User.findOneAndUpdate({ _id: id }, { $inc: { 'progress': -1 } }).exec(
            () => {
                if (err) {
                    handleError
                }
                else {
                    console.log(progress)
                    return progress
                }
            }
        );
    }
    catch (err) {
        next(err);
    }
};

module.exports = {getUser,update,deleteUser,preogressIncrement, preogressDecrement}
