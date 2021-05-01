import {User,UserAttributes} from '../models/user';

export const create = (userAttributes : UserAttributes) => {
    return User.create(userAttributes);
}

export const findById = (id: number) => {
    return User.findByPk(id);
};

export const deleteById = (id: number) => {
    return User.destroy({where : {id:id}});
};

export const updateUserDetails = (userAttributes : UserAttributes,id: number) => {

    const { login, password, age } = userAttributes;
    let updateData : {};

    if (login) {
        updateData = { ...updateData, login:login };
    }
    if (password) {
        updateData = { ...updateData, password:password };
    }
    if (age) {
        updateData = { ...updateData, age:age };
    }

    return User.update(updateData,{ where: { id: id } });
};