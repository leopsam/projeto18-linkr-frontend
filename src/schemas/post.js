import Joi from "joi";

const postSchema = Joi.object({
  content: Joi.string(),
  sharedUrl: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .required(),
});

export default postSchema;
