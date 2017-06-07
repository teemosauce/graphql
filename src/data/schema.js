import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'

import UserQueries from './user/queries'
import UserMutations from './user/mutations'

import AccountQueries from './account/queries'
import AccountMutations from './account/mutations'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            ...UserQueries,
            ...AccountQueries
        }
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            ...UserMutations,
            ...AccountMutations
        }
    })
})
export default schema
