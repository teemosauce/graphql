import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} from 'graphql'

import {
    UserModel,
    UserType,
    UserInput
} from './models'

export const user = {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        return UserModel.findById(params.id).exec()
    }
}

export const users = {
    type: new GraphQLList(UserType),
    args: {},
    resolve(root, params, options) {
        return UserModel.find().exec()
    }
}

export default {
    user: {
        type: UserType,
        args: {
            id: {
                name: 'id',
                type: new GraphQLNonNull(GraphQLID)
            }
        },
        resolve(root, params, options) {
            return UserModel.findById(params.id).exec()
        }
    },
    users: {
        type: new GraphQLList(UserType),
        args: {},
        resolve(root, params, options) {
            return UserModel.find().exec()
        }
    }
}