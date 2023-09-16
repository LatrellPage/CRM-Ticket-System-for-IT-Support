const { User, Ticket, Category } = require ('../models')
const {AuthenticationError} = require ('apollo-server-express')
const {signToken} = require ('../utils/auth')
const { GraphQLScalarType } = require ('graphql')
const { Kind } = require('graphql/language');

const date = {
  Date: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue(value) {
          return new Date(value); // value from the client
      },
      serialize(value) {
          return value.getTime(); // value sent to the client
      },
      parseLiteral(ast) {
          if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
          }
          return null;
      },
  })
};

const resolvers = {
  Query: {
      me: async (parent, args,context)=>{
          if (context.user){
            return User.findOne({ _id: context.user._id })
            .populate('assignedTickets')
            .populate('skills');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation:{
    signIn: async (_, body) => {
      const user = await User.findOne({ email: body.email });
      const correctPw = await user.isCorrectPassword(body.password);
      if (!correctPw) {
        return res.status(400).json({ message: 'Wrong password!' });
      }
      const token = signToken(user);
      return {user,token};
    },

    signUp: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    createTicket: async (parent, args, { user, body}) => {
      // TODO: check if admin

      let category = await Category.findOne({where: {'name': args.categoryName}})

      if (category == null) {
        category = await Category.create({
          name: args.categoryName
        })
      }

      const ticket = await Ticket.create({
        title: args.title,
        content: args.content,
        createdAt: '01/01/2023', // TODO
        admin: user, // TODO: fix
        category: category,
      });

      return ticket;
    },

    getTicket: async (parent, args) => {
      const getTicket = await Ticket.findOne({ _id: args._id });

      if (getTicket == null) {
        throw new Error("Invalid ticket ID")
      }
      return getTicket;
    },

    getUserTickets: async (parent, args) => {
      const userModel = await User.findOne({ _id: args.userId });
      return userModel.assignedTickets
    },

    getAllTickets: async (parent, args, { user }) => {
      if (user.role != "admin") {
        throw new Error("You must be an admin to assign tickets")
      }

      const allTickets = await Ticket.find({});
      return allTickets;
    },

    assignTicket: async (parent, args, { user, body }) => {
      if (user.role != "admin") {
        throw new Error("You must be an admin to assign tickets")
      }

      const assignTicket = await Ticket.findOneAndUpdate(
        { _id: ticket._id },
        { user: body.userId},
        { new: true, runValidators: true }
      );

      await User.findOneAndUpdate(
        { _id: body.userId },
        { $addToSet: { assignedTickets: body.variables } },
        { new: true, runValidators: true }
      )
      return assignTicket;
    },

    deleteTicket: async (parent, args, { user, body }) => {
      console.log(body);
      const deleteTicket = await Ticket.findOneAndUpdate(
      { _id: ticket._id },
      { $pull: { assignedTickets: { _id: body.variables._id } } },
      { new: true }
      );
      return deleteTicket;
    },
  }
}

module.exports = resolvers;