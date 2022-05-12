"use strict";
// controllers/todo.js
var Shows = require("../models/show");
exports.getAllShows = function (req, res) {
    Shows.find()
        .then(function (show) { return res.json(show); })
        .catch(function (err) {
        return res
            .status(404)
            .json({ message: "Show/Movie not found", error: err.message });
    });
};
exports.getShowById = function (req, res) {
    Shows.find({ _id: req.params.id })
        .then(function (show) { return res.json(show); })
        .catch(function (err) {
        return res
            .status(404)
            .json({ message: "Show/Movie not found", error: err.message });
    });
};
exports.postCreateShow = function (req, res) {
    Shows.create(req.body)
        .then(function (data) { return res.json({ message: "Show/Movie added successfully", data: data }); })
        .catch(function (err) {
        return res
            .status(400)
            .json({ message: "Failed to add Show/Movie", error: err.message });
    });
};
exports.putUpdateShow = function (req, res) {
    Shows.findByIdAndUpdate(req.params.id, req.body)
        .then(function (data) {
        res.json({ message: "Updated successfully", data: data });
    })
        .catch(function (err) {
        return res
            .status(400)
            .json({ message: "Failed to update Show/Movie", error: err.message });
    });
};
exports.deleteShow = function (req, res) {
    Shows.findByIdAndRemove(req.params.id, req.body)
        .then(function (data) {
        return res.json({ message: "Show deleted successfully", data: data });
    })
        .catch(function (err) {
        return res
            .status(404)
            .json({ message: "Show not found", error: err.message });
    });
};
