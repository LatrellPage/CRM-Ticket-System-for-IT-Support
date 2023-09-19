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
        _id:ID!
        title:String!
        content:String!
        createdAt:Date!
        category:Category!
        user:User!
        admin:User!
        status:String!
        assigned:Boolean
    }

    type Category {
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
        addUser(
            email: String!,
            password: String!,
            name: String!
            ): Auth
        login(
            email: String!,
            password: String!
            ): Auth
        createTicket(
            title:String!,
            content:String!,
            categoryName:String!,
            ):Ticket!
        getTicket(
            _id:ID!
            ):Ticket!
        getUserTickets(
            userId: ID!
        ):[Ticket]!
        getAllTickets: [Ticket]!
        assignTicket(
            userId: ID!,
            _id:ID!
        ):Ticket
        deleteTicket(
            _id:ID!
        ): Boolean!
    }
`

module.exports = typeDefs