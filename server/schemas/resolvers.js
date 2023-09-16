const { User, Ticket } = require ('../models')
const {AuthenticationError} = require ('apollo-server-express')
const {signToken} = require ('../utils/auth')

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

    createTicket: async (parent, args) => {
      const ticket = await Ticket.create(args);

      return { ticket };
    },

    getTicket: async (parent, args, { ticket }) => {
      const getTicket = await Ticket.findOne({ _id: ticket._id });

      return getTicket;
    },

    getUserTickets: async (parent, args, { user }) => {
      const userModel = await User.findOne({ _id: user._id });
      return userModel.assignedTickets.map(x => x._id)
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