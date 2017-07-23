// threads-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const threads = new Schema({
    subject: { type: String, required: true },
    content: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'users', required: true },
    board: {type: Schema.Types.ObjectId, ref: 'boards', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('threads', threads);
};
