const { User } = require ('../models')
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
      login: async (_, body) => {
        const user = await User.findOne({ email: body.email });
        const correctPw = await user.isCorrectPassword(body.password);
        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        return {user,token};
      },

//         addUser: async (parent, args) => {
//             const user = await User.create(args);
//             const token = signToken(user);
      
//             return { token, user };
//           },
//           login: async (parent, { email, password }) => {
//             const user = await User.findOne({ email });
      
//             if (!user) {
//               throw new AuthenticationError('Incorrect credentials');
//             }
      
//             const correctPw = await user.isCorrectPassword(password);
      
//             if (!correctPw) {
//               throw new AuthenticationError('Incorrect credentials');
//             }
      
//             const token = signToken(user);
//             return { token, user };
//           },
 }
}