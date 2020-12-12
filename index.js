const {ApolloServer, gql} = require('apollo-server');


const students = [
    {   "id": 1,
        "name": "Atif",
        "email": "atifsample@gmail.com",
        "age": 29
    },
    {   "id": 2,
        "name": "John",
        "email": "johnsample@gmail.com",
        "age": 26
    },
    {   "id": 3,
        "name": "Karan",
        "email": "karansample@gmail.com",
        "age": 24
    },
    {   "id": 4,
        "name": "Ponting",
        "email": "pontingsample@gmail.com",
        "age": 31
    }
];

const resolvers = {
    Query: {
        students: () => students,
    },
}

const typeDefs = gql`

type Student {
    id: Int
    name: String
    email: String
    age: Int
}

type Query {
    students: [Student]
}`;


const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log('Server ready at =>\n', url)
});
