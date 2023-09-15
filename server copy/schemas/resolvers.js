const {User} = require ('../models')
const {AuthenticationError} = require ('apollo-server-express')
const {signToken} = require ('../utils/auth')
const resolvers = {
    Query: {
        me: async (_,__,context)=>{
            if (context.user){
                const user = await User.findOne ({
                    _id: context.user._id
                })
                return user
            }
            throw new AuthenticationError('You must be logged in!')
        }
    },
    Mutation:{
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
    }
}