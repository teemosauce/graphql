import {
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLID
} from 'graphql'

import {
    UserModel,
    UserType,
    UserInput
} from './models'


const userCreate = {
    description: 'create new user',
    type: UserType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(UserInput)
        }
    },

    async resolve(root, params, options) {
        const userModel = new UserModel(params.data)
        const newUser = await userModel.save()

        if (!newUser) {
            throw new Error('Error adding new account')
        }

        return newUser
    }
}

const userDelete = {
     description: 'delete a user',
     type: GraphQLBoolean,
     args: {
         id: {
             name: 'id',
             type: new GraphQLNonNull(GraphQLID)
         }
     },

    async resolve(root, params, options){
        return userModel.findByIdAndRemove(params.id).exec()
    }
}

export default {
    userCreate,
    userDelete
}