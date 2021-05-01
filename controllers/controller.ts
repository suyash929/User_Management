import * as services from '../services/service';

const addUser = async (req:any,res:any) => {
    await services.create(req.body)
    .then((data) => {
        res.send("Data succesfully added => " +data);
    }).catch((addError) => {
        res.status(500).send("error while adding user => "+addError);
    });
};

const findUserById = async (req:any,res:any) => {
    await services.findById(req.params.id)
    .then((data) => {
        const getData = data ? data : "No data found";
        res.send(getData);
    }).catch((getError) => {
        res.status(500).send("error while getting user data => "+getError);
    });
};

const deleteUser = async (req:any,res:any) => {
    await services.deleteById(req.params.id)
    .then((data) => {
        res.send("Data deleted successfully => "+data);
    }).catch((deleteError) => {
        res.status(500).send("error while deleteing the data => "+deleteError);
    })
};

const updateUser = async (req:any,res:any) => {
    await services.updateUserDetails(req.body,req.params.id)
    .then((data) => {
        res.send("Data updated successfully => "+data+" rows affected");
    }).catch((updateError) => {
        res.status(500).send("error while updating record => "+updateError);
    })
};

export const controller = {
    addUser : addUser,
    findUserById : findUserById,
    deleteUser : deleteUser,
    updateUser : updateUser
};