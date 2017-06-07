import {
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLID
} from 'graphql'

import {
    AccountModel,
    AccountType,
    AccountInput
} from './models'


import {
    UserModel
} from '../user/models.js'

const accountCreate = {
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

        process.nextTick(() =>{
            const userModel = new UserModel({
                account_id: newAccount._id,
                telephone: params.data && params.data.telephone,
                email: params.data && params.data.email,
            });
            userModel.save((err, res)=>{
                if(err){
                    console.log(err)
                }
            });
        })
        return true
    }
}

const accountDelete = {
     description: 'delete a account',
     type: GraphQLBoolean,
     args: {
         id: {
             name: 'id',
             type: new GraphQLNonNull(GraphQLID)
         }
     },

    async resolve(root, params, options){
        return AccountModel.findByIdAndRemove(params.id).exec()
    }
}

export default {
    accountDelete,
    accountCreate
}