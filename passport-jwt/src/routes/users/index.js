const express = require("express");
const criteriaCreate = require("./validate/create");
const criteriaRemove = require("./validate/remove");
const criteriaToken = require("./validate/token");
const validate = require("./validate");
const router = express.Router();

module.exports = (passport) => {
  router.get(
    "/me",
    passport.authenticate("token", { session: false }),
    require("./me")
  );
  router.post("/", criteriaCreate, validate, require("./create"));
  router.delete("/:id", criteriaRemove, validate, require("./remove"));
  router.post("/token", criteriaToken, validate, require("./token"));

  return router;
};
