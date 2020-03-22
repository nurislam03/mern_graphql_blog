const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLID
  } = require('graphql');
const GraphQLDate = require('graphql-date');

const TextPostModel = require('../models/TextPost');
// const VideoPostModel = require('../models/VideoPost');


// GraphQL Object Type for textPostType
const textPostType = new GraphQLObjectType({
    name: 'textpost',
    fields: function() {
        return {
            _id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            description: {
                type: GraphQLString
            },
            updated_date: {
                type: GraphQLDate
            }
        }
    }
});


// GraphQL queryType for textPostType
var queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
      return {
        textPosts: {
          type: new GraphQLList(textPostType),
          resolve: function () {
            const textPosts = TextPostModel.find().exec()
            if (!textPosts) {
              throw new Error('Error')
            }
            return textPosts
          }
        },
        textPost: {
          type: textPostType,
          args: {
            id: {
              name: '_id',
              type: GraphQLString
            }
          },
          resolve: function (root, params) {
            const textPostDetails = TextPostModel.findById(params.id).exec()
            if (!textPostDetails) {
              throw new Error('Error')
            }
            return textPostDetails
          }
        }
      }
    }
  });

  module.exports = new GraphQLSchema({
    query: queryType
  });