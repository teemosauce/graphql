import {
    GraphQLNonNull,
    GraphQLBoolean,
} from 'graphql'

import {
    AccountModel,
    AccountType,
    AccountInput
} from './models'


const AccountCreate = {
    description: 'create new account',
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(AccountInput)
        }
    },

    async resolve(root, params, options) {
        const accountModel = new AccountModel(params.data)
        const newAccount = await accountModel.save()

        if (!newAccount) {
            throw new Error('Error adding new account')
        }

        return true
    }
}

export default {
    AccountCreate
}