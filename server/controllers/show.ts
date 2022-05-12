// controllers/todo.js
const Shows = require("../models/show");

exports.getAllShows = (req: any, res: { json: (arg0: any) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error: any; }): any; new(): any; }; }; }) => {
    Shows.find()
        .then((show: any) => res.json(show))
        .catch((err: { message: any; }) =>
            res
                .status(404)
                .json({ message: "Show/Movie not found", error: err.message })
        );
};

exports.getShowById = (req: any, res: { json: (arg0: any) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error: any; }): any; new(): any; }; }; }) => {
    Shows.find({_id:req.params.id})
        .then((show: any) => res.json(show))
        .catch((err: { message: any; }) =>
            res
                .status(404)
                .json({ message: "Show/Movie not found", error: err.message })
        );
};
exports.postCreateShow = (req: { body: any; }, res: { json: (arg0: { message: string; data: any; }) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error: any; }): any; new(): any; }; }; }) => {
    Shows.create(req.body)
        .then((data: any) => res.json({ message: "Show/Movie added successfully", data }))
        .catch((err: { message: any; }) =>
            res
                .status(400)
                .json({ message: "Failed to add Show/Movie", error: err.message })
        );
};

exports.putUpdateShow = (req: { params: { id: any; }; body: any; }, res: { json: (arg0: { message: string; data: any; }) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error: any; }): any; new(): any; }; }; }) => {
    Shows.findByIdAndUpdate(req.params.id, req.body)
        .then((data: any) => 
        {
        
        res.json({ message: "Updated successfully",data})
        }
        )
        .catch((err: { message: any; }) =>
            res
                .status(400)
                .json({ message: "Failed to update Show/Movie", error: err.message })
        );
};

exports.deleteShow = (req: { params: { id: any; }; body: any; }, res: { json: (arg0: { message: string; data: any; }) => any; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error: any; }): any; new(): any; }; }; }) => {
    Shows.findByIdAndRemove(req.params.id, req.body)
        .then((data: any) =>
 
            res.json({ message: "Show deleted successfully", data })
        )
        .catch((err: { message: any; }) =>
            res
                .status(404)
                .json({ message: "Show not found", error: err.message })
        );
};