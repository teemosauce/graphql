import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    graphql,
    buildSchema 
} from 'graphql'

import mongoose from 'mongoose'
import {
    AccountType,
    AccountModel
} from '../account/models'

import _schema from '../schema'
const Schema = mongoose.Schema
const Types = Schema.Types

const schema = new Schema({
    account_id: Types.ObjectId,
    telephone: String,
    email: String,
    name: String,
    sex: Number,
    age: Number
}, {
    collection: 'user',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

export let UserModel = mongoose.model('user', schema)
export let UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        account_id: {
            type: GraphQLString
        },
        account: {
            type: AccountType,

        },
        telephone: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        sex: {
            type: GraphQLInt
        },
        age: {
            type: GraphQLInt
        },
        created_at: {
            type: GraphQLString
        },
        updated_at: {
            type: GraphQLString
        },

        format: {
            type: GraphQLString,
            async resolve(obj){
                var result = await graphql(_schema)
                console.log(result)
                return result
            }
        }
    }
})

export let UserInput = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        account_id: {
            type: GraphQLString
        },
        telephone: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        sex: {
            type: GraphQLInt
        },
        age: {
            type: GraphQLInt
        }
    }
})