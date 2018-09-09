const graphql =  require('graphql');

const {
  GraphALObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

const UserType = new GraphALObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString},
    firstName: {type: GraphQLString},
    age: {type: GraphQLInt}
  }
});

const RootQuery = new GraphALObjectType({
  name: 'RootQueryType',
  fileds:{
    user:{
      type: UserType,
      args:{
        id : {
        type: GraphQLString
      }
    },
    resolve(parentVaule, args){
      
    }
    }
  }
})
