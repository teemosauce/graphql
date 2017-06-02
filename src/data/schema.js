import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'

// import UserQueries from './user/queries'
// import UserMutations from './user/mutations'

import AccountQueries from './account/queries'
import AccountMutations from './account/mutations'

// const userSchema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'Query',
//         fields: UserQueries
//     }),

//     mutation: new GraphQLObjectType({
//         name: 'Mutation',
//         fields: UserMutations
//     })
// })

const accountSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: AccountQueries
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: AccountMutations
    })
})


export {
    // userSchema,
    accountSchema
} 