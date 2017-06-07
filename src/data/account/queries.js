import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} from 'graphql'

import {
    AccountModel,
    AccountType,
    AccountInput
} from './models'

const account = {
    type: AccountType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        return AccountModel.findById(params.id).exec()
    }
}

const accounts = {
    type: new GraphQLList(AccountType),
    args: {},
    resolve(root, params, options) {
        return AccountModel.find().exec()
    }
}

export default {
    account,
    accounts
}