import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLID
} from 'graphql'

import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Types = Schema.Types

const schema = new Schema({
    telephone: String,
    email: String,
    username: String,
    password: String,
    openKey: String,
    userId: Types.ObjectId,
    meta: {
        type: Types.Mixed,
        default: {}
    },
    createTime: {
        type: Types.Long,
        default: Date.now
    },
    modifyTime: {
        type: Types.Long,
        default: Date.now
    }
})

export let AccountModel = mongoose.model('account', schema)
export let AccountType = new GraphQLObjectType({
    name: 'Account',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        telephone: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        openKey: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLString
        },
        createTime: {
            type: GraphQLInt
        },
        modifyTime: {
            type: GraphQLInt
        }
    }
})

export let AccountInput = new GraphQLInputObjectType({
    name: 'AccountInput',
    fields: {
        telephone: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        openKey: {
            type: GraphQLString
        },
        userId: {
            type: GraphQLString
        },
        createTime: {
            type: GraphQLInt
        },
        modifyTime: {
            type: GraphQLInt
        }
    }
})