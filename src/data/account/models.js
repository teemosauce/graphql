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
    user_id: Types.ObjectId,
    meta: {
        type: Types.Mixed,
        default: {}
    }
}, {
    collection: 'account',
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
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
        user_id: {
            type: GraphQLString
        },
        meta: {
            type: new GraphQLObjectType({
                name: 'Meta',
                fields: {
                    value: {
                        type: GraphQLString
                    },
                    label: {
                        type: GraphQLString
                    }
                }
            })
        },
        created_at: {
            type: GraphQLString
        },
        updated_at: {
            type: GraphQLString
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
        user_id: {
            type: GraphQLString
        },
        meta: {
            type: new GraphQLInputObjectType({
                name: 'MetaInput',
                fields: {
                    value: {
                        type: GraphQLString
                    },
                    label: {
                        type: GraphQLString
                    }
                }
            })
        }
    }
})

