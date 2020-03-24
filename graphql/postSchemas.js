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


// GraphQL Object Type for videoPostType
const videoPostType = new GraphQLObjectType({
  name: 'videopost',
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
          video_link: {
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
        },
        videoPosts: {
          type: new GraphQLList(videoPostType),
          resolve: function () {
            const videoPosts = VideoPostModel.find().exec()
            if (!videoPosts) {
              throw new Error('Error')
            }
            return videoPosts
          }
        },
        videoPost: {
          type: videoPostType,
          args: {
            id: {
              name: '_id',
              type: GraphQLString
            }
          },
          resolve: function (root, params) {
            const videoPostDetails = VideoPostModel.findById(params.id).exec()
            if (!videoPostDetails) {
              throw new Error('Error')
            }
            return videoPostDetails
          }
        }
      }
    }
  });



// GraphQL mutation to perform CRUD operations
  var mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: function () {
      return {
        addTextPost: {
          type: textPostType,
          args: {
            title: {
              type: new GraphQLNonNull(GraphQLString)
            },
            description: {
              type: new GraphQLNonNull(GraphQLString)
            }
          },
          resolve: function (root, params) {
            const textPostModel = new TextPostModel(params);
            const newTextPost = textPostModel.save();
            if (!newTextPost) {
              throw new Error('Error');
            }
            return newTextPost
          }
        }
      }
    }
  });

  module.exports = new GraphQLSchema({
    query: queryType,
    mutation: mutation
  });