const {gql} = require ('apollo-server-express')

const typeDefs = gql`
    scalar Date

    type User {
        _id:ID!
        name:String!
        email:String!
        role:String!
        assignedTickets:String!
        skills:String!
    }

    type Query {
        me: User
    }

    type Ticket {
        ticketId:Int!
        title:String!
        content:String!
        createdAt:Date!
        category:String!
        user:User!
        admin:User!
        status:String!
        assigned:Boolean
    }

    type Category{
        name: String!
    }

    enum Roles{
        admin,
        user
    }

    enum Status{
        active,
        complete,
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        signIn(
            email: String!,
            password: String!
            ): Auth
        signUp(
            name: String!,
            email: String!,
            password: String!
            ): Auth
        createTicket(
            title:String!,
            content:String!,
            createdAt:Date!,
            category:String!,
            adminId:ID!,
            status:String!
            ):Ticket
        getTicket(
            ticketId:Int!
            ):Ticket
        getUserTickets: [Ticket]!
        getAllTickets: [Ticket]!
        assignTicket(
            userId: ID!,
            ticketId:Int!
        ):Ticket
        deleteTicket(
            ticketId:Int!
        ): Boolean!
    }
`

module.exports = typeDefs