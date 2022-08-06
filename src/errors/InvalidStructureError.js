class InvalidStructureError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
};

module.exports = InvalidStructureError;
